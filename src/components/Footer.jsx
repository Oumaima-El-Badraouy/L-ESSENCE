import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    collections: [
      { name: 'Nouveautés', href: '#' },
      { name: 'Best-Sellers', href: '#' },
      { name: 'Coffrets Cadeaux', href: '#' },
      { name: 'Parfums Féminins', href: '#' },
      { name: 'Parfums Masculins', href: '#' },
    ],
    assistance: [
      { name: 'Livraison', href: '#' },
      { name: 'Retours', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Suivi de Commande', href: '#' },
    ],
    lEssence: [
      { name: 'Notre Histoire', href: '#' },
      { name: 'Savoir-Faire', href: '#' },
      { name: 'Carrières', href: '#' },
      { name: 'Presse', href: '#' },
      { name: 'Mentions Légales', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="bg-[#050505] text-white pt-16 lg:pt-20 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-luxury-gold/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center pb-16 lg:pb-20 border-b border-white/10"
        >
          <h3 className="font-serif text-3xl lg:text-4xl mb-4">
            Restez <span className="italic text-gradient-gold">informé</span>
          </h3>
          <p className="text-white/50 mb-8 max-w-xl mx-auto font-light">
            Inscrivez-vous à notre newsletter pour découvrir nos nouvelles créations
            et bénéficier d'offres exclusives.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-luxury-gold/50 transition-colors duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary"
            >
              S'INSCRIRE
            </motion.button>
          </form>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#E8D5A3" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="url(#footerGold)" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="url(#footerGold)" strokeWidth="0.5" strokeDasharray="4 4" />
                  <path d="M50 25 C35 25 28 38 28 48 C28 62 38 72 50 80 C62 72 72 62 72 48 C72 38 65 25 50 25" fill="url(#footerGold)" opacity="0.4" />
                  <ellipse cx="42" cy="40" rx="8" ry="12" fill="white" opacity="0.3" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-2xl tracking-[0.15em]">L'ESSENCE</span>
                <span className="block text-[10px] tracking-[0.4em] text-luxury-gold uppercase">Maison de Parfums</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8 font-light">
              Une maison de parfumerie d'exception, où chaque fragrance raconte
              une histoire unique et précieuse.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.a
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-luxury-gold transition-colors duration-300"
              >
                <MessageCircle className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm tracking-wide">+33 6 12 34 56 78</span>
              </motion.a>
              <motion.a
                href="tel:+33123456789"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-luxury-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm tracking-wide">+33 1 23 45 67 89</span>
              </motion.a>
              <motion.a
                href="mailto:contact@lessence.fr"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/60 hover:text-luxury-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm tracking-wide">contact@lessence.fr</span>
              </motion.a>
              <p className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-luxury-gold" />
                <span className="text-sm tracking-wide">Paris, France</span>
              </p>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Collections</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/50 hover:text-luxury-gold transition-colors duration-300 text-sm tracking-wide block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-white">Assistance</h4>
            <ul className="space-y-3">
              {footerLinks.assistance.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/50 hover:text-luxury-gold transition-colors duration-300 text-sm tracking-wide block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-white">L'Essence</h4>
            <ul className="space-y-3">
              {footerLinks.lEssence.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/50 hover:text-luxury-gold transition-colors duration-300 text-sm tracking-wide block"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm tracking-wide">
            © {currentYear} L'Essence. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2, color: '#D4AF37' }}
                className="text-white/40 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Payment Methods Note */}
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Paiement sécurisé • Livraison premium
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
