import { PortfolioItem, WorkExperienceItem, ToolItem, CertificationItem, TestimonialItem, ProfileConfig } from './types';
import profileImage from './assets/images/profile_headshot_yellow_1782874094145.jpg';

export const profileData: ProfileConfig = {
  name: 'Mary Grace Belangel',
  titles: [
    'Social Media Manager',
    'Meta Ads Manager',
    'Admin Manager',
    'Virtual Assistant'
  ],
  photoUrl: profileImage, 
  email: 'marygracebelangel26@gmail.com',
  phone: '+63 998 475 7817',
  whatsapp: '+639984757817'
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Client Acquisition Mastery Carousel',
    platform: 'instagram',
    category: 'Carousel Post',
    filter: 'instagram',
    caption: 'Designed an educational multi-slide Carousel for Instagram to illustrate strategic marketing frameworks. Structured to retain readers and maximize saves, resulting in an 18% boost in general profile engagement.',
    metrics: '+18% Engagement',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-teal-950/80 via-neutral-900 to-neutral-950',
      patternType: 'grid',
      primaryIcon: 'LayoutGrid',
      badgeText: 'Canva Pro'
    }
  },
  {
    id: 'port-2',
    title: 'REVFIT Gym Promotion Reel',
    platform: 'instagram',
    category: 'Reel Cover',
    filter: 'video',
    caption: 'Dynamic thumb design and high-contrast caption overlay for a local fitness marketing campaign at REVFIT, Australia. Optimized for the Instagram feed to capture immediate attention and increase watch retention.',
    metrics: '15K+ Plays',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-neutral-900 via-teal-950/40 to-neutral-950',
      patternType: 'dots',
      primaryIcon: 'Play',
      badgeText: 'CapCut Pro'
    }
  },
  {
    id: 'port-3',
    title: 'Therapy Dogs Outreach Post',
    platform: 'facebook',
    category: 'Promo Post',
    filter: 'facebook',
    caption: 'Community advocacy awareness visual designed for Therapy Dogs NSW, Australia. Features structured storytelling layout, clear CTA prompts, and highly engaging emotional imagery.',
    metrics: '3.2K Shares',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-teal-950/60 via-neutral-900 to-neutral-950',
      patternType: 'circles',
      primaryIcon: 'Heart',
      badgeText: 'Meta Suite'
    }
  },
  {
    id: 'port-4',
    title: 'The Book Doula Webinar Campaign',
    platform: 'meta',
    category: 'Promo Post',
    filter: 'promo',
    caption: 'High-performing promotional marketing creative designed for Vanessa Barrington\'s interactive book launch webinar. Focused on conversion design best practices and clear typography hierarchy.',
    metrics: '850+ Signups',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-neutral-950 via-teal-950/50 to-neutral-900',
      patternType: 'waves',
      primaryIcon: 'Calendar',
      badgeText: 'Webinar Promo'
    }
  },
  {
    id: 'port-5',
    title: 'Meta Ads Conversion Creative',
    platform: 'meta',
    category: 'Ad Creative',
    filter: 'promo',
    caption: 'Conversion-optimized Meta ad creative designed for an international consulting business, engineered to trigger immediate scroll-stopping interest and drive warm leads.',
    metrics: '4.8% CTR (Avg)',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-teal-950/70 via-neutral-900 to-neutral-950',
      patternType: 'grid',
      primaryIcon: 'TrendingUp',
      badgeText: 'Meta Ads'
    }
  },
  {
    id: 'port-6',
    title: 'Short-Form Hook Video Cover',
    platform: 'tiktok',
    category: 'Reel Cover',
    filter: 'video',
    caption: 'High-energy, thumb-stopping short-form video design and caption framework engineered for high CTR. Leveraged strong color blocking and psychological hooks.',
    metrics: '120K Views',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-neutral-900 via-teal-950/50 to-neutral-950',
      patternType: 'dots',
      primaryIcon: 'Tv',
      badgeText: 'TikTok SEO'
    }
  },
  {
    id: 'port-7',
    title: 'Client Interactive Q&A Stories',
    platform: 'instagram',
    category: 'Story Template',
    filter: 'instagram',
    caption: 'A professional set of custom-branded interactive Story templates designed for Canva. Tailored specifically to boost engagement rate and start direct message (DM) conversations.',
    metrics: '92% Sticker Rate',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-teal-950/40 via-neutral-900 to-neutral-950',
      patternType: 'circles',
      primaryIcon: 'MessageCircle',
      badgeText: 'Interactive'
    }
  },
  {
    id: 'port-8',
    title: 'Active Fitness Storytelling Post',
    platform: 'facebook',
    category: 'Promo Post',
    filter: 'facebook',
    caption: 'Community story-driven post for Active Fitness Tamworth, Australia. Focused on member testimonial spotlights and high-retention layout styles to build brand authority.',
    metrics: '45 Trials Booked',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-neutral-950 via-teal-950/60 to-neutral-900',
      patternType: 'waves',
      primaryIcon: 'UserCheck',
      badgeText: 'Local Gym'
    }
  },
  {
    id: 'port-9',
    title: 'Meta Retargeting Campaign Visual',
    platform: 'meta',
    category: 'Ad Creative',
    filter: 'promo',
    caption: 'Dynamic retargeting graphic focused on overcoming custom purchase objections, engineered to recapture warm abandoned carts and drive strong conversion rates.',
    metrics: '5.2x ROAS',
    accentColor: '#14B8A6',
    visualStyle: {
      gradient: 'from-teal-950/80 via-neutral-950 to-neutral-900',
      patternType: 'grid',
      primaryIcon: 'Percent',
      badgeText: 'Retargeting'
    }
  }
];

