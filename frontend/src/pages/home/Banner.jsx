import React from 'react'
import bannerImg from "../../assets/banner.png"


const Banner = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
         <div className='md:w-1/2 w-full flex items-center md:justify-end'>
          <img src={bannerImg} alt="" className='w-full h-auto max-w-md object-contain' />
        </div>
        
        <div className='md:w-1/2 w-full'>
          <h1 className='md:text-5xl text-2xl font-medium mb-7 max-w-lg leading-tight'>"Transform Your Fitness Journey with Our State-of-the-Art Treadmills!"</h1>
            <p className='mb-10'>Discover the perfect treadmill for your home or gym, designed to cater to every fitness level. Our treadmills combine cutting-edge technology, durable construction, and sleek designs to help you achieve your fitness goals.</p>

            <button className='btn-primary'>Subscribe</button>
        </div>

       
    </div>
    </>
  )
}

export default Banner
