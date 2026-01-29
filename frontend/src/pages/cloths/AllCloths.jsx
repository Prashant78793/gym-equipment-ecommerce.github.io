import React, { useEffect, useState } from 'react'
import ClothCard from './ClothCard'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const PAGE_SIZE = 9

const AllCloths = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    let mounted = true
    fetch('/cloth-products.json')
      .then(res => res.json())
      .then(data => {
        if (mounted) setProducts(data)
      })
      .catch(() => {})
      .finally(() => mounted && setLoading(false))

    return () => { mounted = false }
  }, [])

  const totalPages = Math.max(1, Math.ceil(products.length / PAGE_SIZE))

  const current = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  if (loading) return <div className="py-10 text-center">Loading...</div>

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 rounded-md hover:bg-gray-100">
            <FiArrowLeft className="text-lg" />
          </button>
          <h2 className="text-3xl font-semibold">All Cloths</h2>
        </div>

        <div className="text-sm text-gray-600">Showing {products.length} cloths</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {current.map((product) => (
          <div key={product._id} className="h-full">
            <ClothCard product={product} />
          </div>
        ))}
      </div>

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

export default AllCloths