import { 
  Palette, 
  Video, 
  Sparkles, 
  Megaphone, 
  Target, 
  Send, 
  BarChart3, 
  Mail, 
  MailOpen, 
  Inbox, 
  FileText, 
  Zap, 
  Database, 
  GitMerge, 
  Trello, 
  BookOpen, 
  FolderOpen, 
  Users, 
  Calendar, 
  CheckSquare, 
  Cpu, 
  PhoneCall, 
  LifeBuoy, 
  Search, 
  Activity, 
  Compass, 
  Code 
} from 'lucide-react';
import { toolsList } from '../data';

export default function Tools() {
  
  // Custom categories for presentation
  const categories = [
    { id: 'design', name: 'Creative & Design' },
    { id: 'ads', name: 'Ads & Campaigns' },
    { id: 'crm', name: 'CRM & Automation' },
    { id: 'productivity', name: 'Productivity & Collab' },
    { id: 'general', name: 'Specialized VA Platforms' }
  ];

  // Helper to dynamically get accurate brand logos or fallback Lucide icons based on tool names
  const getToolLogo = (toolName: string, iconName: string) => {
    const lowerName = toolName.toLowerCase();

    // 1. Canva Pro
    if (lowerName.includes('canva')) {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#00C4CC" />
          <path d="M12 18.2c-3.4 0-6.2-2.8-6.2-6.2S8.6 5.8 12 5.8s6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2zm0-10.4c-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2-1.9-4.2-4.2-4.2z" fill="#FFFFFF" />
          <circle cx="12" cy="12" r="2.2" fill="#FFFFFF" />
        </svg>
      );
    }

    // 2. CapCut
    if (lowerName.includes('capcut')) {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#0F0F0F" />
          <path d="M7 6l10 10M17 6L7 16" stroke="#00C4CC" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="12" cy="11" r="2.5" fill="#FFFFFF" />
        </svg>
      );
    }

    // 3. Meta (Business Suite & Pixels)
    if (lowerName.includes('meta')) {
      return (
        <svg className="w-5 h-5 text-[#0064E0]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.142 5.25c-1.396 0-2.67.65-3.483 1.763-.356.488-.663 1.047-.905 1.65a11.166 11.166 0 00-.911-1.65 4.316 4.316 0 00-3.483-1.763c-2.583 0-4.61 2.128-4.61 4.75 0 2.622 2.027 4.75 4.61 4.75 1.396 0 2.67-.65 3.483-1.763.356-.488.663-1.047.905-1.65.242.603.549 1.162.911 1.65a4.316 4.316 0 003.483 1.763c2.583 0 4.61-2.128 4.61-4.75 0-2.622-2.027-4.75-4.61-4.75zm-6.782 7.55c-1.503 0-2.684-1.226-2.684-2.8s1.181-2.8 2.684-2.8c.84 0 1.597.387 2.083 1.037.142.19.262.4.359.626h.001c.143.342.235.72.268 1.114a2.721 2.721 0 01-2.711 2.823zm6.782 0c-.84 0-1.597-.387-2.083-1.037a3.424 3.424 0 01-.359-.626h-.001a4.264 4.264 0 01-.268-1.114 2.721 2.721 0 012.711-2.823c1.503 0 2.684 1.226 2.684 2.8s-1.181 2.8-2.684 2.8z" />
        </svg>
      );
    }

    // 4. Zapier
    if (lowerName.includes('zapier')) {
      return (
        <svg className="w-5 h-5 text-[#FF4F00]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.25 1.5h1.5a.75.75 0 01.75.75v7.5l5.3-5.3a.75.75 0 011.06 1.06l-5.3 5.3h7.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75h-7.5l5.3 5.3a.75.75 0 01-1.06 1.06l-5.3-5.3v7.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-7.5l-5.3 5.3a.75.75 0 01-1.06-1.06l5.3-5.3H1.5a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75h7.5l-5.3-5.3A.75.75 0 014.71 3.01l5.3 5.3v-7.5a.75.75 0 01.75-.75z" />
        </svg>
      );
    }

    // 5. Notion
    if (lowerName.includes('notion')) {
      return (
        <svg className="w-5 h-5 text-[#F5F5F5]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.12 2.88C3.12 3 2.15 3.14 2.15 4.41v15.18c0 1.25.97 1.53 1.97 1.53h15.76c1 0 1.97-.28 1.97-1.53V4.41c0-1.27-.97-1.53-1.97-1.53H4.12zm1.61 2.12h12.54c.4 0 .73.2.73.57v12.86c0 .37-.33.57-.73.57H5.73c-.4 0-.73-.2-.73-.57V5.57c0-.37.33-.57.73-.57zm1.18 1.84v9.16l4.47-5.46v5.46h1.96V6.84h-1.96L7.69 12.3V6.84H6.91z" />
        </svg>
      );
    }

    // 6. Trello
    if (lowerName.includes('trello')) {
      return (
        <svg className="w-5 h-5 text-[#0079BF]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.5 13c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v9zm7-4c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v5z" />
        </svg>
      );
    }

    // 7. Google Workspace / Google Analytics
    if (lowerName.includes('google workspace') || lowerName.includes('google drive')) {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.1a6.9 6.9 0 010-4.2V7.06H2.18a11.99 11.99 0 000 9.88l3.66-2.84z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.13-4.53z" fill="#EA4335" />
        </svg>
      );
    }

    if (lowerName.includes('google analytics')) {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 19h3V9H6v10zm5 0h3V5h-3v14zm5 0h3v-7h-3v7z" fill="#F4B400" />
          <circle cx="7.5" cy="7.5" r="1.5" fill="#F4B400" />
          <circle cx="12.5" cy="3.5" r="1.5" fill="#F4B400" />
          <circle cx="17.5" cy="10.5" r="1.5" fill="#F4B400" />
        </svg>
      );
    }

    // 8. ChatGPT / OpenAI
    if (lowerName.includes('chatgpt') || lowerName.includes('ai prompts') || lowerName.includes('openai')) {
      return (
        <svg className="w-5 h-5 text-[#10A37F]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.17 10.43a4.2 4.2 0 00-.31-3.66 4.3 4.3 0 00-3.1-2.18 4.23 4.23 0 00-4.05 1.14 4.2 4.2 0 00-3.56-.34 4.3 4.3 0 00-2.48 2.86 4.23 4.23 0 00.91 4.14 4.2 4.2 0 00-.31 3.66 4.3 4.3 0 003.1 2.18 4.21 4.21 0 001.3.2 4.26 4.26 0 002.75-1 4.2 4.2 0 003.56.34 4.3 4.3 0 002.48-2.86 4.23 4.23 0 00-.91-4.14c.2.14.41.25.63.32zm-7.6 7.64a2.76 2.76 0 01-1.37-.36l3.41-1.97a.4.4 0 00.2-.34v-4.75l1.63.94a.04.04 0 01.02.04v3.94a2.74 2.74 0 01-3.89 2.5zm-5.45-3.15a2.74 2.74 0 01-.52-1.3l3.41-1.97a.4.4 0 00.2-.34V6.56l1.63.94a.04.04 0 01.02.04v3.94a2.74 2.74 0 01-4.74 1.83zM6.6 9.48a2.74 2.74 0 01.85-1.11l3.41 1.97c.1.06.18.15.2.26a.4.4 0 00.2.34v4.75l-1.63-.94a.04.04 0 01-.02-.04V6.77a2.74 2.74 0 013-.29z"/>
        </svg>
      );
    }

    // 9. Mailchimp
    if (lowerName.includes('mailchimp')) {
      return (
        <svg className="w-5 h-5 text-[#FFE01B]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.6 14.3c-.4.4-.9.7-1.6.7s-1.2-.3-1.6-.7c-.4-.4-.5-.9-.5-1.4 0-.5.2-1 .5-1.4.4-.4.9-.6 1.6-.6s1.2.2 1.6.6c.4.4.5.9.5 1.4 0 .5-.2 1-.5 1.4zm2.1-5c-.1.3-.3.5-.6.6-.3.1-.6 0-.8-.2-.3-.3-.7-.4-1.2-.4s-.9.1-1.2.4c-.2.2-.5.3-.8.2-.3-.1-.5-.3-.6-.6-.1-.3 0-.6.2-.8.5-.5 1.3-.8 2.4-.8s1.9.3 2.4.8c.2.2.3.5.2.8z" />
        </svg>
      );
    }

    // 10. Klaviyo
    if (lowerName.includes('klaviyo')) {
      return (
        <svg className="w-5 h-5 text-[#14B8A6]" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" opacity="0.8" />
          <rect x="3" y="14" width="7" height="7" rx="1" opacity="0.6" />
          <rect x="14" y="14" width="7" height="7" rx="1" opacity="0.4" />
        </svg>
      );
    }

    // 11. Zoho CRM
    if (lowerName.includes('zoho')) {
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#E21C26" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#3F9C35" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#009AD8" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#F9A01B" />
        </svg>
      );
    }

    // 12. Teams
    if (lowerName.includes('teams')) {
      return (
        <svg className="w-5 h-5 text-[#4B53BC]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 6c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm6.5 4c1.38 0 2.5-1.12 2.5-2.5S18.88 5 17.5 5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5zM11 8c-2.33 0-7 1.17-7 3.5V14h14v-2.5c0-2.33-4.67-3.5-7-3.5zm6.5 3c-.18 0-.37.01-.56.04.9.65 1.56 1.57 1.83 2.66l.23.8V14h4v-1.5c0-1.83-3.67-2.5-5.5-2.5z" />
        </svg>
      );
    }

    // 13. Calendly
    if (lowerName.includes('calendly')) {
      return (
        <svg className="w-5 h-5 text-[#006BFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="4" />
          <path d="M16 2v4M8 2v4M3 10h18M8 14h8M8 18h5" />
        </svg>
      );
    }

    // 14. Zendesk
    if (lowerName.includes('zendesk')) {
      return (
        <svg className="w-5 h-5 text-[#03363D]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 10h16L12 2zm-8 10l8 8 8-8H4z" />
        </svg>
      );
    }

    // 15. Hootsuite
    if (lowerName.includes('hootsuite')) {
      return (
        <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a9 9 0 00-9 9c0 1.9.6 3.7 1.6 5.2L3 20l3.8-1.6c1.5 1 3.3 1.6 5.2 1.6a9 9 0 009-9 9 9 0 00-9-9zm-3 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
      );
    }

    // Default Fallbacks using original Lucide icon classes
    switch (iconName) {
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Meta': return <Megaphone className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Send': return <Send className="w-5 h-5" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5" />;
      case 'Mail': return <Mail className="w-5 h-5" />;
      case 'MailOpen': return <MailOpen className="w-5 h-5" />;
      case 'Inbox': return <Inbox className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'GitMerge': return <GitMerge className="w-5 h-5" />;
      case 'Trello': return <Trello className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'FolderOpen': return <FolderOpen className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5" />;
      case 'LifeBuoy': return <LifeBuoy className="w-5 h-5" />;
      case 'SearchCode': return <Search className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="tools" className="py-24 bg-[#0A0A0A] border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16 max-w-2xl">
          <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] mb-3">
            04 // Core Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] tracking-tight">
            Tools & <span className="text-[#14B8A6]">Platforms</span>
          </h2>
          <p className="text-sm text-[#9CA3AF] mt-2 font-sans">
            A comprehensive matrix of CRMs, marketing networks, visual suites, and workspace software I leverage daily to optimize workflows and scale output.
          </p>
          <div className="w-12 h-[2px] bg-[#14B8A6] mt-4"></div>
        </div>

        {/* Structured Grid of Categories */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const items = toolsList.filter(tool => tool.category === cat.id);
            
            return (
              <div key={cat.id} className="space-y-4">
                
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#14B8A6]">
                    {cat.name}
                  </h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-[#262626] to-transparent"></div>
                </div>

                {/* Grid of Tools under Category */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {items.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-4 rounded-2xl bg-[#1A1A1A] border border-[#262626] hover:border-[#14B8A6]/40 hover:bg-[#1A1A1A]/90 transition-all duration-300 shadow-sm flex flex-col justify-between items-start group min-h-[95px] teal-glow-hover"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="text-[#9CA3AF] group-hover:text-[#14B8A6] transition-colors p-1.5 bg-[#0A0A0A] rounded-md border border-[#262626]">
                          {getToolLogo(tool.name, tool.icon)}
                        </div>
                        {tool.rating && (
                          <span className={`text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-full ${
                            tool.rating === 'Expert' 
                              ? 'bg-[#14B8A6]/10 text-[#14B8A6] font-bold' 
                              : 'bg-[#131313] text-[#9CA3AF]'
                          }`}>
                            {tool.rating}
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs sm:text-sm font-semibold text-[#F5F5F5] font-display mt-3 leading-tight tracking-tight">
                        {tool.name}
                      </h4>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
