'use client';

import { motion } from 'framer-motion';

const clients = [
  "El Birria",
  "Sushi Sukai",
  "Holy Kebab",
  "Fratelli",
  "Blubnan Kajen",
  "Dirty Taco",
  "Orimlig Hyra",
  "Santa Maria",
  "Intraskin",
  "Stortorgskällan",
  "Cafe Fix",
  "Krubb",
  "Comviq",
  "The Boil",
  "Kista Galleria",
  "Jureskogs",
  "Clean SAVD",
  "McDonalds",
  "Brams Burgers",
  "The Border",
];

const row1 = clients.slice(0, 7);
const row2 = clients.slice(7, 14);
const row3 = clients.slice(14, 20);

function Separator() {
  return (
    <span 
      className="flex h-2 w-2 flex-shrink-0 rotate-45 items-center justify-center bg-[#c9a84c] opacity-60"
      style={{ marginLeft: '24px', marginRight: '24px' }}
    />
  );
}

function MarqueeRow({
  items,
  direction = "left",
  duration = 40,
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const duplicated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex w-max items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((client, index) => (
          <div key={`${direction}-${index}`} className="flex items-center">
            <span className="group relative flex-shrink-0 cursor-default whitespace-nowrap px-4 text-2xl font-light uppercase tracking-[0.15em] text-[#404040] transition-colors duration-700 hover:text-[#f5f0e6] md:px-6 lg:px-8 md:text-4xl lg:text-5xl">
              {client}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a84c] transition-all duration-700 group-hover:w-full" />
            </span>
            <Separator />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="kunder"
      className="relative w-full overflow-hidden bg-[#050505]"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Top spacer line */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-2xl h-1 bg-[#c9a84c]" /> */}
      
      {/* Fine cross-hatch texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header - centered */}
      <div className="relative mx-auto mb-16 flex w-full flex-col items-center gap-8 px-8 text-center md:mb-24 pt-12 md:pt-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4" data-aos="fade-down" data-aos-delay="100">
            <div className="h-px w-16 bg-[#c9a84c]" />
            <span className="text-base font-medium uppercase tracking-[0.3em] text-[#c9a84c] md:text-lg lg:text-xl">
              Samarbeten
            </span>
            <div className="h-px w-16 bg-[#c9a84c]" />
          </div>
          <h2 className="font-serif text-5xl font-normal italic leading-[1.1] tracking-tight text-[#f5f0e6] md:text-6xl lg:text-7xl" data-aos="fade-up" data-aos-delay="200">
            <span className="text-pretty">Kunder vi</span>
            <br />
            <span className="text-pretty">
              jobbat{" "}
              <span className="not-italic text-[#c9a84c]">med</span>
            </span>
          </h2>
        </div>

        {/* Big number accent */}
        <div className="flex flex-col items-center gap-1 mt-4" data-aos="zoom-in" data-aos-delay="300">
          <span className="font-serif text-8xl font-normal tabular-nums tracking-tighter text-[#c9a84c] md:text-9xl">
            {clients.length}+
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#505050]">
            nöjda kunder
          </span>
        </div>
      </div>

      {/* Thin top border */}
      <div className="flex justify-center mb-16 md:mb-20">
        <div className="h-px w-3/4 max-w-5xl bg-[#1a1a1a]" />
      </div>

      {/* Three marquee rows with different speeds and directions */}
      <div className="flex flex-col" style={{ gap: '20px' }}>
        <MarqueeRow items={row1} direction="left" duration={35} />
        <MarqueeRow items={row2} direction="right" duration={45} />
        <MarqueeRow items={row3} direction="left" duration={50} />
      </div>

      {/* Thin bottom border */}
      <div className="flex justify-center mt-16 md:mt-20">
        <div className="h-px w-3/4 max-w-5xl bg-[#1a1a1a]" />
      </div>

      {/* Bottom tagline */}
      <div className="w-full mt-12 text-center md:mt-16 pb-12 md:pb-16" data-aos="fade-up" data-aos-delay="100">
        <p className="text-base font-light tracking-[0.25em] text-[#484848] md:text-lg">
          VI ÄR STOLTA ÖVER ATT HA SAMARBETAT MED FANTASTISKA VARUMÄRKEN
        </p>
      </div>
      
      {/* Bottom spacer line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 max-w-2xl h-1 bg-[#c9a84c]" />
    </section>
  );
}
