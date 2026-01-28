'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const clients = [
  'El Birria',
  'Sushi Sukai',
  'Holy Kebab',
  'Fratelli',
  'Blubnan Kajen',
  'Dirty Taco',
  'Orimlig Hyra',
  'Santa Maria',
  'Intraskin',
  'Stortorgskällan',
  'Cafe Fix',
  'Krubb',
  'Comviq',
  'The Boil',
  'Kista Galleria',
  'Jureskogs',
  'Clean SAVD',
  'McDonalds',
  'Brams Burgers',
  'The Border Burgers VS Burrito',
];

export default function Clients() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px]" style={{ backgroundColor: 'rgba(212, 175, 55, 0.03)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <motion.span
            className="text-sm font-semibold uppercase tracking-widest mb-4 inline-flex items-center justify-center gap-2"
            style={{ color: '#D4AF37' }}
          >
            <Sparkles size={16} />
            Våra Kunder
            <Sparkles size={16} />
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            Företag vi{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0C350] bg-clip-text text-transparent">
              samarbetat med
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl text-center">
            Vi är stolta över att ha arbetat med dessa fantastiska varumärken
          </p>
        </motion.div>

        {/* Scrolling logos container */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -60 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 50,
                ease: 'linear',
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client}-${index}`}
                className="flex-shrink-0 px-8 py-6 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  minWidth: '200px'
                }}
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                }}
              >
                <span className="text-sm font-medium text-gray-400 whitespace-nowrap">
                  {client}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
          />
        </div>
      </div>
    </section>
  );
}
