import React, { useState, useEffect } from 'react';
import { Menu, X, Send, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export default function Header({ activeView, setActiveView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', viewId: 'home' },
    { name: 'Portfolio', href: '#portfolio', viewId: 'portfolio' },
    { name: 'Experience', href: '#experience', viewId: 'experience' },
    { name: 'About', href: '#about', viewId: 'about' },
    { name: 'Tools', href: '#tools', viewId: 'tools' },
    { name: 'Education', href: '#education', viewId: 'education' },
    { name: 'Testimonials', href: '#testimonials', viewId: 'testimonials' },
    { name: 'Contact', href: '#contact', viewId: 'contact' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, viewId: string) => {
    e.preventDefault();
    window.location.hash = `#${viewId}`;
    setActiveView(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] py-4'
          : 'bg-[#0A0A0A]/80 backdrop-blur-md py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left container: Logo/Branding AND Desktop Nav Menu links (Mobile menu trigger also placed on the left side) */}
        <div className="flex items-center space-x-2 sm:space-x-6 lg:space-x-12">
          {/* Mobile Menu Button - Left Side */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#F5F5F5] hover:text-[#14B8A6] focus:outline-none -ml-2 cursor-pointer"
            aria-label="Toggle menu"
            id="menu-toggle-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo / Branding */}
          <a 
            href="#home" 
            onClick={(e) => handleNavLinkClick(e, 'home')}
            className="group flex flex-col focus:outline-none shrink-0"
          >
            <span className="text-base sm:text-xl font-bold font-display tracking-tight text-[#F5F5F5] group-hover:text-[#14B8A6] transition-colors">
              Mary Grace <span className="text-white">Belangel</span>
            </span>
            <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-[#A3A3A3] uppercase">
              Virtual Assistant & SMM
            </span>
          </a>

          {/* Desktop Navigation (ON THE LEFT SIDE) */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const active = activeView === link.viewId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.viewId)}
                  className={`text-xs xl:text-sm font-medium tracking-wide transition-colors relative py-2 group focus:outline-none ${
                    active ? 'text-[#14B8A6]' : 'text-[#A3A3A3] hover:text-[#14B8A6]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-[#14B8A6] transition-all duration-300 group-hover:w-full ${
                    active ? 'w-full' : 'w-0'
                  }`}></span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Right side: Hire Me button */}
        <div className="flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            className="inline-flex items-center justify-center px-2.5 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#14B8A6] hover:bg-[#0FB9B1] rounded-sm transition-all duration-300 teal-glow-hover font-display focus:outline-none shrink-0"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="ml-0.5 sm:ml-1 w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
          </a>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[68px] z-30 w-full bg-[#0A0A0A]/98 backdrop-blur-lg border-t border-[#262626] transition-all duration-300 lg:hidden flex flex-col justify-between p-8 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link, idx) => {
            const active = activeView === link.viewId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.viewId)}
                className={`text-lg font-medium tracking-wide transition-colors py-1 flex items-center justify-between group focus:outline-none ${
                  active ? 'text-[#14B8A6]' : 'text-[#F5F5F5] hover:text-[#14B8A6]'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span>{link.name}</span>
                <span className={`w-2 h-2 rounded-full bg-[#14B8A6] transition-opacity ${
                  active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </a>
            );
          })}
        </nav>

        <div className="border-t border-[#262626] pt-6 flex flex-col space-y-4">
          <p className="text-xs text-[#A3A3A3] font-mono">
            Available for remote work worldwide
          </p>
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, 'contact')}
            className="w-full inline-flex items-center justify-center py-3 text-sm font-semibold uppercase tracking-wider text-[#0A0A0A] bg-[#14B8A6] hover:bg-[#0FB9B1] rounded-sm transition-all duration-300 font-display"
          >
            Send Message
            <Send className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