export const workExperience: WorkExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Social Media Manager',
    company: 'REVFIT',
    location: 'Australia',
    period: '2024 – Present',
    bullets: [
      'Manage daily content publishing, scheduling, and community interaction across all key platforms.',
      'Craft highly engaging, search-optimized captions, reel covers, and promotional post graphics.',
      'Design and script high-performance gym marketing campaigns to drive local gym membership trials.',
      'Track fitness audience analytics to adjust storytelling strategies and maximize weekly content reach.'
    ],
    isCurrent: true
  },
  {
    id: 'exp-2',
    role: 'Marketing and Operations Manager',
    company: 'The Book Doula by Vanessa Barrington',
    location: 'Australia / Remote',
    period: '2026',
    bullets: [
      'Directed full operational launch strategies for book publications, webinars, and audio content.',
      'Managed general social media operations, webinar scheduling pipelines, and podcast editing tracks.',
      'Coordinated email marketing list segmentation and designed premium outreach marketing materials.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Social Media Manager',
    company: 'Active Fitness Tamworth',
    location: 'Australia',
    period: '2023',
    bullets: [
      'Created and implemented high-retention content strategy focused on emotional local storytelling.',
      'Designed print and digital gym promotion banners, member checklists, and community assets.',
      'Increased general engagement statistics and page likes through targeted interaction campaigns.'
    ]
  },
  {
    id: 'exp-4',
    role: 'Social Media Manager',
    company: 'Therapy Dogs NSW',
    location: 'Australia',
    period: '2023',
    bullets: [
      'Developed and posted heart-warming community outreach campaigns to foster trust and brand awareness.',
      'Coordinated digital event promotion templates, local awareness post schedules, and volunteer guides.',
      'Leveraged organic reach on Meta pages to coordinate community dog handler signups.'
    ]
  },
  {
    id: 'exp-5',
    role: 'Virtual Assistant / Social Media Manager',
    company: 'Freelance',
    location: 'Global (Australia, US, Online)',
    period: '2016 – Present',
    bullets: [
      'Provide general executive assistant operations, inbox management, and calendar scheduling.',
      'Formulate lead generation funnels, cold email lists, and automate pipelines using Zapier and CRMs.',
      'Formulate and design custom social media templates, blog infographics, newsletters, and video reels.'
    ]
  },
  {
    id: 'exp-6',
    role: 'Executive Assistant',
    company: 'L7 Pictures – American Dream TV Show',
    location: 'USA / Remote',
    period: '2021',
    bullets: [
      'Provided high-level virtual support, client liaison support, and coordinated internal production agendas.',
      'Managed executive calendars, coordinated filming schedules, and tracked cross-team correspondence.',
      'Optimized administrative workflows to improve overall film production coordination speeds.'
    ]
  },
  {
    id: 'exp-7',
    role: 'Newsletter Writer',
    company: 'Online Bible College',
    location: 'Remote',
    period: '2024',
    bullets: [
      'Authored, formatted, and copy-edited weekly spiritual educational newsletters sent to thousands.',
      'Structured reader engagement flows to increase call-to-action click-through rates on deep study guides.'
    ]
  },
  {
    id: 'exp-8',
    role: 'College Instructor',
    company: 'Brokenshire College Toril Inc.',
    location: 'Philippines',
    period: '2016 – 2021',
    bullets: [
      'Instructed tertiary classes in General Science and Media & Information Literacy.',
      'Pioneered interactive lesson structures, digital curriculum delivery, and student communication portals.'
    ]
  }
];

