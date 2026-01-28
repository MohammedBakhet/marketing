'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/om-oss', label: 'Om Oss', isLink: true },
    { href: 'tjanster', label: 'Tjänster', isLink: false },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4'
          : 'py-6'
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: '#D4AF37' }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-bold text-xl relative z-10">LV</span>
              <motion.div
                className="absolute inset-0"
                style={{ backgroundColor: '#F0C350' }}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <span className="font-bold text-xl md:text-2xl text-white hidden sm:block">
              Light Vision{' '}
              <span style={{ color: '#D4AF37' }}>Marketing</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isLink ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-300 text-sm font-medium uppercase tracking-widest transition-all duration-300 py-2 hover:text-white group"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: '#D4AF37' }}
                  />
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-gray-300 text-sm font-medium uppercase tracking-widest transition-all duration-300 py-2 hover:text-white group"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: '#D4AF37' }}
                  />
                </button>
              )
            ))}

            {/* Kontakt Button */}
            <Link href="/kontakt">
              <motion.button
                className="px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wide text-white"
                style={{ backgroundColor: '#D4AF37' }}
                whileHover={{
                  backgroundColor: '#F0C350',
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Kontakt
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 overflow-hidden"
              style={{
                backgroundColor: 'rgba(10, 10, 10, 0.95)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <div className="flex flex-col py-6 px-6">
                {navLinks.map((link, index) => (
                  link.isLink ? (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="py-4 text-lg font-medium text-gray-300 transition-colors block"
                        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="py-4 text-lg font-medium text-gray-300 transition-colors text-left w-full"
                        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
                      >
                        {link.label}
                      </button>
                    </motion.div>
                  )
                ))}

                {/* Mobile Kontakt Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                    <button
                      className="mt-6 w-full px-8 py-4 rounded-full text-base font-semibold uppercase tracking-wide transition-all duration-300 text-white"
                      style={{ backgroundColor: '#D4AF37' }}
                    >
                      Kontakt
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
