import React from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import { getImgUrl } from '../../utils/getImgUrl'

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/cart/cartSlice'



const ClothCard = ({product}) => {
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  const imageSrc = React.useMemo(() => {
    const img = product?.coverImage || ''
    if (!img) return ''
    if (typeof img === 'string' && (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('/')) ) {
      return img
    }
    try {
      return getImgUrl(img)
    } catch (e) {
      return img
    }
  }, [product])
  return (
    <div className=" rounded-lg transition-shadow duration-300">
  <div
    className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
  >
    <div className="sm:h-72 h-48 sm:flex-shrink-0 border rounded-md overflow-hidden">
      <Link to = {`/cloths/${product._id}`}>
        <img
          src={imageSrc}
          alt={product?.title || product?.tittle || ''}
          className="w-full h-full object-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
        />
      </Link>
    </div>

    <div>
      <Link to={`/cloths/${product._id}`}>
        <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">{product?.title || product?.tittle}</h3>
      </Link>
      <p className="text-gray-600 mb-5">{product?.description ? (product.description.length > 80 ? `${product.description.slice(0, 80)}...` : product.description) : ''}</p>
      <p className="font-medium mb-5">
        ${product?.newPrice} <span className="line-through font-normal ml-2">$ {product?.oldPrice}</span>
      </p>
      <button
      onClick={() => handleAddToCart(product)}
      className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
        <FiShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</div>
  )
}

export default ClothCard