export const toolsList: ToolItem[] = [
  // Design & Video
  { name: 'Canva Pro', category: 'design', icon: 'Palette', rating: 'Expert' },
  { name: 'CapCut Pro', category: 'design', icon: 'Video', rating: 'Expert' },
  { name: 'Graphic Design', category: 'design', icon: 'Sparkles', rating: 'Pro' },
  
  // Marketing & Ads
  { name: 'Meta Business Suite', category: 'ads', icon: 'Meta', rating: 'Expert' },
  { name: 'Meta Pixels', category: 'ads', icon: 'Target', rating: 'Expert' },
  { name: 'Hootsuite', category: 'ads', icon: 'Send', rating: 'Pro' },
  { name: 'Google Analytics', category: 'ads', icon: 'BarChart3', rating: 'Pro' },
  
  // Email & Newsletters
  { name: 'Mailchimp', category: 'crm', icon: 'Mail', rating: 'Expert' },
  { name: 'Klaviyo', category: 'crm', icon: 'MailOpen', rating: 'Pro' },
  { name: 'Brevo', category: 'crm', icon: 'Inbox', rating: 'Pro' },
  { name: 'Newsletter Writing', category: 'crm', icon: 'FileText', rating: 'Expert' },

  // CRM, Automation & Workspace
  { name: 'Zapier', category: 'crm', icon: 'Zap', rating: 'Pro' },
  { name: 'Zoho CRM', category: 'crm', icon: 'Database', rating: 'Pro' },
  { name: 'Pipedrive', category: 'crm', icon: 'GitMerge', rating: 'Pro' },
  { name: 'Trello', category: 'productivity', icon: 'Trello', rating: 'Expert' },
  { name: 'Notion', category: 'productivity', icon: 'BookOpen', rating: 'Expert' },
  { name: 'Google Workspace', category: 'productivity', icon: 'FolderOpen', rating: 'Expert' },
  { name: 'Microsoft Teams', category: 'productivity', icon: 'Users', rating: 'Pro' },
  { name: 'Calendly', category: 'productivity', icon: 'Calendar', rating: 'Expert' },
  { name: 'Jotform', category: 'productivity', icon: 'CheckSquare', rating: 'Pro' },

  // Specialized VA tools
  { name: 'ChatGPT / AI Prompts', category: 'general', icon: 'Cpu', rating: 'Expert' },
  { name: 'Kixie', category: 'general', icon: 'PhoneCall', rating: 'Pro' },
  { name: 'Zendesk', category: 'general', icon: 'LifeBuoy', rating: 'Pro' },
  { name: 'Apollo.io', category: 'general', icon: 'SearchCode', rating: 'Pro' },
  { name: 'Wodify', category: 'general', icon: 'Activity', rating: 'Pro' },
  { name: 'Kajabi', category: 'general', icon: 'Compass', rating: 'Pro' },
  { name: 'Carrd', category: 'general', icon: 'Code', rating: 'Expert' }
];

export const certifications: CertificationItem[] = [
  {
    title: 'Certified Social Media Manager',
    issuer: 'PROVA',
    year: '2022',
    icon: 'Award'
  },
  {
    title: 'Xero Certified - Bookkeeping',
    issuer: 'PROVA',
    year: '2026',
    icon: 'ShieldCheck'
  },
  {
    title: 'Master of Arts in Educational Management',
    issuer: 'Holy Cross of Davao College (Undergraduate Studies)',
    year: 'Graduate Level',
    icon: 'GraduationCap'
  }
];

export const testimonialsList: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Vanessa Barrington',
    role: 'Founder & Publisher',
    company: 'The Book Doula',
    testimonial: 'Mary Grace has been an indispensable part of my team. She handled our book publication and webinar launch campaigns flawlessly, managing social scheduling, podcast tracks, and outreach marketing materials. Her organization and system tracking kept us completely on target.',
    rating: 5,
    avatarInitials: 'VB'
  },
  {
    id: 'test-2',
    name: 'Marcus Thompson',
    role: 'Owner & General Manager',
    company: 'REVFIT',
    testimonial: 'Working with Mary Grace has been a complete game changer for our gym operations. She handles all our daily publishing, captioning, and community interactions. Her creative layouts and strategic marketing campaigns have driven a steady flow of local leads.',
    rating: 5,
    avatarInitials: 'MT'
  },
  {
    id: 'test-3',
    name: 'Jennifer Wright',
    role: 'Marketing Director',
    company: 'Active Fitness Tamworth',
    testimonial: 'Mary Grace possesses an exceptional eye for design and audience engagement. She designed amazing promotional banners and local gym checklists that elevated our brand identity. She is highly professional, communicative, and reliable.',
    rating: 5,
    avatarInitials: 'JW'
  }
];

