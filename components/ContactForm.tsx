'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Sparkles } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Något gick fel. Vänligen försök igen.');
    }
  };

  const inputFields = [
    { id: 'name', label: 'För & Efternamn', type: 'text', placeholder: 'Ditt namn', required: true },
    { id: 'phone', label: 'Telefon', type: 'tel', placeholder: '+46 70 123 45 67', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'din@email.se', required: true },
    { id: 'company', label: 'Bolag', type: 'text', placeholder: 'Företagsnamn', required: true },
  ];

  if (isSubmitted) {
    return (
      <section id="kontakt" className="min-h-screen flex items-center justify-center pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-2xl mx-auto text-center relative"
          >
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 relative"
              style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)' }}
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <CheckCircle size={48} style={{ color: '#D4AF37' }} className="relative z-10" />
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tack för ditt meddelande!
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Vi återkommer inom 48 timmar.
            </motion.p>

            {/* Confetti-like particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: '#D4AF37' }}
                initial={{
                  x: '50%',
                  y: '50%',
                  scale: 0,
                  opacity: 1
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}%`,
                  y: `${50 + (Math.random() - 0.5) * 100}%`,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.2 + i * 0.05,
                  ease: 'easeOut'
                }}
              />
            ))}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="kontakt" className="min-h-screen flex items-center justify-center pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              className="text-sm font-semibold uppercase tracking-widest mb-4 inline-flex items-center gap-2"
              style={{ color: '#D4AF37' }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={16} />
              Kontakt
              <Sparkles size={16} />
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Är du redo att ta ditt företag till{' '}
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#F0C350] bg-clip-text text-transparent">
                nästa steg?
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Lämna dina kontaktuppgifter så återkommer vi inom 48h.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {inputFields.map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium mb-2 text-white">
                    {field.label} {field.required && <span style={{ color: '#D4AF37' }}>*</span>}
                  </label>
                  <motion.div
                    className="relative"
                    animate={{
                      scale: focusedField === field.id ? 1.01 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-5 py-5 rounded-xl text-white text-base placeholder-gray-500 transition-all duration-200 focus:outline-none"
                      style={{
                        backgroundColor: 'rgba(30, 30, 30, 1)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                      placeholder={field.placeholder}
                    />
                    <AnimatePresence>
                      {focusedField === field.id && (
                        <motion.div
                          className="absolute inset-0 rounded-xl pointer-events-none"
                          style={{ border: '2px solid rgba(212, 175, 55, 0.5)' }}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                Övriga kommentarer
              </label>
              <motion.div
                className="relative"
                animate={{
                  scale: focusedField === 'message' ? 1.01 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-5 py-5 rounded-xl text-white text-base placeholder-gray-500 transition-all duration-200 focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'rgba(30, 30, 30, 1)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  placeholder="Berätta mer om vad du behöver hjälp med..."
                />
                <AnimatePresence>
                  {focusedField === 'message' && (
                    <motion.div
                      className="absolute inset-0 rounded-xl pointer-events-none"
                      style={{ border: '2px solid rgba(212, 175, 55, 0.5)' }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 text-lg px-10 py-5 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-white"
                style={{ backgroundColor: '#D4AF37' }}
                whileHover={{ scale: 1.01, backgroundColor: '#F0C350' }}
                whileTap={{ scale: 0.99 }}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Skickar...
                    </motion.div>
                  ) : (
                    <motion.div
                      key="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3"
                    >
                      Skicka meddelande
                      <Send size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl text-center"
                style={{
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid rgba(239, 68, 68, 0.5)',
                  color: '#fca5a5'
                }}
              >
                {errorMessage}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
