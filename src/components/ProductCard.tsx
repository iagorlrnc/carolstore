import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-rose-100 border border-rose-50 flex flex-col group transition-all"
    >
      <div className="relative aspect-square overflow-hidden bg-rose-50">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-700 shadow-sm flex items-center gap-1">
          <span className="text-rose-400">♥</span> {product.rating || '4.5'}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="font-bold text-lg text-stone-800 line-clamp-1 mb-1" title={product.name}>
          {product.name}
        </h3>
        {product.description && (
          <p className="text-base font-semibold text-black-500">{product.description}</p>
        )}
        
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-bold text-2xl bg-gradient-to-r from-red-500 to-[#fa8072] bg-clip-text text-transparent inline-block">
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
          </span>
          <a
            href={product.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-rose-50 hover:bg-gradient-to-r hover:from-rose-200 hover:via-pink-100 hover:to-orange-100 text-rose-400 hover:text-stone-700 p-3 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            title="Adquirir"
          >
            <ShoppingBag size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
