'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px]" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest mb-4 inline-flex items-center gap-2"
            style={{ color: '#D4AF37' }}
          >
            <Sparkles size={16} />
            Full-service byrå
            <Sparkles size={16} />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
          >
            Vi är{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0C350] bg-clip-text text-transparent">
              marknadsföring
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            En full-service marknadsföringsbyrå som hanterar allt från social media management och trenddrivet content till strategisk planering och genomförande.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/kontakt">
              <motion.button
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-semibold"
                style={{
                  border: '2px solid rgba(212, 175, 55, 0.5)',
                  backgroundColor: 'transparent',
                  color: '#D4AF37'
                }}
                whileHover={{
                  backgroundColor: '#D4AF37',
                  borderColor: '#D4AF37',
                  color: '#ffffff',
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Sätt igång
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
