import React from "react"
import { useParams, Link } from "react-router-dom"
import ProductList from "../components/ProductList"
import { categories, products } from "../data/mockData"
import { useStore } from "../store/useStore"
import { ChevronRight, Home as HomeIcon } from "lucide-react"
import { motion } from "framer-motion"

const CategoryView: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { searchQuery } = useStore()

  const category = categories.find((c) => c.id === id)

  if (!category) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">
          Categoria não encontrada
        </h2>
        <Link to="/" className="text-primary hover:underline font-medium">
          Voltar para o início
        </Link>
      </div>
    )
  }

  const categoryProducts = products.filter((p) => p.categoryId === id)
  const displayedProducts = searchQuery.trim()
    ? categoryProducts.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : categoryProducts

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-4"
    >
      <nav className="flex items-center text-sm font-medium text-stone-500 mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Link
          to="/"
          state={{ restoreHomeScroll: true }}
          className="group flex items-center gap-1 transition-all"
        >
          <HomeIcon
            size={16}
            className="group-hover:text-red-500 transition-colors"
          />
          <span className="group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-[#fa8072] group-hover:bg-clip-text group-hover:text-transparent transition-all">
            Início
          </span>
        </Link>
        <ChevronRight size={16} className="mx-2 flex-shrink-0 text-stone-300" />
        <span className="text-stone-800">{category.name}</span>
      </nav>

      <div className="flex items-end justify-between mb-8 border-b border-rose-100 pb-6 w-full">
        <div className="w-full">
          <h1 className="text-3xl font-extrabold text-stone-800 mb-2">
            {category.name}
          </h1>
          <p className="text-stone-500 mb-4 font-medium">
            {displayedProducts.length}{" "}
            {displayedProducts.length === 1
              ? "produto encontrado"
              : "produtos encontrados"}
          </p>
          {category.description && (
            <div className="p-5 bg-white/40 backdrop-blur-md rounded-2xl w-full border border-white/60 shadow-sm">
              <p className="text-stone-700 leading-relaxed text-sm md:text-base relative z-10">
                {category.description}
              </p>
            </div>
          )}
        </div>
      </div>

      <ProductList products={displayedProducts} />
    </motion.div>
  )
}

export default CategoryView
