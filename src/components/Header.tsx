import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Heart } from 'lucide-react';
import { useStore } from '../store/useStore';

const Header: React.FC = () => {
  const { searchQuery, setSearchQuery } = useStore();

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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-pink-400 via-[#f5deb3] to-[#fa8072] text-white p-2.5 rounded-2xl group-hover:shadow-lg group-hover:shadow-pink-200 transition-all">
              <Heart size={24} fill="white" />
            </div>
            <span className="font-bold text-2xl tracking-tight font-serif bg-gradient-to-r from-red-500 to-[#fa8072] bg-clip-text text-transparent">
              CarolStore
            </span>
          </Link>

          {/* Search bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative rounded-full bg-rose-100 focus-within:bg-gradient-to-r focus-within:from-red-500 focus-within:to-[#fa8072] p-[2px] transition-all duration-300 group shadow-sm focus-within:shadow-rose-200">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-rose-50 text-stone-900 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:bg-white placeholder:text-stone-400"
                />
                <button type="submit" className="absolute right-3 top-2.5 text-rose-300 group-focus-within:text-rose-400 hover:text-rose-500 transition-colors z-10">
                  <Search size={20} />
                </button>
              </div>
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            
            <button className="md:hidden p-2 text-stone-400 hover:text-stone-700 hover:bg-gradient-to-r hover:from-rose-200 hover:via-pink-100 hover:to-orange-100 rounded-full transition-all">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
