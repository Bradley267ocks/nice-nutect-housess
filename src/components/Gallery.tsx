/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GALLERY } from '../data.ts';

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-bg-base">
      <div className="container-custom">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
            Featured Projects
          </span>
          <h2 className="section-heading mb-6">Our Work Gallery</h2>
          <p className="paragraph text-center">
            Take a look at some of our completed Nutec projects across residential and commercial sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group aspect-[4/5] overflow-hidden rounded-image"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-display font-semibold text-lg">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
