'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#050505' }}>
      {/* Top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content - Centered */}
        <div className="text-center mb-12">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 mb-6 justify-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#D4AF37' }}
            >
              <span className="text-white font-bold text-xl">LV</span>
            </div>
            <span className="font-bold text-2xl text-white">
              Light Vision{' '}
              <span style={{ color: '#D4AF37' }}>Marketing</span>
            </span>
          </Link>

          <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
            Vi får varumärken att synas, kännas och växa - mindre snack & mer effekt.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-3 justify-center mb-12">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                borderColor: 'rgba(212, 175, 55, 0.5)',
              }}
            >
              <svg className="w-5 h-5" style={{ color: '#D4AF37' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full flex items-center justify-center transition-colors"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              whileHover={{
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                borderColor: 'rgba(212, 175, 55, 0.5)',
              }}
            >
              <svg className="w-5 h-5" style={{ color: '#D4AF37' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </motion.a>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { href: '/', label: 'Hem' },
              { href: '/om-oss', label: 'Om Oss' },
              { href: '/#tjanster', label: 'Tjänster' },
              { href: '/kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors inline-flex items-center gap-1 group"
              >
                {link.label}
                <ArrowUpRight
                  size={14}
                  className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                  style={{ color: '#D4AF37' }}
                />
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
            <span>info@lightvision.se</span>
            <span>08-XXX XX XX</span>
            <span>Stockholm, Sverige</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 text-center"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
          <p className="text-gray-600 text-sm mb-2">
            &copy; {currentYear} Light Vision Marketing. Alla rättigheter förbehållna.
          </p>
          <p className="text-sm">
            <span className="text-gray-600">Marknadsföring som skapar </span>
            <span style={{ color: '#D4AF37' }}>genomslag</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
