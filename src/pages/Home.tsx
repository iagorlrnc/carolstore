import React from 'react';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import { categories, products } from '../data/mockData';
import { useStore } from '../store/useStore';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const { searchQuery, setSearchQuery } = useStore();

  // If user is searching, show matched products across all categories
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    const filteredProducts = products.filter(
      (p) => p.name.toLowerCase().includes(query)
    );

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-6 border-rose-100">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
            <span>Resultados da busca por:</span>
            <span className="bg-gradient-to-r from-red-500 to-[#fa8072] bg-clip-text text-transparent">"{searchQuery}"</span>
          </h1>
          <button 
            onClick={() => setSearchQuery('')}
            className="text-sm font-medium text-stone-500 hover:text-[#fa8072] transition-colors"
          >
            Limpar busca
          </button>
        </div>
        <ProductList products={filteredProducts} />
      </motion.div>
    );
  }

  // Normal Home View
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.4 }}
      className="space-y-12"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-200 via-pink-100 to-orange-100 rounded-3xl p-8 sm:p-12 text-stone-800 shadow-xl overflow-hidden relative border border-rose-50">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-30 text-rose-300 transform rotate-12">
          <Heart size={300} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-red-500 to-[#fa8072] bg-clip-text text-transparent">
            Descubra o extraordinário.
          </h1>
          <p className="text-lg text-stone-600 font-medium mb-8">
            Encontre os melhores produtos das marcas que você ama com uma experiência de compra incrível.
          </p>
        </div>
      </section>

      {/* Trending Products */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold text-stone-800 mb-2">Destaques</h2>
            <p className="text-stone-500">Confira os itens mais procurados do momento.</p>
          </div>
        </div>
        <ProductList products={products.filter(p => p.featured)} />
      </section>

      {/* Categories Section */}
      <section>
        <div className="flex items-end justify-between mb-8 mt-16">
          <div>
            <h2 className="text-3xl font-extrabold text-stone-800 mb-2">Nossas Categorias</h2>
            <p className="text-stone-500">Explore nossa variedade de seções.</p>
          </div>
        </div>
        <CategoryList 
          categories={categories.map(cat => ({
            ...cat,
            productCount: products.filter(p => p.categoryId === cat.id).length
          }))} 
        />
      </section>
    </motion.div>
  );
};

export default Home;
