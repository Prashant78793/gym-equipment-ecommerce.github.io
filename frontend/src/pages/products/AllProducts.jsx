import React, { useMemo, useState } from 'react'
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi'
import ProductCard from './ProductCard'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const PAGE_SIZE = 9 // 3 columns x 3 rows
const categories = ["Choose a genre", "gym equipment", "gym accessories", "sportswear","cardio equipment","nutrition"]

const AllProducts = () => {
  const navigate = useNavigate()
  const { data: products = [], isLoading } = useFetchAllProductsQuery()
  const [page, setPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('Choose a genre')

  const filtered = useMemo(() => {
    return selectedCategory === 'Choose a genre' ? products : products.filter(p => p.category === selectedCategory.toLowerCase())
  }, [products, selectedCategory])

  const totalPages = useMemo(() => Math.max(1, Math.ceil(filtered.length / PAGE_SIZE)), [filtered])

  const current = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return filtered.slice(start, start + PAGE_SIZE)
  }, [filtered, page])

  if (isLoading) return <div className="py-10 text-center">Loading...</div>

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-md hover:bg-gray-100">
            <FiArrowLeft className="text-lg" />
          </button>
          <h2 className="text-3xl font-semibold">All Products</h2>
        </div>

        <div className="flex items-center gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => { setSelectedCategory(e.target.value); setPage(1); }}
            className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          >
            {categories.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>

          <div className="text-sm text-gray-600">Showing {filtered.length} products</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {current.map((product) => (
          <div key={product._id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <button
          className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-yellow-400' : 'bg-gray-100'}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default AllProducts
