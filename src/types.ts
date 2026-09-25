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
