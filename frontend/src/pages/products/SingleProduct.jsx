import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi"
import { useParams } from "react-router-dom"
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchProductByIdQuery } from '../../redux/features/products/productsApi';

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useFetchProductByIdQuery(id);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item))
  }

  // Default main image state
  const [mainImage, setMainImage] = useState(null);

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error happened while loading product info</div>

  // ✅ Use product.coverImage + dummy extra images for demo
  const productImages = [
    getImgUrl(product.coverImage),
    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Image Section */}
      <div className="flex flex-col items-center">
        {/* Big Image */}
        <div className="bg-gray-100 p-4 rounded-lg w-full flex items-center justify-center mb-6">
          <img
            src={mainImage || productImages[0]}
            alt={product.title}
            className="max-h-[450px] object-contain"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 flex-wrap justify-center">
          {productImages.slice(0, 4).map((img, index) => (
            <div
              key={index}
              className={`p-2 bg-gray-100 rounded-lg border cursor-pointer transition hover:scale-105 ${
                (mainImage || productImages[0]) === img ? "ring-2 ring-yellow-500" : ""
              }`}
              onClick={() => setMainImage(img)}
            >
              <img
                src={img}
                alt={`thumb-${index}`}
                className="w-20 h-20 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Info Section */}
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-2">
          <strong>Published:</strong> {new Date(product?.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2 capitalize">
          <strong>Category:</strong> {product?.category}
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Description:</strong> {product.description}
        </p>

        <button
          onClick={() => handleAddToCart(product)}
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-yellow-500 transition"
        >
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

export default SingleProduct
