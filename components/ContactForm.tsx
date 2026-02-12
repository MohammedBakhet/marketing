'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="kontakt" className="min-h-screen pt-32 pb-16 bg-black relative overflow-hidden flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto px-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div 
              className="w-24 h-24 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-8 relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-[#d4af37]/20"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <CheckCircle size={48} className="text-[#d4af37] relative z-10" />
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tack för ditt meddelande!
            </motion.h2>
            <motion.p 
              className="text-[#d7c7a0] text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Vi återkommer inom 48 timmar.
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  const inputFields = [
    { id: 'name', label: 'För & Efternamn', type: 'text', placeholder: 'Ditt namn', required: true },
    { id: 'phone', label: 'Telefon', type: 'tel', placeholder: '+46 70 123 45 67', required: true },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'din@email.se', required: true },
    { id: 'company', label: 'Bolag', type: 'text', placeholder: 'Företagsnamn', required: true },
  ];

  return (
    <section id="kontakt" className="min-h-screen pt-32 pb-16 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-[#d4af37] text-sm font-semibold uppercase tracking-widest mb-4 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            Kontakt
            <Sparkles size={16} />
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#d4af37] mb-4 leading-tight">
            Är du redo att ta ditt företag till{' '}
            <span className="block">nästa steg?</span>
          </h2>
          <p className="text-[#d7c7a0] text-lg">
            Lämna dina kontaktuppgifter så återkommer vi inom 48h.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <label htmlFor={field.id} className="block text-sm font-medium text-[#d4af37] mb-2">
                  {field.label} {field.required && <span className="text-[#d4af37]">*</span>}
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
                    className="w-full px-4 py-3 bg-transparent border border-[#d4af37]/30 rounded-lg text-white placeholder-[#d7c7a0]/50 focus:outline-none focus:border-[#d4af37] transition-colors"
                    placeholder={field.placeholder}
                  />
                  <AnimatePresence>
                    {focusedField === field.id && (
                      <motion.div
                        className="absolute inset-0 rounded-lg border-2 border-[#d4af37]/50 pointer-events-none"
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-[#d4af37] mb-2">
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
                rows={5}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className="w-full px-4 py-3 bg-transparent border border-[#d4af37]/30 rounded-lg text-white placeholder-[#d7c7a0]/50 focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                placeholder="Berätta mer om vad du behöver hjälp med..."
              />
              <AnimatePresence>
                {focusedField === 'message' && (
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-[#d4af37]/50 pointer-events-none"
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#d4af37] text-black font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#f5d97a] transition-colors"
              whileHover={{ scale: 1.01 }}
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
                      className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
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
                    SKICKA MEDDELANDE
                    <Send size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
