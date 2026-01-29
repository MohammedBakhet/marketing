'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-white">
      <div className="w-full container-padding">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-2 mb-12"
          >
            Är du redo att ta ditt företag till <span className="text-accent">nästa nivå?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/kontakt"
              className="btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4"
            >
              KONTAKTA OSS
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
