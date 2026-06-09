/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data.ts';

const ServiceIcon = ({ name }: { name: string }) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return <Icons.Home size={32} />;
  return <IconComponent size={32} />;
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-bg-base">
      <div className="container-custom">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            Our Services
          </span>
          <h2 className="section-heading mb-6">Comprehensive Building Solutions</h2>
          <p className="paragraph text-center">
            From residential homes to commercial installations, we provide a full range of Nutec construction services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] md:gap-[30px]">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-card shadow-soft border border-bg-base h-[260px] flex flex-col items-start transition-all"
            >
              <div className="w-14 h-14 bg-bg-base text-secondary flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-text-base/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
