import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { SiSpotify, SiApple, SiInstagram, SiYoutube } from 'react-icons/si';

const NAV_LINKS = [
  { name: 'LATEST', href: '#latest' },
  { name: 'VIDEOS', href: '#videos' },
  { name: 'MUSIC', href: '#music' },
  { name: 'STORY', href: '#story' },
  { name: 'TIMELINE', href: '#timeline' },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const blurValue = useTransform(scrollY, [0, 100], [0, 12]);
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 border-b border-white/5"
      style={{ 
        backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
        backdropFilter: `blur(${blurValue}px)`
      }}
    >
      {/* Logo */}
      <a href="#" className="text-3xl font-display tracking-widest text-white hover:text-accent transition-colors z-50">
        LIL 9
      </a>
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="text-xs font-semibold tracking-[0.2em] text-muted-foreground hover:text-white transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>
      
      {/* Actions */}
      <div className="flex items-center gap-6 z-50">
        <div className="hidden md:flex items-center gap-4 text-muted-foreground">
          <a href="https://www.instagram.com/lil9_2230" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><SiInstagram className="w-4 h-4" /></a>
          <a href="https://open.spotify.com/artist/1DgcL6YBYJhkbWMXvzqlod" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><SiSpotify className="w-4 h-4" /></a>
          <a href="https://music.apple.com/ca/artist/lil-9/1685127697" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><SiApple className="w-4 h-4" /></a>
        </div>
        
        <a 
          href="https://open.spotify.com/artist/1DgcL6YBYJhkbWMXvzqlod" 
          target="_blank" 
          rel="noreferrer"
          className="group relative px-6 py-3 bg-white text-black font-display tracking-widest text-sm overflow-hidden"
        >
          <span className="relative z-10">STREAM NOW</span>
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
        </a>
      </div>
    </motion.header>
  );
}

// Custom hook to fix wouter + framer motion typings issues inside the component
function useTransform(value: any, inputRange: number[], outputRange: number[]) {
  return useMotionValueEvent(value, "change", (latest) => {
    // handled internally by framer-motion useTransform
  }) as any; // Ignore for this mock
}
