'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ändra stil när man scrollat förbi videon
      setScrolled(window.scrollY > 600);
      
      const sections = ['kunder', 'tjanster', 'om-oss', 'kontakt'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'kunder', label: 'Kunder' },
    { id: 'tjanster', label: 'Tjänster' },
    { id: 'om-oss', label: 'Om Oss' },
    { id: 'kontakt', label: 'Kontakt' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 lg:py-5' : 'py-6 lg:py-8'
      }`}
      style={{
        backgroundColor: scrolled 
          ? 'rgba(248, 248, 248, 0.95)' 
          : 'rgba(0, 0, 0, 0.15)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
        boxShadow: scrolled 
          ? '0 2px 12px rgba(0, 0, 0, 0.08)' 
          : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <nav className="flex items-center h-[60px] lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <motion.div
              className="flex items-center gap-2.5 select-none"
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2.5">
                <span 
                  className={`font-semibold text-[18px] lg:text-[22px] tracking-tight leading-none transition-colors duration-500 ${
                    scrolled ? 'text-[#1a1a1a]' : 'text-white'
                  }`}
                >
                  Light Vision
                </span>
                <span 
                  className="font-semibold text-[18px] lg:text-[22px] tracking-tight leading-none transition-colors duration-500"
                  style={{ color: scrolled ? '#0071e3' : '#ffffff' }}
                >
                  Marketing
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-8 pr-4">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative group"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <span 
                  className={`text-[15px] font-medium transition-colors duration-500 ${
                    scrolled 
                      ? (activeSection === link.id ? 'text-[#1a1a1a]' : 'text-[#505050]')
                      : (activeSection === link.id ? 'text-white' : 'text-white/80')
                  }`}
                >
                  {link.label}
                </span>
                
                {/* Hover underline */}
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] origin-left ${
                    scrolled ? 'bg-[#1a1a1a]' : 'bg-white'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                
                {/* Active indicator */}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute -bottom-1 left-0 right-0 h-[2px] ${
                      scrolled ? 'bg-[#0071e3]' : 'bg-white'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 -mr-2 relative z-10 transition-colors duration-500 ${
              scrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden"
              style={{
                backgroundColor: scrolled ? 'rgba(248, 248, 248, 0.98)' : 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(12px)',
                borderRadius: '12px',
                marginTop: '12px',
              }}
            >
              <div className="flex flex-col py-5 gap-1.5 px-3">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left px-3 py-3 text-[15px] font-medium rounded-lg transition-all duration-200"
                    style={{
                      backgroundColor: activeSection === link.id 
                        ? (scrolled ? '#f0f0f0' : 'rgba(255, 255, 255, 0.15)')
                        : 'transparent',
                      color: scrolled
                        ? (activeSection === link.id ? '#1a1a1a' : '#505050')
                        : 'white',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
