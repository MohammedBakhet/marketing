'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="om-oss" className="w-full py-20 md:py-32 bg-surface">
      <div className="container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-2 mb-4">Om Oss</h2>
        </motion.div>

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Team Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Light Vision Marketing Team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center md:text-left"
            >
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                <strong>Light Vision Marketing</strong> är en marknadsföringsbyrå som bygger varumärken, 
                driver trafik och skapar effekt som märks - både i flödet och i kassan.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-secondary">
                Med en tydlig strategi och träffsäkert content hjälper vi företag att nå rätt 
                målgrupp med rätt budskap. Budskap som engagerar, konverterar och går att följa 
                upp. Vi pratar inte räckvidd för sakens skull - vi pratar siffror som betyder något. 
                <span className="font-semibold text-accent"> Mindre snack. Mer effekt.</span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-secondary">
                Vi arbetar snabbt, nära och resultatinriktat, i både långsiktiga samarbeten och 
                enskilda projekt.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
