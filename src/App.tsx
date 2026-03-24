import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CategoryView from './pages/CategoryView';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category/:id" element={<CategoryView />} />
          <Route path="*" element={
            <div className="py-20 text-center">
              <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
              <a href="/" className="text-primary hover:underline">Ir para Home</a>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
