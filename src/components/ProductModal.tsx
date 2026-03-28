import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import type { Product } from '../types';
import { categories } from '../data/mockData';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const category = categories.find(c => c.id === product.categoryId);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full text-stone-500 hover:text-stone-800 hover:bg-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full md:w-1/2 min-h-[300px] md:min-h-0 bg-rose-50 relative flex-shrink-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col w-full md:w-1/2 overflow-y-auto">
              <div className="mb-2">
                <span className="text-xs font-bold text-rose-500 uppercase tracking-wider bg-rose-50 px-2 py-1 rounded-md">
                  {category?.name}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-800 mb-2">
                {product.name}
              </h2>
              <div className="flex items-center gap-1 mb-4">
                <span className="bg-rose-100 text-rose-600 px-2 py-0.5 rounded text-sm font-bold flex items-center gap-1">
                  ♥ {product.rating || '4.5'}
                </span>
              </div>
              
              <div className="space-y-4 mb-6 flex-grow">
                {product.description && (
                  <div>
                    <h4 className="text-sm font-bold text-stone-800 mb-1">Sobre o Produto</h4>
                    <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">{product.description}</p>
                  </div>
                )}
                {category?.description && (
                  <div>
                    <h4 className="text-sm font-bold text-stone-800 mb-1">Sobre a Linha {category.name}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-line">{category.description}</p>
                  </div>
                )}
              </div>

              <div className="mt-auto pt-4 border-t border-stone-100">
                <div className="mb-4">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-[#fa8072] bg-clip-text text-transparent">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                  </span>
                </div>
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-400 to-[#fa8072] hover:from-rose-500 hover:to-red-500 text-white py-4 px-6 rounded-2xl font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-rose-200"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Comprar agora</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
