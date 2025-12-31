import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-scroll';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsOpen, getItemCount } = useCart();
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update cart count
  useEffect(() => {
    setItemCount(getItemCount());
  }, [getItemCount]);

  const navLinks = [
    { name: 'Collections', to: 'collections' },
    { name: 'Notre Histoire', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-2xl border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full transition-transform duration-700 group-hover:rotate-180"
                >
                  <defs>
                    <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="50%" stopColor="#E8D5A3" />
                      <stop offset="100%" stopColor="#D4AF37" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGold)" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="url(#logoGold)" strokeWidth="0.5" strokeDasharray="4 4" />
                  <path
                    d="M50 25 C35 25 28 38 28 48 C28 62 38 72 50 80 C62 72 72 62 72 48 C72 38 65 25 50 25"
                    fill="url(#logoGold)"
                    opacity="0.4"
                  />
                  <ellipse cx="42" cy="40" rx="8" ry="12" fill="white" opacity="0.3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <motion.span 
                  className="font-serif text-xl tracking-[0.2em] text-white"
                  whileHover={{ letterSpacing: '0.25em' }}
                  transition={{ duration: 0.3 }}
                >
                  L'ESSENCE
                </motion.span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={800}
                className="text-xs tracking-[0.2em] text-white/60 hover:text-luxury-gold transition-all duration-300 cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Cart Icon & Mobile Menu Toggle */}
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-white/60 hover:text-luxury-gold transition-colors group"
            >
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-luxury-gold text-[#050505] text-[10px] font-bold rounded-full flex items-center justify-center"
                >
                  {itemCount > 99 ? '99+' : itemCount}
                </motion.span>
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-luxury-gold transition-colors"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050505]/98 backdrop-blur-2xl border-t border-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-8 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg tracking-[0.2em] text-white hover:text-luxury-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
