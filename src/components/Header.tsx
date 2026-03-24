import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, X } from 'lucide-react';
import { useStore } from '../store/useStore';

const Header: React.FC = () => {
  const { searchQuery, setSearchQuery } = useStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app we might route to a search page
      // Here we will just keep the query in the store and filter dynamically on home or category view
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-rose-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-2 group ${isSearchOpen ? 'max-[500px]:hidden' : ''}`}>
            <div className="bg-gradient-to-br from-pink-400 via-[#f5deb3] to-[#fa8072] text-white p-2.5 rounded-2xl group-hover:shadow-lg group-hover:shadow-pink-200 transition-all">
              <Heart size={24} fill="white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-rose-500">
              CAROL<span className="text-stone-800">STORE</span>
            </span>
          </Link>

          {/* Search bar (All Screens) */}
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
                
                {/* Desktop/Tablet Submit Button */}
                <button type="submit" className="absolute right-3 top-2.5 text-rose-300 group-focus-within:text-rose-400 hover:text-rose-500 transition-colors z-10 hidden min-[501px]:block">
                  <Search size={20} />
                </button>

                {/* Mobile Close Button (replaces search button on open) */}
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
