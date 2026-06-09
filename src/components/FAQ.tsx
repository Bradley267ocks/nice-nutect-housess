/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data.ts';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-bg-base">
      <div className="container-custom">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            Common Questions
          </span>
          <h2 className="section-heading mb-6">Frequently Asked Questions</h2>
          <p className="paragraph text-center">
            Find quick answers to common queries about our building processes and modular housing solutions.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto space-y-4">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-card shadow-sm border border-bg-base overflow-hidden"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-bg-base/50 transition-colors"
              >
                <span className="font-display font-bold text-primary text-lg md:text-xl pr-6">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openId === faq.id ? (
                    <Minus size={22} className="text-secondary" />
                  ) : (
                    <Plus size={22} className="text-text-base/40" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2">
                      <p className="text-text-base/70 leading-relaxed md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
