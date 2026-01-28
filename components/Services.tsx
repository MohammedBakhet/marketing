'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { FaInstagram, FaVideo, FaChartLine, FaUsers, FaCalendarAlt, FaLayerGroup } from 'react-icons/fa';

const services = [
  {
    icon: FaInstagram,
    title: 'SOCIALA MEDIER',
    description:
      'Vi hanterar dina sociala medier från A till Ö - från publicering och aktivt community management till analys och datadriven uppföljning.',
  },
  {
    icon: FaVideo,
    title: 'CONTENT',
    description:
      'Vi skapar content som känns rätt i tiden. Vi fångar trender i rätt ögonblick och producerar innehåll som engagerar och sprids.',
  },
  {
    icon: FaChartLine,
    title: 'MARKNADSPLANER & STRATEGI',
    description:
      'Vi tar fram skräddarsydda marknadsplaner med helhetstänk. Utifrån ditt bolags affär, målgrupp och vision skapar vi tydlig riktning.',
  },
  {
    icon: FaUsers,
    title: 'INFLUENCER MARKETING',
    description:
      'Vi arbetar med influencer marketing via vårt handplockade nätverk med över 300 kreatörer – från Stockholms största profiler till lovande nya stjärnskott.',
  },
  {
    icon: FaCalendarAlt,
    title: 'EVENT & PR',
    description:
      'Vi skapar event och PR som verkligen sticker ut – från koncept och produktion till genomförande och uppföljning.',
  },
  {
    icon: FaLayerGroup,
    title: 'HELHETSLÖSNING',
    description:
      'Vi skräddarsyr alla våra upplägg utifrån varje kunds behov, vision och mål. Från strategiska nedslag till helhetslösningar.',
  },
];

export default function Services() {
  return (
    <section id="tjanster" className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full blur-[200px]" style={{ backgroundColor: 'rgba(212, 175, 55, 0.03)' }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px]" style={{ backgroundColor: 'rgba(212, 175, 55, 0.03)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Våra Tjänster
            <Sparkles size={16} />
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
            Allt du behöver för att{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0C350] bg-clip-text text-transparent">
              växa
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl text-center">
            Vi levererar helhetslösningar som driver resultat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl transition-all duration-500"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)'
              }}
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                borderColor: 'rgba(212, 175, 55, 0.3)',
                y: -5,
              }}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.1), transparent 70%)'
                }}
              />

              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 relative"
                style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.1)',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <service.icon className="text-2xl" style={{ color: '#D4AF37' }} />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-white transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-400 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
