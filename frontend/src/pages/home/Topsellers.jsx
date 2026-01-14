import React, { useEffect, useState } from 'react'
import ProductCard from '../products/ProductCard';
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';
const categories = ["Choose a genre", "gym equipment", "gym accessories", "sportswear","cardio equipment","nutrition"]
const Topsellers = () => {

    
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

    const {data: products = []} = useFetchAllProductsQuery();
    const filteredProducts = selectedCategory === "Choose a genre" ? products : products.filter(product => product.category === selectedCategory.toLowerCase())
    


    return (
        <div className='py-10'>
                 <h2 className='text-3xl font-semibold mb-6'>Top Products</h2>
            <div className='mb-8 flex items-center justify-between gap-4'>
                <div className='flex items-center gap-4'>
                    <select 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                            {
                                    categories.map((category ,index) => (
                                            <option key={index} value ={category}>{category}</option>
                                    ))
                            }
                    </select>
                </div>

                {/* Right side text / See all link aligned with the dropdown */}
                <div className='text-right'>
                    <Link to="/products" className='text-gray-700 font-medium hover:text-yellow-500'>See all</Link>
                </div>
            </div>
      <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    1180: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                   filteredProducts.length > 0 && filteredProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard  product={product} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>
    </div>
  )
}

export default Topsellers
