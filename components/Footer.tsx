'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-[1400px] mx-auto container-padding py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <span className="font-semibold text-lg text-foreground">
              Light Vision
            </span>
            <span className="font-semibold text-lg text-accent">
              Marketing
            </span>
          </Link>

          <p className="text-secondary text-sm md:text-base mb-8">
            Vi får varumärken att synas, kännas och växa — mindre snack & mer effekt.
          </p>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            <button
              onClick={() => scrollToSection('om-oss')}
              className="text-secondary hover:text-foreground transition-colors text-sm"
            >
              Om Oss
            </button>
            <button
              onClick={() => scrollToSection('tjanster')}
              className="text-secondary hover:text-foreground transition-colors text-sm"
            >
              Tjänster
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="text-secondary hover:text-foreground transition-colors text-sm"
            >
              Kontakt
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-secondary text-xs md:text-sm mb-8">
            <span>info@lightvision.se</span>
            <span className="hidden md:inline">•</span>
            <span>08-XXX XX XX</span>
            <span className="hidden md:inline">•</span>
            <span>Stockholm, Sverige</span>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <p className="text-secondary text-xs md:text-sm">
              © {currentYear} Light Vision Marketing. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
