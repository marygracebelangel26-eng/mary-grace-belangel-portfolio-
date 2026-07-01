import { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Tv, 
  LayoutGrid, 
  Play, 
  Heart, 
  Calendar, 
  TrendingUp, 
  MessageCircle, 
  UserCheck, 
  Percent, 
  Eye, 
  X, 
  ChevronRight, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { portfolioItems } from '../data';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Brand Kits' | 'Carousel Post' | 'Instagram' | 'Facebook' | 'Reels/Video' | 'Promotional'>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Filter items based on active selection
  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Brand Kits') return item.filter === 'brand-kits';
    if (activeFilter === 'Carousel Post') return item.filter === 'carousel-post';
    if (activeFilter === 'Instagram') return item.filter === 'instagram';
    if (activeFilter === 'Facebook') return item.filter === 'facebook';
    if (activeFilter === 'Reels/Video') return item.filter === 'video';
    if (activeFilter === 'Promotional') return item.filter === 'promo';
    return true;
  });

  // Icon mapping for layout visualization
  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutGrid': return <LayoutGrid className="w-8 h-8 text-[#14B8A6]" />;
      case 'Play': return <Play className="w-8 h-8 text-[#14B8A6] fill-[#14B8A6]/20" />;
      case 'Heart': return <Heart className="w-8 h-8 text-[#14B8A6] fill-[#14B8A6]/20" />;
      case 'Calendar': return <Calendar className="w-8 h-8 text-[#14B8A6]" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-[#14B8A6]" />;
      case 'Tv': return <Tv className="w-8 h-8 text-[#14B8A6]" />;
      case 'MessageCircle': return <MessageCircle className="w-8 h-8 text-[#14B8A6]" />;
      case 'UserCheck': return <UserCheck className="w-8 h-8 text-[#14B8A6]" />;
      case 'Percent': return <Percent className="w-8 h-8 text-[#14B8A6]" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-[#14B8A6]" />;
      default: return <LayoutGrid className="w-8 h-8 text-[#14B8A6]" />;
    }
  };

  // Platform icon mapping
  const getPlatformIcon = (platform: PortfolioItem['platform']) => {
    switch (platform) {
      case 'instagram': return <Instagram className="w-4 h-4 text-[#14B8A6]" />;
      case 'facebook': return <Facebook className="w-4 h-4 text-[#14B8A6]" />;
      case 'tiktok': return <Tv className="w-4 h-4 text-[#14B8A6]" />;
      case 'youtube': return <Play className="w-4 h-4 text-[#14B8A6]" />;
      case 'brand': return <Sparkles className="w-4 h-4 text-[#14B8A6]" />;
      default: return <TrendingUp className="w-4 h-4 text-[#14B8A6]" />;
    }
  };

  // Render visual pattern inside the placeholder tile to simulate premium layout
  const renderVisualPattern = (type: string) => {
    switch (type) {
      case 'grid':
        return (
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        );
      case 'dots':
        return (
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(rgba(20,184,166,0.15)_1px,transparent_1.5px)] bg-[size:12px_12px]"></div>
        );
      case 'circles':
        return (
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-[#14B8A6]/20 animate-pulse"></div>
            <div className="absolute w-44 h-44 rounded-full border border-[#14B8A6]/10"></div>
          </div>
        );
      case 'waves':
        return (
          <div className="absolute inset-0 opacity-15 pointer-events-none flex flex-col justify-around py-4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#14B8A6]/40 to-transparent"></div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#14B8A6]/25 to-transparent translate-x-4"></div>
            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#14B8A6]/40 to-transparent -translate-x-4"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0A] border-t border-[#262626] relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="max-w-xl flex flex-col mb-6 md:mb-0">
            <span className="text-xs font-mono tracking-widest uppercase text-[#14B8A6] mb-3">
              02 // Creative Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F5F5F5] tracking-tight">
              Design <span className="text-[#14B8A6]">Portfolio</span>
            </h2>
            <p className="text-sm text-[#A3A3A3] mt-2 font-sans">
              A premium showcase of social media content assets, reels strategy, templates, and high-performance Meta ad creatives.
            </p>
          </div>
        </div>

        {/* Dynamic, High-End Google Drive Portfolio CTA Card */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#121212] via-[#14B8A6]/5 to-[#121212] border border-[#14B8A6]/20 relative overflow-hidden group hover:border-[#14B8A6]/40 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#14B8A6]/2 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[10px] font-mono text-[#14B8A6] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse"></span>
                Official Cloud Directory
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-[#F5F5F5] tracking-tight">
                Complete Google Drive Portfolio Folder
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-2xl leading-relaxed">
                Want to browse the full library of live creatives, high-res graphic templates, video campaigns, and social media deliverables? Access my structured Google Drive directory directly.
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/1VnN5Yl2oL1HuB0047qkdATowCgaSUpv8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#14B8A6] hover:bg-[#0FB9B1] rounded-lg transition-all duration-300 shrink-0 shadow-lg shadow-[#14B8A6]/10 hover:shadow-[#14B8A6]/20 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50"
            >
              <span>Open Google Drive Portfolio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-[#262626]">
          {(['All', 'Brand Kits', 'Carousel Post', 'Instagram', 'Facebook', 'Reels/Video', 'Promotional'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-2xl transition-all duration-300 focus:outline-none cursor-pointer ${
                activeFilter === filter
                  ? 'bg-[#14B8A6] text-[#0A0A0A] teal-glow font-bold'
                  : 'bg-[#1A1A1A] text-[#9CA3AF] hover:text-[#14B8A6] hover:bg-[#262626] border border-[#262626]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Responsive Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#262626] hover:border-[#14B8A6]/50 transition-all duration-300 cursor-pointer flex flex-col aspect-[4/5] shadow-lg teal-glow-hover"
            >
              
              {/* Simulated Social Media Post Header */}
              <div className="px-4 py-3 bg-[#131313] border-b border-[#262626] flex items-center justify-between z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30 flex items-center justify-center font-bold text-[8px] text-[#14B8A6]">
                    MG
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#F5F5F5] leading-none">
                      {item.category === 'Brand Kits' ? 'Mary Grace as SMM' : 'marygrace.smm'}
                    </span>
                    <span className="text-[8px] text-[#9CA3AF] leading-none mt-0.5 font-mono">{item.category}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {getPlatformIcon(item.platform)}
                  <span className="text-[8px] text-[#9CA3AF] font-mono capitalize">
                    {item.platform === 'meta' ? 'Meta Ads' : item.platform === 'brand' ? 'Brand Kit' : item.platform}
                  </span>
                </div>
              </div>

              {/* Graphic Representation Area (Simulated Template Asset or Real Image) */}
              {item.imageUrl ? (
                <div className="relative flex-1 bg-[#121212] overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-lg transform group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Category tag on the top right */}
                  <div className="absolute top-4 right-4 z-10 bg-[#1A1A1A]/90 border border-[#262626] px-2 py-0.5 rounded-2xl text-[8px] font-mono text-[#9CA3AF]">
                    {item.category}
                  </div>
                  {/* Highlighted Results Metric Badge inside the template preview */}
                  {item.metrics && (
                    <div className="absolute bottom-4 left-4 z-10 bg-[#0A0A0A]/90 border border-[#14B8A6]/30 px-2.5 py-1 rounded-2xl text-[9px] font-mono text-[#14B8A6] font-bold shadow-sm flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{item.metrics}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className={`relative flex-1 bg-gradient-to-b ${item.visualStyle.gradient} flex flex-col items-center justify-center p-6 text-center overflow-hidden`}>
                  
                  {/* Visual Pattern overlay */}
                  {renderVisualPattern(item.visualStyle.patternType)}

                  {/* Main Visual Elements */}
                  <div className="relative z-10 flex flex-col items-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-[#0A0A0A]/80 border border-[#14B8A6]/30 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {getIcon(item.visualStyle.primaryIcon)}
                    </div>
                    
                    {/* Title / Typography mockup inside card */}
                    <div className="space-y-1 max-w-[200px]">
                      <span className="text-xs font-mono tracking-widest text-[#14B8A6] font-semibold uppercase block">
                        {item.visualStyle.badgeText || 'Template'}
                      </span>
                      <h3 className="text-sm font-bold font-display text-[#F5F5F5] tracking-tight leading-tight line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Highlighted Results Metric Badge inside the template preview */}
                  {item.metrics && (
                    <div className="absolute bottom-4 left-4 z-10 bg-[#0A0A0A]/90 border border-[#14B8A6]/30 px-2.5 py-1 rounded-2xl text-[9px] font-mono text-[#14B8A6] font-bold shadow-sm flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>{item.metrics}</span>
                    </div>
                  )}

                  {/* Category tag on the top right */}
                  <div className="absolute top-4 right-4 z-10 bg-[#1A1A1A]/90 border border-[#262626] px-2 py-0.5 rounded-2xl text-[8px] font-mono text-[#9CA3AF]">
                    {item.category}
                  </div>
                </div>
              )}

              {/* Simulated Social Post Engagement Footer bar */}
              <div className="px-4 py-3 bg-[#131313] border-t border-[#262626] flex items-center justify-between text-[#9CA3AF]">
                <div className="flex items-center space-x-3.5">
                  <ThumbsUp className="w-3.5 h-3.5 hover:text-[#14B8A6] transition-colors" />
                  <MessageCircle className="w-3.5 h-3.5 hover:text-[#14B8A6] transition-colors" />
                  <Share2 className="w-3.5 h-3.5 hover:text-[#14B8A6] transition-colors" />
                </div>
                <Bookmark className="w-3.5 h-3.5 hover:text-[#14B8A6] transition-colors" />
              </div>

              {/* Hover Overlay: Triggers on general card hover */}
              <div className="absolute inset-0 bg-[#0A0A0A]/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 z-20 rounded-2xl">
                
                {/* Top Info */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#14B8A6] tracking-wider uppercase">
                    {item.category}
                  </span>
                  <div className="p-1 rounded-full bg-[#14B8A6]/10 text-[#14B8A6]">
                    {getPlatformIcon(item.platform)}
                  </div>
                </div>

                {/* Middle Info */}
                <div className="space-y-2">
                  <h4 className="text-base font-bold font-display text-[#F5F5F5] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-3">
                    {item.caption}
                  </p>
                </div>

                {/* Bottom CTA / Action */}
                <div className="flex items-center justify-between border-t border-[#262626] pt-4">
                  {item.metrics ? (
                    <span className="text-xs font-mono font-bold text-[#14B8A6] flex items-center gap-1 bg-[#14B8A6]/10 px-2 py-1 rounded-2xl">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.metrics}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-[#9CA3AF]">Creative Asset</span>
                  )}
                  
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#14B8A6] group-hover:underline font-display">
                    View Details
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Informative Portfolio Note */}
        <div className="mt-12 p-5 rounded-2xl bg-[#121212] border border-[#262626] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#9CA3AF] leading-relaxed">
            📁 Looking for more examples? You can browse my full collection of active ad graphics, templates, and video reels inside my <a href="https://drive.google.com/drive/folders/1VnN5Yl2oL1HuB0047qkdATowCgaSUpv8" target="_blank" rel="noopener noreferrer" className="text-[#14B8A6] hover:underline font-semibold inline-flex items-center gap-0.5">Google Drive Folder <ExternalLink className="w-3 h-3" /></a> updated regularly!
          </p>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/95 backdrop-blur-lg">
          
          {/* Modal Background Dismiss trigger */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={() => setSelectedItem(null)}></div>

          {/* Modal Content Box */}
          <div className="relative w-full max-w-4xl bg-[#1A1A1A] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-[80vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 bg-[#0A0A0A]/80 border border-[#262626] hover:border-[#14B8A6] text-[#F5F5F5] hover:text-[#14B8A6] rounded-full z-30 transition-all cursor-pointer focus:outline-none"
              aria-label="Close modal"
              id="close-lightbox-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Graphic Preview Column */}
            <div className="col-span-12 md:col-span-6 bg-[#121212] relative flex flex-col items-center justify-center p-4 min-h-[350px] md:min-h-full border-b md:border-b-0 md:border-r border-[#262626] overflow-hidden">
              {selectedItem.videoUrl ? (
                <div className="w-full h-full flex items-center justify-center relative z-10 p-2">
                  {selectedItem.videoUrl.includes('youtube.com') || 
                   selectedItem.videoUrl.includes('youtu.be') || 
                   selectedItem.videoUrl.includes('drive.google.com') || 
                   selectedItem.videoUrl.includes('vimeo.com') ? (
                    <iframe
                      src={((): string => {
                        const url = selectedItem.videoUrl || '';
                        if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
                          let videoId = '';
                          if (url.includes('youtube.com/watch')) {
                            const urlParams = new URLSearchParams(url.split('?')[1] || '');
                            videoId = urlParams.get('v') || '';
                          } else {
                            videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
                          }
                          return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                        }
                        if (url.includes('drive.google.com/file/d/')) {
                          const parts = url.split('/file/d/');
                          if (parts.length > 1) {
                            const fileId = parts[1].split('/')[0];
                            return `https://drive.google.com/file/d/${fileId}/preview`;
                          }
                        }
                        if (url.includes('vimeo.com/')) {
                          const parts = url.split('vimeo.com/');
                          const videoId = parts[parts.length - 1].split('?')[0];
                          return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
                        }
                        return url;
                      })()}
                      className="w-full aspect-video min-h-[260px] md:min-h-[340px] rounded-lg shadow-lg border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <video
                      src={selectedItem.videoUrl}
                      controls
                      autoPlay
                      muted
                      className="max-w-full max-h-[50vh] md:max-h-[70vh] rounded-lg shadow-lg"
                    />
                  )}
                </div>
              ) : selectedItem.imageUrl ? (
                <div className="w-full h-full flex items-center justify-center relative z-10 group/zoom">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain rounded-lg shadow-lg cursor-zoom-in hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-center p-4">
                  {renderVisualPattern(selectedItem.visualStyle.patternType)}

                  {/* Simulated Social Layout */}
                  <div className="relative z-10 flex flex-col items-center space-y-4 max-w-sm">
                    <div className="w-16 h-16 rounded-full bg-[#0A0A0A]/90 border border-[#14B8A6]/40 flex items-center justify-center shadow-lg">
                      {getIcon(selectedItem.visualStyle.primaryIcon)}
                    </div>
                    
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono tracking-widest text-[#14B8A6] font-semibold uppercase block">
                        {selectedItem.visualStyle.badgeText || 'Branded Asset'}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-display text-[#F5F5F5] tracking-tight leading-tight">
                        {selectedItem.title}
                      </h3>
                    </div>

                    {selectedItem.metrics && (
                      <div className="mt-2 bg-[#0A0A0A]/90 border border-[#14B8A6]/40 px-3 py-1.5 rounded-2xl text-xs font-mono text-[#14B8A6] font-bold shadow-sm inline-flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 animate-pulse" />
                        <span>KPI Performance: {selectedItem.metrics}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right Information Metadata Column */}
            <div className="col-span-12 md:col-span-6 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                
                {/* Meta details */}
                <div className="flex items-center space-x-3.5">
                  <div className="p-2 rounded bg-[#14B8A6]/10 text-[#14B8A6]">
                    {getPlatformIcon(selectedItem.platform)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-[#9CA3AF] tracking-wider uppercase">
                      Channel Network
                    </span>
                    <span className="text-sm font-bold text-[#F5F5F5] capitalize">
                      {selectedItem.platform === 'meta' ? 'Meta Ad Manager Campaign' : selectedItem.platform === 'brand' ? 'Brand Identity Showcase' : selectedItem.platform}
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#262626] pt-6 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#14B8A6]">
                    Project Brief & Strategy
                  </h4>
                  <p className="text-sm text-[#F5F5F5] font-display font-medium leading-relaxed">
                    {selectedItem.title}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#14B8A6]">
                    Description & Core Outcome
                  </h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {selectedItem.caption}
                  </p>
                </div>

                {/* Attributes tags list */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-2xl text-[10px] font-mono font-medium text-[#F5F5F5] bg-[#131313] border border-[#262626]">
                    Format: {selectedItem.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-2xl text-[10px] font-mono font-medium text-[#F5F5F5] bg-[#131313] border border-[#262626]">
                    Design Engine: Canva Pro
                  </span>
                  <span className="px-2.5 py-1 rounded-2xl text-[10px] font-mono font-medium text-[#14B8A6] bg-[#14B8A6]/5 border border-[#14B8A6]/20">
                    Active CTR Optimization
                  </span>
                </div>

              </div>

              {/* Action buttons */}
              <div className="pt-8 mt-6 border-t border-[#262626] flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-4 py-2 text-xs font-mono text-[#9CA3AF] hover:text-[#14B8A6] hover:bg-[#262626] rounded-2xl transition-colors cursor-pointer"
                >
                  Dismiss Modal
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] bg-[#14B8A6] hover:bg-[#0FB9B1] rounded-2xl transition-all duration-300 font-display"
                >
                  Discuss Creative Strategy
                  <ChevronRight className="ml-1 w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}
