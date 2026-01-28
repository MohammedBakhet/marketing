'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const stats = [
  { value: '300+', label: 'Influencers i vårt nätverk' },
  { value: '20+', label: 'Nöjda kunder' },
  { value: '100%', label: 'Dedikation till resultat' },
];

export default function About() {
  return (
    <section id="om-oss" className="min-h-screen flex items-center justify-center pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: '#0f0f0f' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ backgroundColor: 'rgba(212, 175, 55, 0.04)' }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(212, 175, 55, 0.03)' }} />
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
            Om Oss
            <Sparkles size={16} />
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            Vi skapar{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0C350] bg-clip-text text-transparent">
              resultat
            </span>
          </h2>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div
            className="aspect-video rounded-2xl overflow-hidden relative"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(30, 30, 30, 0.8))' }}
            >
              <div className="text-center text-white">
                <div className="text-5xl mb-4 opacity-50">📸</div>
                <p className="text-lg text-gray-400">Teambild kommer här</p>
                <p className="text-sm mt-2 text-gray-500">
                  Lägg till er teambild i /public/images/team.jpg
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-lg md:text-xl leading-relaxed space-y-6 text-gray-400">
            <p>
              <strong className="text-2xl text-white font-bold">Light Vision Marketing</strong> är en
              marknadsföringsbyrå som bygger varumärken, driver trafik och skapar effekt som
              märks - både i flödet och i kassan.
            </p>

            <p>
              Med en tydlig strategi och träffsäkert content hjälper vi företag att nå rätt
              målgrupp med rätt budskap. Budskap som engagerar, konverterar och går att följa
              upp.{' '}
              <span className="font-semibold" style={{ color: '#D4AF37' }}>
                Mindre snack. Mer effekt.
              </span>
            </p>

            <p>
              Vi arbetar snabbt, nära och resultatinriktat, i både långsiktiga samarbeten och
              enskilda projekt.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderColor: 'rgba(212, 175, 55, 0.3)',
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#D4AF37] to-[#F0C350] bg-clip-text text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
