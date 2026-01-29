'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

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
      <section id="kontaktformular" className="min-h-screen flex items-center justify-center py-20 md:py-32 bg-surface">
        <div className="max-w-[800px] mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-6 bg-accent/10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            >
              <CheckCircle size={48} className="text-accent" />
            </motion.div>
            <motion.h2
              className="heading-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Tack för ditt meddelande!
            </motion.h2>
            <motion.p
              className="body-large"
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

  return (
    <section id="kontaktformular" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[800px] mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-2 mb-4">
            Är du redo på att ta ditt företag till <span className="text-accent">nästa steg?</span>
          </h2>
          <p className="body-large">
            Lämna dina kontaktuppgifter så återkommer vi inom 48h.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <label htmlFor={field.id} className="block text-sm font-medium mb-2 text-foreground">
                  {field.label} {field.required && <span className="text-accent">*</span>}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required={field.required}
                  value={formData[field.id as keyof typeof formData]}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(field.id)}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 md:px-5 md:py-4 rounded-lg text-foreground text-base placeholder-secondary/50 transition-all duration-200 focus:outline-none bg-white border"
                  style={{
                    borderColor: focusedField === field.id ? 'var(--accent)' : 'var(--border)',
                    boxShadow: focusedField === field.id ? '0 0 0 3px rgba(0, 113, 227, 0.1)' : 'none'
                  }}
                  placeholder={field.placeholder}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Övriga kommentarer
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className="w-full px-4 py-3 md:px-5 md:py-4 rounded-lg text-foreground text-base placeholder-secondary/50 transition-all duration-200 focus:outline-none resize-none bg-white border"
              style={{
                borderColor: focusedField === 'message' ? 'var(--accent)' : 'var(--border)',
                boxShadow: focusedField === 'message' ? '0 0 0 3px rgba(0, 113, 227, 0.1)' : 'none'
              }}
              placeholder="Berätta mer om vad du behöver hjälp med..."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary text-base md:text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3"
                  >
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Skickar...
                  </motion.span>
                ) : (
                  <motion.span
                    key="submit"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3"
                  >
                    Skicka meddelande
                    <Send size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg text-center bg-red-50 border border-red-200 text-red-600"
            >
              {errorMessage}
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
