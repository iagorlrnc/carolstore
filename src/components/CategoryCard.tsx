import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import type { Category } from "../types"

interface CategoryCardProps {
  category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const handleOpenCategory = () => {
    sessionStorage.setItem("homeScrollY", String(window.scrollY))
  }

  return (
    <Link to={`/category/${category.id}`} onClick={handleOpenCategory}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300 bg-white border border-rose-100 aspect-[4/3] sm:aspect-square"
      >
        <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />

        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent z-20 flex flex-col justify-end p-3 sm:p-4 md:p-6">
          <h3 className="text-white font-bold text-base sm:text-xl md:text-2xl mb-0.5 sm:mb-1 truncate drop-shadow-md">
            {category.name}
          </h3>
          <p className="text-rose-100 text-xs sm:text-sm font-medium opacity-100 md:opacity-0 group-hover:opacity-100 transform md:translate-y-2 group-hover:translate-y-0 transition-all duration-300 drop-shadow-md">
            {category.productCount}{" "}
            {category.productCount === 1 ? "Produto" : "Produtos"} &rarr;
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

export default CategoryCard
