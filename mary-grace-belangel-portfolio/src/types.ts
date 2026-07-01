export interface PortfolioItem {
  id: string;
  title: string;
  platform: 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'meta';
  category: string; // 'Reel Cover' | 'Promo Post' | 'Carousel' | 'Story Template' | 'Ad Creative'
  filter: 'instagram' | 'facebook' | 'video' | 'promo';
  caption: string;
  metrics?: string; // e.g. "24% higher CTR" or "150K+ plays"
  accentColor: string; // teal or matching colors for the custom graphic representation
  visualStyle: {
    gradient: string;
    patternType: 'grid' | 'dots' | 'circles' | 'waves';
    primaryIcon: string; // name of a lucide icon
    badgeText?: string;
  };
}

export interface WorkExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  isCurrent?: boolean;
}

export interface ToolItem {
  name: string;
  category: 'design' | 'ads' | 'crm' | 'communication' | 'productivity' | 'general';
  icon: string; // Lucide icon name
  rating?: string; // e.g. "Expert", "Pro"
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  verificationUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating?: number; // e.g., 5
  avatarInitials?: string; // e.g., "VB"
}

export interface ProfileConfig {
  name: string;
  titles: string[];
  photoUrl: string; // path or URL to the user's photo
  email: string;
  phone: string;
  whatsapp: string;
}


