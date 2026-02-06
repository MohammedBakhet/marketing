'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'El Birria', logo: null },
  { name: 'Sushi Sukai', logo: null },
  { name: 'Holy Kebab', logo: null },
  { name: 'Fratelli', logo: null },
  { name: 'Blubnan Kajen', logo: null },
  { name: 'Dirty Taco', logo: null },
  { name: 'Orimlig Hyra', logo: null },
  { name: 'Santa Maria', logo: null },
  { name: 'Intraskin', logo: null },
  { name: 'Stortorgskällan', logo: null },
  { name: 'Cafe Fix', logo: null },
  { name: 'Krubb', logo: null },
  { name: 'Comviq', logo: null },
  { name: 'The Boil', logo: null },
  { name: 'Kista Galleria', logo: null },
  { name: 'Jureskogs', logo: null },
  { name: 'Clean SAVD', logo: null },
  { name: 'McDonalds', logo: null },
  { name: 'Brams Burgers', logo: null },
  { name: 'The Border', logo: null },
];

export default function Clients() {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="kunder" className="py-20 md:py-32 bg-[#0a0a0a] overflow-hidden w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 md:mb-20 container-padding"
      >
        {/* <motion.span
          className="inline-block px-4 py-2 text-sm font-medium text-white/60 border border-white/10 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Vårt nätverk
        </motion.span> */}
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Kunder vi jobbat med
        </h2>
      </motion.div>

      {/* Scrolling logos */}
      <div className="relative w-full">
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{
            x: ['0%', '-33.33%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 45,
              ease: 'linear',
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden"
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
              transition={{ duration: 0.2 }}
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain p-4"
                />
              ) : (
                <span className="text-xs md:text-sm font-medium text-white/80 text-center px-4">
                  {client.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
        />
      </div>
    </section>
  );
}
