/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data.ts';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  return (
    <section className="section-padding bg-primary text-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            Testimonials
          </span>
          <h2 className="section-heading text-white mb-6">What Our Clients Say</h2>
          <p className="paragraph text-white/70 text-center">
            Trust is built one house at a time. Read how we've helped our clients bring their visions to life.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 p-8 rounded-card border border-white/10 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-white/90 text-lg italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">{testimonial.name}</span>
                <span className="text-white/60 text-sm">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="lg:hidden relative">
          <div className="min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full bg-white/5 p-10 rounded-card border border-white/10 flex flex-col items-center text-center"
              >
                <Quote className="text-secondary mb-6" size={40} />
                <div className="flex gap-1 mb-6">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-white/90 text-xl italic mb-8 leading-relaxed max-w-[400px]">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>
                <div>
                  <h4 className="font-bold text-xl text-white">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-white/60">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
