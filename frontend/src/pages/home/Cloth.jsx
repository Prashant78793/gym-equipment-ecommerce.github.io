import React, { useEffect, useState } from 'react'
import ClothCard from '../cloths/ClothCard'
import { Link } from 'react-router-dom'

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

  const displayedProducts = products.slice(0, 3)

  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold mb-6'>Clothes</h2>

      {loading ? (
        <div className='py-10 text-center'>Loading...</div>
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {displayedProducts.map(p => (
              <div key={p._id} className='h-full'>
                <ClothCard product={{ ...p, _id: p._id, coverImage: p.coverImage, newPrice: p.newPrice, oldPrice: p.oldPrice }} />
              </div>
            ))}
          </div>
          {products.length > 3 && (
            <div className='text-center mt-8'>
              <Link to="/cloths">
                <button className='bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors'>
                  Show All
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Cloth
