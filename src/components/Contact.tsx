/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[70px]">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5"
          >
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">
              Contact Us
            </span>
            <h2 className="section-heading mb-8">Get Your Free Quote Today</h2>
            <p className="paragraph mb-10">
              Ready to start your building project? Our team is standing by to help you design and build your dream Nutec structure.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-base text-secondary flex items-center justify-center rounded-lg flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Call or WhatsApp</h4>
                  <a href="tel:0813531156" className="text-text-base/70 hover:text-secondary transition-colors text-lg">081 353 1156</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-base text-secondary flex items-center justify-center rounded-lg flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Email Address</h4>
                  <a href="mailto:info@nicenutec.co.za" className="text-text-base/70 hover:text-secondary transition-colors text-lg">info@nicenutec.co.za</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-bg-base text-secondary flex items-center justify-center rounded-lg flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Service Area</h4>
                  <p className="text-text-base/70 text-lg">Western Cape & Surrounding Areas</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="#" className="w-10 h-10 rounded-full bg-bg-base flex items-center justify-center text-primary/60 hover:bg-secondary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-base flex items-center justify-center text-primary/60 hover:bg-secondary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-3/5 bg-bg-base p-8 md:p-10 rounded-card shadow-soft border border-bg-base"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full h-14 bg-white border border-bg-base rounded-button px-5 text-text-base focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full h-14 bg-white border border-bg-base rounded-button px-5 text-text-base focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                    placeholder="e.g. 081 353 1156"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full h-14 bg-white border border-bg-base rounded-button px-5 text-text-base focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white border border-bg-base rounded-button p-5 text-text-base focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full h-[56px] bg-secondary text-white font-bold text-lg rounded-button shadow-soft hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <Send size={20} />
                Request Free Quote
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
