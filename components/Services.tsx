'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    title: 'Sociala Medier',
    description: 'Vi hanterar dina sociala medier från A till Ö - från publicering och aktivt community management till analys och datadriven uppföljning. Allt vi gör mäts, optimeras och anpassas för att säkerställa att innehållet når rätt publik och skapar långsiktig, mätbar effekt.',
  },
  {
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
    title: 'Content',
    description: 'Vi skapar content som känns rätt i tiden. Vi tar idéer från första tanke till färdig produktion. Vi fångar trender i rätt ögonblick, sätter nya trender och producerar innehåll som engagerar, sprids och ger räckvidd. Trenddrivet när det behövs, varumärkesbyggande när det räknas. Alltid med plattform, målgrupp och effekt i fokus.',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    title: 'Marknadsplaner & Strategi',
    description: 'Vi tar fram skräddarsydda marknadsplaner med helhetstänk. Utifrån ditt bolags affär, målgrupp och vision skapar vi tydlig riktning - från övergripande kommunikation till detaljerade upplägg för varje kanal. Resultatet är marknadsföring som engagerar, bygger relationer och ger långsiktig effekt.',
  },
  {
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    title: 'Influencer Marketing',
    description: 'Vi arbetar med influencer marketing via vårt handplockade nätverk med över 300 kreatörer – från Stockholms största profiler till lovande nya stjärnskott. Det gör att vi alltid kan matcha rätt röst med rätt varumärke. Influencers når publiken där den faktiskt är, med innehåll som känns äkta och relevant. Rätt samarbeten skapar engagemang, stärker varumärket och driver mätbara resultat.',
  },
  {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    title: 'Event & PR',
    description: 'Vi skapar event och PR som verkligen sticker ut – från koncept och produktion till genomförande och uppföljning. Med vår erfarenhet kombinerar vi kreativa event, relevant PR och influencer-samarbeten för maximal synlighet och engagemang. Rätt event och PR bygger relationer, skapar buzz och stärker varumärket på ett sätt traditionell marknadsföring inte kan.',
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    title: 'Helhetslösning',
    description: 'Vi skräddarsyr alla våra upplägg utifrån varje kunds behov, vision och mål. Från strategiska nedslag till helhetslösningar med marknadsplanering, innehållsskapande och distribution – allt anpassat för att skapa maximal effekt för just ert bolag.',
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="tjanster" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Centered container wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* Section header */}
        <div className="text-center mb-20 w-full max-w-4xl mx-auto px-6">
          <span 
            data-aos="fade-down" 
            data-aos-delay="100"
            className="text-[#d4af37] text-sm font-semibold uppercase tracking-[0.3em] mb-4 block"
          >
            Våra Tjänster
          </span>
          <h2 
            data-aos="fade-up" 
            data-aos-delay="200"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Vad vi erbjuder
          </h2>
          <div 
            data-aos="zoom-in" 
            data-aos-delay="300"
            className="w-24 h-1 bg-[#d4af37] mx-auto" 
          />
        </div>

        {/* Services - Alternating Layout */}
        <div className="space-y-24 md:space-y-32 w-full max-w-5xl mx-auto px-6 pb-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: '-100px', amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image */}
                  <motion.div
                    className="w-full lg:w-1/2 relative group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <div className="relative overflow-hidden">
                      {/* Gold border frame */}
                      <div className="absolute inset-0 border-2 border-[#d4af37] transform translate-x-4 translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                      <div className="relative z-10">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                          loading="lazy"
                        />
                        {/* Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-[#d4af37]/20"
                          initial={{ opacity: 0.3 }}
                          animate={{ opacity: isHovered ? 0 : 0.3 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Index number */}
                    <div className="absolute -top-6 -left-6 z-20">
                      <span className="text-8xl font-bold text-[#d4af37]/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-8 lg:pl-4">
                    <motion.div
                      animate={isHovered ? { x: isEven ? 10 : -10 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 relative pb-6">
                        <span className="relative">
                          {service.title}
                          <motion.div
                            className="absolute -bottom-1 left-0 h-1 bg-[#d4af37]"
                            initial={{ width: '40%' }}
                            animate={{ width: isHovered ? '100%' : '40%' }}
                            transition={{ duration: 0.4 }}
                          />
                        </span>
                      </h3>
                    </motion.div>

                    <p className={`text-[#d7c7a0] text-lg leading-relaxed transition-all duration-300 ${expandedIndex === index ? '' : 'line-clamp-4'}`}>
                      {service.description}
                    </p>

                    <motion.button
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="group/btn inline-flex items-center gap-3 text-[#d4af37] font-semibold uppercase tracking-wider text-sm hover:text-[#f5d97a] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {expandedIndex === index ? 'Visa mindre' : 'Läs mer'}
                      <ArrowRight
                        size={18}
                        className={`transition-transform group-hover/btn:translate-x-1 ${expandedIndex === index ? 'rotate-90' : ''}`}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Spacer */}
        <div className="h-22 md:h-28" />

        
      </div>
    </section>
  );
}
