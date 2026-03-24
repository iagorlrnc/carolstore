import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-50 text-stone-900 font-sans">
      <Header />
      <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-rose-100 py-8 text-center text-stone-500 text-sm">
        <p>&copy; {new Date().getFullYear()} CarolStore. Nossos direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;
