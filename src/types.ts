export interface Project {
  title: string;
  category: "Key Project" | "Internal Branding" | "Digital Media & Web Entertainment" | "Branded & Performance Marketing" | "Public & Media Content";
  role: string;
  roleBreakdown?: {
    planning: number;
    filming: number;
    editing: number;
  };
  description: string;
  intent: string;
  challenge?: string;
  approach?: string;
  execution?: string[];
  impact?: string[];
  results: string[];
  links: { name: string; url: string }[];
  tags?: string[];
  image?: string;
  aspectRatio?: string;
}

export interface Expertise {
  title: string;
  description: string;
  projects: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  programs: { name: string; link: string }[];
  results?: string[];
}
