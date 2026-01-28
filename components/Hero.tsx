'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const services = [
    'Sociala Medier',
    'Content',
    'Marknadsplaner',
    'Influencer marketing',
    'Events',
    'PR',
    'ADS',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background with effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(212, 175, 55, 0.15), transparent)'
          }}
        />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
          style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: '#D4AF37',
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex items-center justify-center px-4">
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Small tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 mb-8"
            style={{
              backgroundColor: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            <Sparkles size={14} style={{ color: '#D4AF37' }} />
            <span className="text-sm font-medium" style={{ color: '#D4AF37' }}>Marknadsföringsbyrå</span>
            <Sparkles size={14} style={{ color: '#D4AF37' }} />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            <span className="text-white">Marknadsföring som skapar </span>
            <span
              className="bg-gradient-to-r from-[#D4AF37] via-[#F0C350] to-[#D4AF37] bg-clip-text text-transparent"
            >
              genomslag
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Vi får varumärken att synas, kännas och växa — mindre snack & mer effekt
          </motion.p>

          {/* Services tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3 mb-12 w-full"
          >
            {services.map((service, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 rounded-full text-sm cursor-default"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
                whileHover={{
                  borderColor: 'rgba(212, 175, 55, 0.5)',
                  color: '#ffffff',
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                }}
                transition={{ duration: 0.2 }}
              >
                {service}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <Link href="/kontakt">
              <motion.button
                className="inline-flex items-center gap-3 text-lg px-10 py-4 rounded-full font-semibold text-white"
                style={{ backgroundColor: '#D4AF37' }}
                whileHover={{
                  backgroundColor: '#F0C350',
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Kontakta Oss
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scrolla</span>
        <motion.div
          className="w-px h-12"
          style={{
            background: 'linear-gradient(to bottom, #D4AF37, transparent)'
          }}
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
