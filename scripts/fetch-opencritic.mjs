// Fetches current OpenCritic "Top Critic Average" scores at build time and
// writes them to src/data/opencritic.json, which the project banners prefer
// over the fallback `criticScore` values in src/constants.ts.
//
// Runs in the deploy workflow with the OPENCRITIC_API_KEY secret (RapidAPI).
// It never fails the build: without a key, or if a request fails, that game
// simply keeps its fallback score.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outFile = path.join(root, 'src/data/opencritic.json');
const API_HOST = 'opencritic-api.p.rapidapi.com';
const API_BASE = process.env.OPENCRITIC_API_BASE || `https://${API_HOST}`;
const key = process.env.OPENCRITIC_API_KEY;

// Game IDs come from the OpenCritic links already in the project data.
const constants = fs.readFileSync(path.join(root, 'src/constants.ts'), 'utf8');
const ids = [...new Set([...constants.matchAll(/opencritic\.com\/game\/(\d+)/g)].map((m) => m[1]))];

if (!key) {
  console.log('opencritic: OPENCRITIC_API_KEY not set; using fallback scores from src/constants.ts');
  process.exit(0);
}

const scores = {};
for (const id of ids) {
  try {
    const res = await fetch(`${API_BASE}/game/${id}`, {
      headers: { 'X-RapidAPI-Key': key, 'X-RapidAPI-Host': API_HOST },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const game = await res.json();
    const score = Math.round(game.topCriticScore);
    // OpenCritic reports -1 (or nothing) when a game has no score yet.
    if (!Number.isFinite(score) || score <= 0 || score > 100) throw new Error(`no usable score (${game.topCriticScore})`);
    scores[id] = score;
    console.log(`opencritic: ${id} ${game.name ?? ''} -> ${score}`);
  } catch (err) {
    console.warn(`opencritic: ${id} kept fallback (${err.message})`);
  }
}

fs.writeFileSync(outFile, JSON.stringify(scores, null, 2) + '\n');
console.log(`opencritic: wrote ${Object.keys(scores).length}/${ids.length} live scores`);
