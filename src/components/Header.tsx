import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useStore } from '../store/useStore';

const Header: React.FC = () => {
  const { searchQuery, setSearchQuery } = useStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-rose-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          <Link to="/" className={`flex items-center gap-2 group ${isSearchOpen ? 'max-[500px]:hidden' : ''}`}>
            <img src="/assets/iconcarolstore.png" alt="Carol Store Logo" className="w-10 h-10 rounded-full object-cover group-hover:shadow-lg group-hover:shadow-rose-400 transition-all shadow-sm" />
            <span className="text-2xl font-black tracking-tighter text-rose-500">
              CAROL<span className="text-stone-800">STORE</span>
            </span>
          </Link>

          <div className={`${isSearchOpen ? 'flex max-[500px]:w-[calc(100%-2rem)] max-[500px]:left-4 max-[500px]:right-4' : 'hidden min-[501px]:flex w-48 sm:w-64 md:w-80 lg:w-full px-2 md:px-4 max-w-md z-10'} absolute right-4 md:right-8 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 z-10 transition-all`}>
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative rounded-full bg-rose-100 focus-within:bg-gradient-to-r focus-within:from-red-500 focus-within:to-[#fa8072] p-[2px] transition-all duration-300 group shadow-sm focus-within:shadow-rose-200">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-rose-50 text-stone-900 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:bg-white placeholder:text-stone-400"
                />
                
                <button type="submit" className="absolute right-3 top-2.5 text-rose-300 group-focus-within:text-rose-400 hover:text-rose-500 transition-colors z-10 hidden min-[501px]:block">
                  <Search size={20} />
                </button>

                <button 
                  type="button" 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-2.5 text-rose-300 hover:text-rose-500 transition-colors z-10 max-[500px]:block hidden"
                >
                  <X size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Mobile Magnifying Glass Toggle */}
            {!isSearchOpen && (
              <button 
                className="min-[501px]:hidden p-2 text-rose-400 hover:text-rose-500 transition-all z-20"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={24} />
              </button>
            )}
            {/* O menu hambúrguer foi removido conforme solicitado */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
