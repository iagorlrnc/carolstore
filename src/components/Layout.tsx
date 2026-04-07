import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-rose-50 text-stone-900 font-sans">
      <Header />
      <main className="flex-grow pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-rose-100 pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Brand Info */}
            <div className="max-w-sm">
              <Link to="/" className="text-2xl font-black tracking-tighter text-rose-500 mb-4 block">
                CAROL<span className="text-stone-800">STORE</span>
              </Link>
              <p className="text-stone-500 text-sm leading-relaxed mb-6">
                Descubra o extraordinário em cada detalhe. Produtos selecionados com amor para você viver a melhor experiência de compra.
              </p>
            </div>

            {/* Contato */}
            <div className="flex flex-col md:items-center">
              <div>
                <h3 className="font-bold text-stone-800 mb-5">Contato</h3>
                <ul className="space-y-4 text-sm text-stone-500">
                  <li className="flex items-center gap-3 hover:text-rose-500 transition-colors">
                    <Phone size={18} className="text-rose-400 shrink-0" />
                    <span>(63) 99264-7445</span>
                  </li>
                  {/*email */}
                  {/* <li className="flex items-center gap-3 hover:text-rose-500 transition-colors">
                    <Mail size={18} className="text-rose-400 shrink-0" />
                    <span></span>
                  </li> */}
                </ul>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="flex flex-col md:items-center">
              <div>
                <h3 className="font-bold text-stone-800 mb-5">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-rose-50 p-2.5 rounded-full text-rose-500 hover:bg-rose-500 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <Instagram size={20} />
                  </a>
                  <a href="https://wa.me/5563992647445" target="_blank" rel="noopener noreferrer" className="bg-green-50 p-2.5 rounded-full text-green-500 hover:bg-green-500 hover:text-white transition-all transform hover:scale-110 shadow-sm">
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="border-t border-rose-100 pt-8 flex justify-center items-center gap-4 text-sm text-stone-400 text-center">
            <p>&copy; {new Date().getFullYear()} CarolStore. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5563992647445?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+produtos+disponiveis+na+loja."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center cursor-pointer"
        aria-label="Falar no WhatsApp com descontos exclusivos"
      >
        <MessageCircle size={30} />
      </a>
    </div>
  );
};

export default Layout;
