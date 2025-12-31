import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { products } from '../data/products';

const ITEMS_PER_PAGE = 8;

const Products = ({ onViewDetails }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="collections"
        className="py-20 lg:py-28 bg-[#050505] relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-luxury-gold/3 rounded-full blur-[100px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-20 h-px bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-6"
            />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="section-subtitle mb-4"
            >
              L'Excellence Olfactive
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="section-title"
            >
              Nos <span className="italic text-gradient-gold">Créations</span>
            </motion.h2>
          </motion.div>

          {/* Products Grid - Compact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentItems.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center justify-center gap-4 mt-16"
            >
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  currentPage === 1
                    ? 'border-luxury-gold/20 text-luxury-gold/30 cursor-not-allowed'
                    : 'border-luxury-gold/40 text-luxury-gold hover:bg-luxury-gold/10 hover:border-luxury-gold'
                }`}
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    currentPage === 1 ? '' : 'group-hover:-translate-x-1'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm tracking-widest uppercase font-light">
                  Précédent
                </span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`w-10 h-10 rounded-full text-sm tracking-wider font-light transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-luxury-gold text-black'
                        : 'border border-luxury-gold/30 text-luxury-gold hover:bg-luxury-gold/10'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  currentPage === totalPages
                    ? 'border-luxury-gold/20 text-luxury-gold/30 cursor-not-allowed'
                    : 'border-luxury-gold/40 text-luxury-gold hover:bg-luxury-gold/10 hover:border-luxury-gold'
                }`}
              >
                <span className="text-sm tracking-widest uppercase font-light">
                  Suivant
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    currentPage === totalPages ? '' : 'group-hover:translate-x-1'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          )}

          {/* Page Indicator */}
          {totalPages > 1 && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-center text-luxury-gold/40 text-sm tracking-widest mt-8"
            >
              Page <span className="text-luxury-gold">{currentPage}</span> /{' '}
              {totalPages}
            </motion.p>
          )}
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Products;
