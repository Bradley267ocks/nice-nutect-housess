/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';
import { STATS } from '../data.ts';

export default function Hero() {
  return (
    <section className="relative flex flex-col pt-20 lg:pt-0 overflow-visible">
      {/* Hero Visual Area */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/qFLFmDPv/1781031854143.png"
            alt="Modern Nutec House"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/55 lg:bg-primary/45 z-10" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-20 py-16">
          <div className="max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
                Experienced Construction Team
              </span>
              <h1 className="hero-heading text-white mb-6">
                Affordable, Durable & Professional <span className="text-secondary">Nutec House</span> Construction
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl leading-relaxed mb-10 max-w-[550px]"
            >
              We build high-quality Nutec homes, offices, classrooms and custom structures designed to last and built to your specifications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto h-[52px] px-8 flex items-center justify-center gap-2 bg-secondary text-white rounded-button font-bold text-lg hover:bg-secondary/90 transition-all shadow-lg shadow-black/10 group"
              >
                Request Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:0813531156"
                className="w-full sm:w-auto h-[52px] px-8 flex items-center justify-center gap-2 bg-white text-primary rounded-button font-bold text-lg hover:bg-white/90 transition-all shadow-lg shadow-black/5"
              >
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bridge */}
      <div className="relative z-30 -mt-12 lg:-mt-14">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="bg-white p-6 lg:p-5 rounded-card shadow-soft h-[110px] lg:h-[120px] flex flex-col justify-center items-center text-center border border-bg-base transform hover:translate-y-[-4px] transition-transform"
              >
                <span className="text-secondary font-display font-bold text-2xl lg:text-3xl mb-1">
                  {stat.value}
                </span>
                <span className="text-text-base text-xs lg:text-xs font-bold opacity-60 uppercase tracking-widest leading-none">
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
