export interface Experience {
  id: string;
  company: string;
  logoUrl?: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  link?: {
    text: string;
    url: string;
  };
}

export interface Project {
  id: string;
  title: string;
  role: string;
  focusArea?: string;
  /** One public, verifiable result line, shown prominently on the banner. */
  outcome?: string;
  year: string;
  description: string;
  tags: string[];
  imageUrl: string;
  studio?: string;
  studioLogoUrl?: string;
  gameLogoUrl?: string;
  color?: string;
  invertLogo?: boolean;
  logoScale?: number;
  useColorForLogo?: boolean;
  platforms?: string[];
  videoUrl?: string;
  websiteUrl?: string;
  criticScore?: number;
  criticUrl?: string;
  /** Shown as a smaller card in the "More projects" row instead of a full-screen banner. */
  compact?: boolean;
}

export interface Capability {
  id: string;
  title: string;
  description: string;
  /** Where this was done, shown as small print under the description. */
  evidence: string;
}

export interface Writing {
  id: string;
  title: string;
  publication: string;
  publicationLogo?: string;
  date: string;
  link: string;
  category: string;
  image?: string;
}
