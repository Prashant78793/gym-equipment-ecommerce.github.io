import React, { useEffect, useState } from 'react'
import ProductCard from '../products/ProductCard'

const Cloth = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

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

  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold mb-6'>Clothes</h2>

      {loading ? (
        <div className='py-10 text-center'>Loading...</div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {products.map(p => (
            <div key={p._id} className='h-full'>
              <ProductCard product={{ ...p, _id: p._id, coverImage: p.coverImage, newPrice: p.newPrice, oldPrice: p.oldPrice }} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Cloth
