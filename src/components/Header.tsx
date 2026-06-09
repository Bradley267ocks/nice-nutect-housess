/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 1)']
  );

  const shadow = useTransform(
    scrollY,
    [0, 100],
    ['none', '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)']
  );

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      style={{ backgroundColor, boxShadow: shadow }}
      className="fixed top-0 left-0 w-full h-20 z-50 flex items-center transition-colors duration-300"
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-lg">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="text-white font-display font-bold text-xl md:text-2xl">
            Nice <span className="text-secondary">Nutec</span> Houses
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-secondary font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0813531156"
            className="flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-button font-semibold hover:bg-secondary/90 transition-colors"
          >
            <Phone size={18} />
            081 353 1156
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 w-full bg-primary p-6 flex flex-col gap-6 lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0813531156"
            className="flex items-center justify-center gap-2 bg-secondary text-white px-5 py-3 rounded-button font-semibold"
          >
            <Phone size={20} />
            081 353 1156
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
