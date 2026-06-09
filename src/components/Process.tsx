/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PROCESS } from '../data.ts';

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            The Building Journey
          </span>
          <h2 className="section-heading mb-6">Our Project Process</h2>
          <p className="paragraph text-center">
            We've refined our construction process to ensure maximum efficiency and clear communication at every stage.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:flex relative justify-between items-start pt-10">
          <div className="absolute top-[4.5rem] left-0 w-full h-[2px] bg-bg-base z-0" />
          
          {PROCESS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center w-full max-w-[180px]"
            >
              <div className="w-14 h-14 bg-white border-4 border-bg-base text-primary font-display font-bold text-xl flex items-center justify-center rounded-full mb-8 shadow-sm group hover:border-secondary transition-colors">
                {step.id}
              </div>
              <h3 className="font-bold text-primary text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-text-base/70 leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden flex flex-col gap-10 relative">
          <div className="absolute top-0 left-7 w-[2px] h-full bg-bg-base z-0" />
          
          {PROCESS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative z-10 flex items-start gap-8"
            >
              <div className="w-14 h-14 flex-shrink-0 bg-white border-2 border-bg-base text-primary font-display font-bold text-xl flex items-center justify-center rounded-full shadow-sm">
                {step.id}
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-primary text-xl mb-2">{step.title}</h3>
                <p className="text-text-base/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
