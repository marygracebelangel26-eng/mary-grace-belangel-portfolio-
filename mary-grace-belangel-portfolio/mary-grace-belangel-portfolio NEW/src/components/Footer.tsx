import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side: Brand credit */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
          <p className="text-xs text-[#F5F5F5] font-display font-medium">
            © {new Date().getFullYear()} Mary Grace Belangel. All Rights Reserved.
          </p>
          <p className="text-[10px] text-[#9CA3AF] font-mono tracking-wider">
            Premium Virtual Support & Social Media Excellence
          </p>
        </div>

        {/* Center: Quick navigation links */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] font-mono text-[#9CA3AF]">
          <a href="#hero" className="hover:text-[#14B8A6] transition-colors">Home</a>
          <span>/</span>
          <a href="#about" className="hover:text-[#14B8A6] transition-colors">About</a>
          <span>/</span>
          <a href="#portfolio" className="hover:text-[#14B8A6] transition-colors">Portfolio</a>
          <span>/</span>
          <a href="#experience" className="hover:text-[#14B8A6] transition-colors">Experience</a>
          <span>/</span>
          <a href="#tools" className="hover:text-[#14B8A6] transition-colors">Tools</a>
          <span>/</span>
          <a href="#testimonials" className="hover:text-[#14B8A6] transition-colors">Testimonials</a>
          <span>/</span>
          <a href="#contact" className="hover:text-[#14B8A6] transition-colors">Contact</a>
        </div>

        {/* Right Side: Scroll to top action */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-[#1A1A1A] border border-[#262626] hover:border-[#14B8A6]/60 text-[#9CA3AF] hover:text-[#14B8A6] rounded-full transition-all focus:outline-none cursor-pointer group shadow-sm"
          title="Scroll to top"
          aria-label="Back to top"
          id="back-to-top-btn"
        >
          <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
