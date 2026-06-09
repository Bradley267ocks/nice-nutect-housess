/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';
import { STATS } from '../data.ts';

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_nutec_house_png_1781022707611.png"
          alt="Modern Nutec House"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/50 z-10" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-20 pb-16 lg:pb-0">
        <div className="max-w-[650px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-heading text-white mb-6"
          >
            Affordable, Durable & Professional Nutec House Construction
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl lg:text-[22px] leading-relaxed mb-10 max-w-[550px]"
          >
            We build high-quality Nutec homes, offices, classrooms and custom structures designed to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto h-[52px] px-7 flex items-center justify-center gap-2 bg-secondary text-white rounded-button font-bold text-lg hover:bg-secondary/90 transition-all group"
            >
              Request Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0813531156"
              className="w-full sm:w-auto h-[52px] px-7 flex items-center justify-center gap-2 bg-white text-primary rounded-button font-bold text-lg hover:bg-white/90 transition-all"
            >
              <Phone size={20} />
              Call Now
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats - positioned lower but within the section flow or just below */}
      <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 z-30 lg:translate-y-1/2">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-white p-6 rounded-card shadow-soft h-[120px] flex flex-col justify-center items-center text-center border border-bg-base"
              >
                <span className="text-secondary font-display font-bold text-2xl lg:text-3xl mb-1">
                  {stat.value}
                </span>
                <span className="text-text-base text-sm lg:text-base font-medium opacity-70">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
