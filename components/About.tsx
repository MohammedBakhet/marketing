'use client';

const stats = [
  { number: '300+', label: 'Kreatörer' },
  { number: '20+', label: 'Kunder' },
  { number: '100%', label: 'Engagemang' },
];

export default function About() {
  return (
    <section id="om-oss" className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch min-h-[800px]">
        {/* Team Image - Full left side */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            alt="Light Vision Marketing Team"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* About Text - Right side with gold background */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20 bg-[#f5d97a]">
          <div className="max-w-lg mx-auto">
            {/* Label */}
            <span className="text-black text-sm font-semibold uppercase tracking-[0.3em] mb-6 block">
              Om Oss
            </span>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-10 italic leading-tight">
              Mindre snack. Mer effekt.
            </h2>

            {/* Description */}
            <div className="space-y-6 mb-12">
              <p className="text-base md:text-lg leading-relaxed text-black/80">
                Light Vision Marketing är en marknadsföringsbyrå som bygger varumärken,
                driver trafik och skapar effekt som märks - både i flödet och i kassan.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black/70">
                Med en tydlig strategi och träffsäkert content hjälper vi företag att nå rätt
                målgrupp med rätt budskap. Budskap som engagerar, konverterar och går att följa
                upp.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-black/70">
                Vi pratar inte räckvidd för sakens skull - vi pratar siffror som betyder något.
                Vi arbetar snabbt, nära och resultatinriktat, i både långsiktiga samarbeten
                och enskilda projekt.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12 mb-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-black">
                    {stat.number}
                  </div>
                  <div className="text-sm text-black/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
