import { useState, useEffect } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if the device has a mouse/fine pointer and supports hover
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] transition-opacity duration-500"
      style={{
        opacity: isHovered ? 1 : 0,
        background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(20, 184, 166, 0.08), transparent 80%)`,
      }}
    />
  );
}
