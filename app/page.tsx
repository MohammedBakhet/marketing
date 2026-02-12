import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import Services from '@/components/Services';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

// Quote divider component
function QuoteDivider() {
  return (
    <div className="bg-[#050505] py-24 md:py-32 lg:py-40 relative overflow-hidden flex items-center justify-center">
      {/* Left vertical line */}
      <div className="hidden md:block absolute left-1/2 -translate-x-[300px] lg:-translate-x-[400px] top-1/2 -translate-y-1/2 w-px h-48 lg:h-64 bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent" />
      
      {/* Right vertical line */}
      <div className="hidden md:block absolute left-1/2 translate-x-[300px] lg:translate-x-[400px] top-1/2 -translate-y-1/2 w-px h-48 lg:h-64 bg-gradient-to-b from-transparent via-[#c9a84c]/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center justify-center">
        {/* Quote marks */}
        <div className="flex gap-1 mb-8" data-aos="fade-down" data-aos-delay="100">
          <span className="text-5xl md:text-6xl text-[#c9a84c] font-serif leading-none">"</span>
        </div>
        
        {/* First line */}
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-[#f5f0e6] mb-2" data-aos="fade-up" data-aos-delay="150">
          Vi bygger inte bara
        </h3>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-[#c9a84c] mb-8" data-aos="fade-up" data-aos-delay="200">
          varumärken
        </h3>
        
        {/* Decorative dots */}
        <div className="flex items-center gap-2 mb-8" data-aos="zoom-in" data-aos-delay="250">
          <div className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
          <div className="w-8 h-px bg-[#c9a84c]/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          <div className="w-8 h-px bg-[#c9a84c]/30" />
          <div className="w-1 h-1 rounded-full bg-[#c9a84c]/40" />
        </div>
        
        {/* Second line */}
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-[#606060] mb-2" data-aos="fade-up" data-aos-delay="300">
          vi bygger <span className="text-[#f5f0e6]">relationer</span>
        </h3>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-[#f5f0e6]" data-aos="fade-up" data-aos-delay="350">
          som varar.
        </h3>
      </div>
    </div>
  );
}

// Decorative section divider component
function SectionDivider({ variant = 'gold' }: { variant?: 'gold' | 'dark' | 'wave' | 'wave-to-dark' | 'transparent' | 'simple' }) {
  if (variant === 'simple') {
    return (
      <div className="w-full flex justify-center py-8 md:py-12 bg-[#f5d97a]">
        <div className="w-full max-w-2xl h-px bg-black/20" />
      </div>
    );
  }

  if (variant === 'transparent') {
    return (
      <div className="relative h-32 md:h-48 bg-transparent">
        <div 
          className="absolute inset-0" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)' 
          }} 
        />
      </div>
    );
  }

  if (variant === 'wave') {
    return (
      <div className="relative h-24 md:h-32 overflow-hidden bg-black">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
            fill="#f5d97a"
          />
        </svg>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#d4af37] rounded-full" />
      </div>
    );
  }

  if (variant === 'wave-to-dark') {
    return (
      <div className="relative h-24 md:h-32 overflow-hidden bg-[#f5d97a]">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
            fill="#050505"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className="relative h-20 md:h-28 bg-[#f5d97a]">
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,0 L1440,0 L1440,50 Q1080,100 720,50 Q360,0 0,50 Z"
            fill="#1a1406"
          />
        </svg>
      </div>
    );
  }

  // Default gold divider
  return (
    <div className="relative py-12 md:py-16 bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#d4af37]/60" />
        <div className="w-3 h-3 rounded-full bg-[#d4af37]" />
        <div className="w-2 h-2 rounded-full bg-[#d4af37]/60" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        
        {/* Transparent blend divider between Hero and Services */}
        <SectionDivider variant="transparent" />
        
        <Services />
        
        {/* Wave transition to About */}
        <SectionDivider variant="wave" />
        
          <About />
        
        {/* Wave divider between About and Clients */}
        <SectionDivider variant="wave-to-dark" />
        
         <Clients />
        
        {/* Quote divider between Clients and CTA */}
        <QuoteDivider />
        
        {/* CTA Section */}
        <CTASection />
        
        {/* Gold divider before Footer */}
        <SectionDivider variant="gold" />
      </main>
      <Footer />
    </div>
  );
}
