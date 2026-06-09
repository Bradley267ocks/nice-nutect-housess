/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo/Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-secondary flex items-center justify-center rounded-lg">
                <span className="text-white font-bold">N</span>
              </div>
              <span className="text-white font-display font-bold text-lg">
                Nice <span className="text-secondary">Nutec</span> Houses
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Western Cape's leader in premium Nutec and modular construction. Quality you can trust, prices you can afford.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-secondary mb-6 italic">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#gallery" className="text-white/60 hover:text-white transition-colors text-sm">Our Gallery</a></li>
              <li><a href="#process" className="text-white/60 hover:text-white transition-colors text-sm">Process</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm">Get Quote</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-secondary mb-6 italic">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Nutec Homes</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Modular Offices</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Nutec Classrooms</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm">Renovations</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-secondary mb-6 italic">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">081 353 1156</li>
              <li className="text-white/60 text-sm">info@nicenutec.co.za</li>
              <li className="text-white/60 text-sm">Cape Town, Western Cape</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} Nice Nutec Houses. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
