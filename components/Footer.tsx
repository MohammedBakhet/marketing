'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:info@lightvision.se' },
  ];

  return (
    <footer className="border-t border-[#c9a84c]/20 bg-[#050505] relative overflow-hidden" style={{ paddingTop: '60px', paddingBottom: '60px', paddingLeft: '48px', paddingRight: '48px' }}>
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Logo - far left */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <motion.div
            className="w-12 h-12 rounded-full bg-[#c9a84c] flex items-center justify-center relative overflow-hidden"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-black font-bold text-xl relative z-10">LV</span>
          </motion.div>
          <span className="font-semibold text-xl tracking-tight text-[#c9a84c]">
            Light Vision Marketing
          </span>
        </motion.div>

        {/* Social Links - center */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-5" data-aos="fade-up" data-aos-delay="200">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full bg-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center text-[#808080] relative overflow-hidden group"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#c9a84c]"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <Icon size={20} className="relative z-10 group-hover:text-black transition-colors duration-300" />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright + Back to top - far right */}
        <div className="flex items-center gap-8" data-aos="fade-left" data-aos-delay="300">
          <p className="text-sm text-[#606060]">
            © {currentYear} Light Vision Marketing
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center text-[#808080] hover:bg-[#c9a84c] hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Tillbaka till toppen"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>

      {/* Mobile layout - stacked */}
      <div className="flex md:hidden flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-12 h-12 rounded-full bg-[#c9a84c] flex items-center justify-center">
            <span className="text-black font-bold text-xl">LV</span>
          </div>
          <span className="font-semibold text-xl tracking-tight text-[#c9a84c]">
            Light Vision Marketing
          </span>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full bg-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center text-[#808080] hover:bg-[#c9a84c] hover:text-black transition-colors duration-300"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Copyright + Back to top */}
        <div className="flex items-center gap-6">
          <p className="text-sm text-[#606060]">
            © {currentYear} Light Vision Marketing
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#c9a84c]/5 border border-[#c9a84c]/20 flex items-center justify-center text-[#808080] hover:bg-[#c9a84c] hover:text-black transition-colors duration-300"
            aria-label="Tillbaka till toppen"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
