'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="om-oss" className="w-full bg-[#1a1a1a] overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch min-h-[700px]">
        {/* Team Image - Full left side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[400px] md:h-auto relative"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            alt="Light Vision Marketing Team"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        {/* About Text - Right side, vertically centered */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20"
        >
          <div className="max-w-lg">
            <motion.span
              className="inline-block px-4 py-2 text-sm font-medium text-white/60 border border-white/10 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              Vilka vi är
            </motion.span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Om Oss
            </h2>

            <div className="space-y-6">
              <p className="text-base md:text-lg leading-relaxed text-white">
                <strong>Light Vision Marketing</strong> är en marknadsföringsbyrå som bygger varumärken,
                driver trafik och skapar effekt som märks - både i flödet och i kassan.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-400">
                Med en tydlig strategi och träffsäkert content hjälper vi företag att nå rätt
                målgrupp med rätt budskap. Budskap som engagerar, konverterar och går att följa
                upp. Vi pratar inte räckvidd för sakens skull - vi pratar siffror som betyder något.
              </p>

              <p className="text-xl font-semibold text-white">
                Mindre snack. Mer effekt.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-400">
                Vi arbetar snabbt, nära och resultatinriktat, i både långsiktiga samarbeten och
                enskilda projekt.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
