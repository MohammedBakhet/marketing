'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const fullText = "Vi får varumärken att synas, kännas och växa - mindre snack & mer effekt";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background - Fullscreen */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay för bättre läsbarhet */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center w-full max-w-4xl"
        >
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Marknadsföring som skapar{' '}
            <span className="text-white">genomslag</span>
          </h1>

          {/* Subheading with typewriter effect */}
          <p className="text-lg md:text-2xl text-white/90 mb-12 h-[60px] md:h-[36px]">
            {displayedText}
            <span className="inline-block w-[2px] h-[1em] bg-[#d4af37] ml-1 animate-pulse" />
          </p>

          {/* CTA Button */}
          <a href="#kontakt" className="inline-block group">
            <span 
              className="relative inline-flex items-center justify-center gap-6 h-14 px-20 text-base font-semibold bg-[#d4af37] text-black uppercase tracking-wider cursor-pointer overflow-hidden transition-colors duration-500 hover:text-white"
            >
              <span className="absolute inset-0 bg-black w-[400px] h-[300px] -z-10 transition-all duration-700 top-full left-full group-hover:top-[-60px] group-hover:left-[-60px] rounded-[50%]" />
              <span className="relative z-10 flex items-center gap-3">
                Kontakta oss
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
