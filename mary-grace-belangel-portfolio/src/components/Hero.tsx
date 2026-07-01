import { useState, useEffect } from 'react';
import { 
  User, 
  Briefcase, 
  Image as ImageIcon, 
  Cpu, 
  Award, 
  MessageSquare, 
  Camera, 
  Check, 
  X, 
  RefreshCw,
  Upload
} from 'lucide-react';
import { profileData } from '../data';

interface HeroProps {
  setActiveView: (view: string) => void;
}

export default function Hero({ setActiveView }: HeroProps) {
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [isEditingPhoto, setIsEditingPhoto] = useState(false);
  const [inputUrl, setInputUrl] = useState('');

  // Sample professional headshots for immediate test & showcase
  const sampleHeadshots = [
    {
      name: 'Professional Sample 1',
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Professional Sample 2',
      url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    }
  ];

  // Load from local storage or fallback to the data file config
  useEffect(() => {
    // Clear old versions if they exist to prevent stale cached image urls
    localStorage.removeItem('mg_portfolio_photo_v2');
    localStorage.removeItem('mg_portfolio_photo');

    const saved = localStorage.getItem('mg_portfolio_photo_v3');
    if (saved) {
      setPhotoUrl(saved);
      setInputUrl(saved);
    } else if (profileData.photoUrl) {
      setPhotoUrl(profileData.photoUrl);
      setInputUrl(profileData.photoUrl);
    }
  }, []);

  const handleSavePhoto = (url: string) => {
    const trimmed = url.trim();
    setPhotoUrl(trimmed);
    setInputUrl(trimmed);
    if (trimmed) {
      localStorage.setItem('mg_portfolio_photo_v3', trimmed);
    } else {
      localStorage.removeItem('mg_portfolio_photo_v3');
    }
    setIsEditingPhoto(false);
  };

  const handleClearPhoto = () => {
    setPhotoUrl(profileData.photoUrl || '');
    setInputUrl(profileData.photoUrl || '');
    localStorage.removeItem('mg_portfolio_photo_v3');
    setIsEditingPhoto(false);
  };

  const hubItems = [
    {
      name: 'Design Portfolio',
      viewId: 'portfolio',
      icon: ImageIcon,
      description: 'Creative campaigns'
    },
    {
      name: 'Work Experience',
      viewId: 'experience',
      icon: Briefcase,
      description: '8+ years expert support'
    },
    {
      name: 'About Me',
      viewId: 'about',
      icon: User,
      description: 'My background & story'
    },
    {
      name: 'Tools & Skills',
      viewId: 'tools',
      icon: Cpu,
      description: 'My SMM & admin stack'
    },
    {
      name: 'Education & Certifications',
      viewId: 'education',
      icon: Award,
      description: 'PROVA & degree details'
    },
    {
      name: 'Contact',
      viewId: 'contact',
      icon: MessageSquare,
      description: 'Start your project'
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-overlay"
    >
      {/* Absolute Decorative Teal Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#14B8A6]/6 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#14B8A6]/4 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Profile Photo Centered Avatar with Glow */}
        <div className="relative mb-6">
          <div 
            className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] border-2 border-[#14B8A6] flex flex-col items-center justify-center shadow-2xl group/profile cursor-pointer relative transition-all duration-300 hover:scale-105"
            style={{ boxShadow: '0 0 25px rgba(20, 184, 166, 0.25)' }}
            title="Click to configure profile photo"
            onClick={() => { if (!isEditingPhoto) setIsEditingPhoto(true); }}
            id="profile-photo-container"
          >
            {photoUrl ? (
              /* Profile Image */
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={photoUrl} 
                  alt="Mary Grace Belangel" 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    console.error("Profile photo failed to load. Resetting to default.");
                    setPhotoUrl(profileData.photoUrl);
                    setInputUrl(profileData.photoUrl);
                    localStorage.removeItem('mg_portfolio_photo_v3');
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/profile:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-[#14B8A6] space-y-1">
                  <Camera className="w-5 h-5" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#F5F5F5]">Change Photo</span>
                </div>
              </div>
            ) : (
              /* SVG Fallback */
              <div className="flex flex-col items-center justify-center p-4">
                <svg
                  className="w-12 h-12 text-[#14B8A6]/60 group-hover/profile:text-[#14B8A6] transition-colors mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-[9px] font-mono text-[#14B8A6] tracking-wider uppercase">Add Photo</span>
              </div>
            )}
          </div>

          {/* Minimal status indicator badge */}
          <div className="absolute bottom-1 right-2 bg-[#1A1A1A] border border-[#262626] px-2.5 py-0.5 rounded-full flex items-center space-x-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse"></span>
            <span className="text-[8px] font-mono uppercase tracking-wider text-[#14B8A6]">Online</span>
          </div>
        </div>

        {/* Full Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display leading-normal sm:leading-snug md:leading-tight text-[#F5F5F5] tracking-tight">
          Mary Grace <span className="text-white">Belangel</span>
        </h1>

        {/* Tagline/Role */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm md:text-base font-display font-medium text-[#14B8A6] tracking-wide mt-4 md:mt-5 max-w-xl leading-relaxed">
          <span className="whitespace-nowrap">Social Media Manager</span>
          <span className="text-[#262626] hidden sm:inline">|</span>
          <span className="whitespace-nowrap">Meta Ads Manager</span>
          <span className="text-[#262626] hidden sm:inline">|</span>
          <span className="whitespace-nowrap">Admin Manager</span>
          <span className="text-[#262626] hidden sm:inline">|</span>
          <span className="whitespace-nowrap">Virtual Assistant</span>
        </div>

        {/* Reassuring Intro Line */}
        <div className="relative mt-5 md:mt-6 mb-10 max-w-xl">
          <p className="text-[#D4D4D4] italic text-sm sm:text-base font-medium relative z-10 px-4">
            "You don't have to do it alone — I'm here to help"
          </p>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#14B8A6]/5 to-transparent blur-md h-full -z-10 rounded-lg"></div>
        </div>

        {/* Hub Navigation Grid (2 cols mobile, 3 cols tablet, up to 4 cols desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-4xl mt-2 select-none animate-fade-in" id="hub-grid">
          {hubItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={`#${item.viewId}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = `#${item.viewId}`;
                  setActiveView(item.viewId);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="group flex flex-col items-center justify-center p-5 rounded-lg bg-[#121212] border border-[#222222] hover:border-[#14B8A6]/50 transition-all duration-300 text-center relative overflow-hidden hover:scale-[1.03] cursor-pointer hover:shadow-[0_0_22px_rgba(20,184,166,0.3)]"
                style={{
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}
              >
                {/* Smooth Background Gradient Layer on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5] to-[#14B8A6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-0"></div>

                {/* Subtle visual glow in background */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#14B8A6]/2 rounded-full blur-xl group-hover:bg-[#14B8A6]/8 transition-all duration-500 z-0"></div>
                
                {/* Icon Circle */}
                <div className="relative z-10 p-3 bg-[#1A1A1A] group-hover:bg-black/10 text-[#A3A3A3] group-hover:text-[#0A0A0A] rounded-lg border border-[#262626] group-hover:border-[#0A0A0A]/20 transition-all duration-300 mb-3.5 shadow-inner">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Card Title */}
                <span className="relative z-10 text-xs font-semibold tracking-wider uppercase text-[#F5F5F5] group-hover:text-[#0A0A0A] transition-colors duration-300 font-display">
                  {item.name}
                </span>

                {/* Card Subtitle */}
                <span className="relative z-10 text-[10px] text-[#737373] group-hover:text-[#1F2937] mt-1 font-mono transition-colors duration-300">
                  {item.description}
                </span>
              </a>
            );
          })}
        </div>

      </div>

      {/* Live Image Configuration Modal Overlay Panel */}
      {isEditingPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-text"
          onClick={() => setIsEditingPhoto(false)}
          id="photo-config-modal"
        >
          <div 
            className="bg-[#121212] border border-[#262626] rounded-lg p-6 max-w-sm w-full relative shadow-2xl animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsEditingPhoto(false)}
              className="absolute top-4 right-4 p-1.5 text-[#9CA3AF] hover:text-[#14B8A6] hover:bg-[#1A1A1A] rounded-md transition-all cursor-pointer"
              title="Close"
              id="close-photo-config-btn"
            >
              <X className="w-4 h-4" />
            </button>

            <h4 className="text-sm font-mono font-bold tracking-widest text-[#14B8A6] uppercase mb-1">
              Configure Photo
            </h4>
            <p className="text-xs text-[#9CA3AF] mb-4 leading-normal">
              Paste a direct link to your professional headshot or try one of the instant samples to see the layout live:
            </p>

            {/* Quick Samples Selection */}
            <div className="flex gap-2.5 mb-4 justify-center w-full">
              {sampleHeadshots.map((sh, i) => (
                <button
                  key={i}
                  onClick={() => handleSavePhoto(sh.url)}
                  className="flex-1 py-2 bg-[#1A1A1A] hover:bg-[#14B8A6]/20 border border-[#262626] hover:border-[#14B8A6]/50 rounded text-xs font-mono text-[#F5F5F5] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3 text-[#14B8A6]" /> {sh.name === 'Professional Sample 1' ? 'Sample 1' : 'Sample 2'}
                </button>
              ))}
            </div>

            {/* Drag & Drop File Upload */}
            <div className="mb-4">
              <label className="text-[10px] font-mono tracking-widest uppercase text-[#9CA3AF] block mb-2">
                Or Upload Image From Device:
              </label>
              <div 
                className="border border-dashed border-[#262626] hover:border-[#14B8A6]/50 rounded-lg p-4 bg-[#0A0A0A] hover:bg-[#121212] transition-all duration-300 text-center flex flex-col items-center justify-center gap-2 cursor-pointer relative group"
                onClick={() => document.getElementById('file-upload-input')?.click()}
              >
                <Upload className="w-6 h-6 text-[#A3A3A3] group-hover:text-[#14B8A6] transition-colors" />
                <div className="text-[11px] text-[#A3A3A3] group-hover:text-[#F5F5F5] transition-colors">
                  <span className="font-semibold text-[#14B8A6]">Click to upload</span> or drag & drop
                </div>
                <div className="text-[9px] text-[#737373] font-mono">
                  PNG, JPG, JPEG, WEBP
                </div>
                <input 
                  type="file"
                  id="file-upload-input"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () => {
                        if (typeof reader.result === 'string') {
                          handleSavePhoto(reader.result);
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>
            </div>

            {/* Input field */}
            <div className="w-full flex flex-col gap-3">
              <input 
                type="url"
                placeholder="Paste photo URL (e.g. https://...)"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                className="w-full bg-[#050505] border border-[#262626] text-xs text-[#F5F5F5] px-3 py-2.5 rounded focus:outline-none focus:border-[#14B8A6] placeholder-neutral-700 font-mono"
                id="photo-url-input"
              />
              <div className="flex items-center gap-2 justify-stretch">
                <button
                  onClick={() => handleSavePhoto(inputUrl)}
                  className="flex-1 py-2.5 bg-[#14B8A6] hover:bg-[#0FB9B1] text-[#0A0A0A] font-bold text-xs font-mono uppercase rounded transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  id="save-photo-btn"
                >
                  <Check className="w-4 h-4" /> Save Photo
                </button>
                {photoUrl && (
                  <button
                    onClick={handleClearPhoto}
                    className="py-2.5 px-3 bg-[#1A1A1A] hover:bg-red-500/10 hover:text-red-400 text-[#9CA3AF] border border-[#262626] text-xs font-mono rounded transition-all cursor-pointer"
                    id="clear-photo-btn"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
