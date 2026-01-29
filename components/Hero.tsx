'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToNext = () => {
    const clientsSection = document.getElementById('kunder');
    if (clientsSection) {
      clientsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <source src="/movie.mp4" type="video/mp4" />
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

          {/* Subheading */}
          <p className="text-lg md:text-2xl text-white/90 mb-12">
            Vi får varumärken att synas, kännas och växa
          </p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToNext}
            className="inline-flex items-center gap-2 px-8 py-4 text-base md:text-lg font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Läs mer
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
