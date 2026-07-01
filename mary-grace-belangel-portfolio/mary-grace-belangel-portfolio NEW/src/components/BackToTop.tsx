import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3.5 bg-[#1A1A1A]/90 backdrop-blur-md border border-[#262626] hover:border-[#14B8A6] text-[#A3A3A3] hover:text-[#14B8A6] rounded-full shadow-2xl transition-all duration-300 transform cursor-pointer group hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]/50 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      }`}
      style={{ boxShadow: isVisible ? '0 4px 20px -2px rgba(20, 184, 166, 0.25)' : 'none' }}
      title="Back to Top"
      aria-label="Scroll back to top"
      id="floating-back-to-top"
    >
      <ArrowUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
}
