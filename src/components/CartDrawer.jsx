import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, getTotal, sendToWhatsApp } = useCart();

  const formatPrice = (price) => {
    return `${price.toFixed(2).replace('.', ',')} €`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0f0f0f] border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-luxury-gold" />
                <h2 className="font-serif text-xl text-white">Votre Panier</h2>
                <span className="px-2 py-0.5 bg-luxury-gold/20 text-luxury-gold text-xs rounded-full">
                  {items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-white/10 mb-4" />
                  <p className="text-white/40 mb-2">Votre panier est vide</p>
                  <p className="text-white/30 text-sm">Ajoutez des parfums pour commencer</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-white truncate">{item.name}</h3>
                        <p className="text-xs text-white/40 mt-1">{item.type}</p>
                        <p className="text-luxury-gold font-medium mt-2">{formatPrice(item.price)}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
                {/* Total */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white/60">Total</span>
                  <span className="font-serif text-2xl text-luxury-gold">
                    {formatPrice(getTotal())}
                  </span>
                </div>

                {/* WhatsApp Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={sendToWhatsApp}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-luxury-gold via-luxury-goldLight to-luxury-gold bg-[length:200%_100%] text-luxury-black font-semibold tracking-[0.15em] uppercase rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 animate-gold-flow"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Commander sur WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-center text-white/30 text-xs mt-4">
                  Payment sécurisé • Livraison premium
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
