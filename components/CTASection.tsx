'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="kontakt" className="bg-[#050505] relative overflow-hidden w-full flex items-center justify-center" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c]/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="w-full px-8 relative z-10 flex items-center justify-center">
        <div className="text-center max-w-3xl flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f5f0e6] mb-6"
          >
            Redo att ta ditt företag till{' '}
            <span className="relative inline-block">
              nästa nivå?
              <motion.span
                className="absolute bottom-0 left-0 w-full h-1 bg-[#c9a84c]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-[#808080] mb-12"
          >
            Låt oss prata om hur vi kan hjälpa ditt varumärke att växa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/kontakt">
              <motion.button
                className="relative h-14 px-10 text-sm font-medium text-black uppercase tracking-[1.5px] overflow-hidden border-0 transition-all duration-300"
                style={{
                  background: 'linear-gradient(90deg, #a08a3c, #c9a84c, #d4af37)',
                  clipPath: 'polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%)',
                  WebkitClipPath: 'polygon(0 0, 0 0, 100% 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 100%)',
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 8px 24px rgba(201, 168, 76, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Kontakta oss
                  <svg
                    className="w-4 h-4 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
