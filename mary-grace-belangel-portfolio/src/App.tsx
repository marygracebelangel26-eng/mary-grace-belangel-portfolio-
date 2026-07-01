import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CursorGlow from './components/CursorGlow';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');

  useEffect(() => {
    // Force the hash to be cleared on initial page mount so they always see the homepage first
    if (window.location.hash !== '' && window.location.hash !== '#home') {
      window.location.hash = '';
    }

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === '#hero' || hash === '#home') {
        setActiveView('home');
      } else {
        const view = hash.substring(1);
        const validViews = ['portfolio', 'experience', 'about', 'tools', 'education', 'testimonials', 'contact'];
        if (validViews.includes(view)) {
          setActiveView(view);
        } else {
          setActiveView('home');
        }
      }
    };

    // Initialize on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '#home';
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F5F5] min-h-screen selection:bg-[#14B8A6]/30 selection:text-[#14B8A6] overflow-x-hidden antialiased relative flex flex-col justify-between">
      {/* Interactive cursor follow glow */}
      <CursorGlow />

      {/* Sticky Top Navigation */}
      <Header activeView={activeView} setActiveView={setActiveView} />

      {/* Main Content Sections with Page Transitions */}
      <main id="main-content" className="flex-grow flex flex-col w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="w-full flex-grow flex flex-col"
          >
            {activeView === 'home' ? (
              <Hero setActiveView={setActiveView} />
            ) : (
              <div className="w-full flex-grow flex flex-col">
                {/* Unified Premium "Back to Home" Button sitting beautifully below the Header */}
                <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-4 w-full relative z-30">
                  <button
                    onClick={navigateToHome}
                    className="inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase text-[#9CA3AF] hover:text-[#14B8A6] transition-all duration-300 group cursor-pointer focus:outline-none"
                    id="back-home-button-top"
                  >
                    <span className="text-xs transition-transform duration-300 group-hover:-translate-x-1 inline-block">←</span>
                    Back to Home
                  </button>
                </div>

                {/* Section Content */}
                <div className="flex-grow">
                  {activeView === 'about' && <About />}
                  {activeView === 'portfolio' && <Portfolio />}
                  {activeView === 'experience' && (
                    <div className="space-y-0">
                      <Experience />
                      <Testimonials />
                    </div>
                  )}
                  {activeView === 'tools' && <Tools />}
                  {activeView === 'education' && <Education />}
                  {activeView === 'testimonials' && <Testimonials />}
                  {activeView === 'contact' && <Contact />}
                </div>

                {/* Footer Credits - Only visible on section pages */}
                <Footer />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Scroll to Top - Only shown on section pages */}
      {activeView !== 'home' && <BackToTop />}
    </div>
  );
}
