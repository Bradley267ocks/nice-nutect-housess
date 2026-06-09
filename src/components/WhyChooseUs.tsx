/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '../data.ts';

const FeatureIcon = ({ name }: { name: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.CheckCircle size={24} />;
  return <IconComponent size={24} />;
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            Why Choose Us
          </span>
          <h2 className="section-heading mb-6">The Nice Nutec Standard</h2>
          <p className="paragraph text-center">
            We take pride in our workmanship and dedicated customer service, ensuring every project is built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-bg-base p-8 rounded-card h-[180px] flex flex-col justify-center border border-transparent hover:border-secondary/20 transition-all group"
            >
              <div className="bg-white w-12 h-12 flex items-center justify-center rounded-full text-secondary mb-4 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                <FeatureIcon name={item.icon} />
              </div>
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              <p className="text-xs text-text-base/60 mt-1 uppercase font-semibold tracking-wider">Nice Nutec Guaranteed</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
