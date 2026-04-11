import React, { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag } from "lucide-react"
import type { Product } from "../types"
import { categories } from "../data/mockData"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = "0"
      document.body.style.right = "0"
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
      document.body.dataset.scrollY = scrollY.toString()
    } else {
      const scrollY = document.body.dataset.scrollY
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""
      document.body.style.overflow = ""

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY))
        delete document.body.dataset.scrollY
      }
    }

    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.left = ""
      document.body.style.right = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const category = categories.find((c) => c.id === product.categoryId)

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 50 }}
            className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[85vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full text-stone-500 hover:text-stone-800 hover:bg-white transition-colors shadow-sm"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <div className="w-full md:w-[45%] lg:w-1/2 h-[35vh] min-h-[200px] sm:min-h-[300px] md:h-auto md:min-h-0 bg-rose-50 relative flex-shrink-0">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 md:p-8 flex flex-col w-full md:w-[55%] lg:w-1/2 overflow-y-auto flex-1 bg-white relative">
              <div className="mb-2">
                <span className="text-[10px] md:text-xs font-bold text-rose-500 uppercase tracking-widest bg-rose-50 px-2.5 py-1 rounded-md">
                  {category?.name}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-800 mb-2 leading-tight">
                {product.name}
              </h2>
              <div className="flex items-center gap-1 mb-4">
                <span className="bg-rose-100 text-rose-600 px-2 py-0.5 rounded textxs sm:text-sm font-bold flex items-center gap-1">
                  ♥ {product.rating || "4.5"}
                </span>
              </div>

              <div className="mb-6 pb-4 border-b border-stone-100">
                <div className="mb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-500 to-[#fa8072] bg-clip-text text-transparent">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </span>
                </div>
                <a
                  href={product.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-rose-400 to-[#fa8072] hover:from-rose-500 hover:to-red-500 text-white py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-base sm:text-lg transition-transform hover:scale-105 shadow-xl shadow-rose-200/50"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Comprar agora</span>
                </a>
              </div>

              <div className="space-y-4 mb-6 flex-grow">
                {product.description && (
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                      Sobre o Produto
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                )}
                {category?.description && (
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      Linha {category.name}
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed whitespace-pre-line">
                      {category.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProductModal
