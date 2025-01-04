import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import cloth1 from "../../assets/cloth/cloth-1.png"
import cloth2 from "../../assets/cloth/cloth-2.png"
import cloth3 from "../../assets/cloth/cloth-3.png"

import { Link } from 'react-router-dom';

const cloth = [
    {
        "id": 1,
        "title": "Breathable Workout T-Shirt for Men",
        "description": "This high-performance T-shirt is made from moisture-wicking fabric, perfect for intense workouts and staying cool during exercise.",
        "image": cloth1
    },
    {
        "id": 2,
        "title": "Women's Compression Leggings",
        "description": "These stylish compression leggings provide support and improve blood circulation, making them ideal for yoga, running, or weight training.",
        "image": cloth2
    },
    {
        "id": 3,
        "title": "Lightweight Gym Shorts for Men",
        "description": "Comfortable and breathable gym shorts designed for mobility and flexibility, perfect for running, cycling, and weightlifting.",
        "image": cloth3
    },
    ]

const Cloth = () => {
  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold mb-6'>Clothes</h2>
    
    
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
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            cloth.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='flex flex-col sm:flex-row sm:justify-between items-center gap-12'>
                        {/* content */}
                        <div className='py-4'>
                            <Link to="/">
                                 <h3 className='text-lg font-bold hover:text-blue-500 mb-4'>{item.title}</h3>
                            </Link>
                            <div className='w-12 h-[4px] bg-primary mb-5'></div>
                            <p className='text-md text-gray-600'>{item.description}</p>
                        </div>

                        <div className='flex-shrink-0'>
                            <img src={item.image} alt=""  className='w-full object-cover'/>
                        </div>
                    </div>
                </SwiperSlide>
            ) )
        }
      </Swiper>
      </div>
  )
}

export default Cloth
