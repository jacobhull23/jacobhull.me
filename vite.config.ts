import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({isSsrBuild}) => ({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: isSsrBuild
    ? undefined
    : {
        rollupOptions: {
          output: {
            // Libraries change far less often than site content, so a separate
            // vendor chunk stays cached in visitors' browsers across deploys.
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'motion/react'],
            },
          },
        },
      },
}));
