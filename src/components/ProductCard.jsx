import { motion } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, index, onViewDetails }) => {
  const { addToCart } = useCart();

  const formatPrice = (price) => {
    return `${price.toFixed(2).replace('.', ',')} €`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-luxury-gold/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
        
        {/* Quick View Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onViewDetails(product)}
          className="absolute top-3 right-3 p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-luxury-gold/80 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        >
          <Eye className="w-4 h-4" />
        </motion.button>

        {/* Type Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 bg-luxury-black/60 backdrop-blur-md rounded-full text-luxury-gold text-[10px] tracking-[0.15em] uppercase border border-luxury-gold/20">
            {product.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h3 className="font-serif text-lg text-white mb-1 group-hover:text-luxury-gold transition-colors duration-300 truncate">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-white/40 text-xs mb-3 truncate">
          {product.shortDesc}
        </p>

        {/* Price & Actions */}
        <div className="flex items-center justify-between">
          <span className="text-luxury-gold font-semibold">
            {formatPrice(product.price)}
          </span>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-luxury-gold/20 border border-white/10 hover:border-luxury-gold/50 rounded-lg text-white/70 hover:text-luxury-gold transition-all duration-300 text-xs tracking-wide"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Ajouter
          </motion.button>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-luxury-gold/10 via-transparent to-transparent" />
      </div>
    </motion.article>
  );
};

export default ProductCard;
