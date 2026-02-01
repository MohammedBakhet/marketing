'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    title: 'Sociala Medier',
    description:
      'Vi hanterar dina sociala medier från A till Ö - från publicering och aktivt community management till analys och datadriven uppföljning. Allt vi gör mäts, optimeras och anpassas för att säkerställa att innehållet når rätt publik och skapar långsiktig, mätbar effekt.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
  },
  {
    title: 'Content',
    description:
      'Vi skapar content som känns rätt i tiden. Vi tar idéer från första tanke till färdig produktion. Vi fångar trender i rätt ögonblick, sätter nya trender och producerar innehåll som engagerar, sprids och ger räckvidd. Trenddrivet när det behövs, varumärkesbyggande när det räknas. Alltid med plattform, målgrupp och effekt i fokus.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
  },
  {
    title: 'Marknadsplaner & Strategi',
    description:
      'Vi tar fram skräddarsydda marknadsplaner med helhetstänk. Utifrån ditt bolags affär, målgrupp och vision skapar vi tydlig riktning - från övergripande kommunikation till detaljerade upplägg för varje kanal. Resultatet är marknadsföring som engagerar, bygger relationer och ger långsiktig effekt.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    title: 'Influencer Marketing',
    description:
      'Vi arbetar med influencer marketing via vårt handplockade nätverk med över 300 kreatörer – från Stockholms största profiler till lovande nya stjärnskott. Det gör att vi alltid kan matcha rätt röst med rätt varumärke. Influencers når publiken där den faktiskt är, med innehåll som känns äkta och relevant. Rätt samarbeten skapar engagemang, stärker varumärket och driver mätbara resultat – både räckvidd och konverteringar.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
  },
  {
    title: 'Event & PR',
    description:
      'Vi skapar event och PR som verkligen sticker ut – från koncept och produktion till genomförande och uppföljning. Med vår erfarenhet kombinerar vi kreativa event, relevant PR och influencer-samarbeten för maximal synlighet och engagemang. Rätt event och PR bygger relationer, skapar buzz och stärker varumärket på ett sätt traditionell marknadsföring inte kan. Genom att kombinera influencers, content och kontakt med rätt personer når vi publiken där den faktiskt är – och skapar mätbar effekt.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
  },
  {
    title: 'Helhetslösning',
    description:
      'Vi skräddarsyr alla våra upplägg utifrån varje kunds behov, vision och mål. Från strategiska nedslag till helhetslösningar med marknadsplanering, innehållsskapande och distribution – allt anpassat för att skapa maximal effekt för just ert bolag.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      {/* Image */}
      <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-4 bg-[#1a1a1a]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
          {service.title}
        </h3>

        {isExpanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-gray-400 leading-relaxed text-sm mb-3"
          >
            {service.description}
          </motion.p>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-medium text-white/70 hover:text-white transition-colors underline underline-offset-4"
        >
          {isExpanded ? 'Stäng' : 'Läs mer'}
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="tjanster" className="py-20 md:py-32 bg-[#0f0f0f] relative overflow-hidden w-full">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="w-full container-padding relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            className="inline-block px-4 py-2 text-sm font-medium text-white/60 border border-white/10 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Vad vi gör
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Tjänster</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Vi levererar helhetslösningar som driver resultat
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
