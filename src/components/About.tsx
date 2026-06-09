/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[70px]">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 h-[350px] md:h-[500px]"
          >
            <img
              src="/src/assets/images/about_nutec_construction_png_1781022720284.png"
              alt="Quality Nutec Construction"
              className="w-full h-full object-cover rounded-image shadow-soft"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 max-w-[500px]"
          >
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
              About Our Company
            </span>
            <h2 className="section-heading mb-6">
              Excellence in Modular & Nutec Construction
            </h2>
            <div className="space-y-4">
              <p className="paragraph">
                Nice Nutec Houses is a premier construction firm specializing in the design and build of high-quality Nutec structures. With over a decade of experience, we have mastered the art of creating durable, cost-effective, and aesthetically pleasing modular homes.
              </p>
              <p className="paragraph font-medium text-primary">
                Our mission is to provide affordable housing and professional building solutions without compromising on quality or style.
              </p>
              <p className="paragraph">
                Whether you're looking for a comfortable guest house, a modern site office, or an entire classroom block, our team of skilled professionals ensures a seamless building process from foundation to final inspection.
              </p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-10 p-5 bg-bg-base rounded-card border-l-4 border-secondary flex flex-col gap-2"
            >
              <span className="font-display font-bold text-primary">Need something custom?</span>
              <p className="text-sm opacity-80">Our design team works closely with you to create tailored structures that fit your specific site and budget.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
