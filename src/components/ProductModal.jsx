import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return `${price.toFixed(2).replace('.', ',')} €`;
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-10 lg:inset-20 bg-[#0f0f0f] rounded-3xl border border-white/10 overflow-hidden z-50 flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-4 py-2 bg-luxury-black/60 backdrop-blur-md border border-luxury-gold/30 rounded-full text-luxury-gold text-sm tracking-[0.2em] uppercase">
                  {product.type}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-10 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {/* Type */}
                <span className="text-luxury-gold text-xs tracking-[0.3em] uppercase mb-3 block">
                  Eau de Parfum
                </span>

                {/* Name */}
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  {product.name}
                </h2>

                {/* Price */}
                <p className="font-serif text-3xl text-luxury-gold mb-6">
                  {formatPrice(product.price)}
                </p>

                {/* Short Description */}
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  {product.shortDesc}
                </p>

                {/* Full Description */}
                <p className="text-white/40 leading-relaxed mb-8">
                  {product.fullDescription}
                </p>

                {/* Intensity */}
                <div className="flex items-center gap-2 mb-8">
                  <Star className="w-4 h-4 text-luxury-gold" />
                  <span className="text-white/50 text-sm">{product.intensity}</span>
                </div>

                {/* Notes */}
                <div className="mb-8">
                  <span className="text-xs tracking-[0.2em] text-white/40 uppercase block mb-3">
                    Notes Olfactives
                  </span>
                  <p className="text-white/70">{product.notes}</p>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    addToCart(product);
                    onClose();
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-luxury-gold via-luxury-goldLight to-luxury-gold bg-[length:200%_100%] text-luxury-black font-semibold tracking-[0.15em] uppercase rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 animate-gold-flow"
                >
                  <Plus className="w-5 h-5" />
                  Ajouter au Panier
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
