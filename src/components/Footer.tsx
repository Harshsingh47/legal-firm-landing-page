import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    'Practice Areas': [
      'Corporate & M&A',
      'Litigation',
      'Intellectual Property',
      'Real Estate',
      'Banking & Finance',
      'Employment Law'
    ],
    'About': [
      'Our Firm',
      'Our Team',
      'Careers',
      'News & Insights',
      'Awards & Recognition',
      'Pro Bono'
    ],
    'Resources': [
      'Legal Updates',
      'Publications',
      'Events',
      'FAQs',
      'Privacy Policy',
      'Terms of Service'
    ]
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded">
                <span className="text-primary">S&A</span>
              </div>
              <div className="ml-3">
                <div className="tracking-tight">Shroff & Associates</div>
                <div className="text-xs text-white/70">Legal Counsel</div>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-sm">
              Providing exceptional legal services with integrity, excellence, 
              and commitment to client success since 1980.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin size={18} />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © 2025 Shroff & Associates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
