import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import carousel1 from '../Assets/carousel1.jpeg'
import carousel2 from '../Assets/carousel2.jpeg'
import carousel3 from '../Assets/carousel3.jpeg'
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
  <>
    {/* carousel */}
<div className=' h-fit bg-cover bg-center bg-no-repeat  '>

      
<Swiper
  spaceBetween={2}
  slidesPerView={1}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>

  <SwiperSlide>
<div className='relative'>

<div className='absolute right-12 px-12 mx-12 top-11'>  
<div className='flex flex-col flex-wrap items-center justify-start  text-start'>
   
    {/* Heading */}
        <div className='flex items-center justify-start gap-2 container '>
            
        <div className='uppercase w-10 h-1 bg-white'></div>
        <div className='uppercase '>New trend</div>
        </div>

        {/* Title */}

    <div className=' '>
    <h1 className='text-[60px] font-light uppercase leading-[1.1] mb-2 mt-2'>Summar sale stylish
    <br />
    <span className='uppercase font-semibold'>
        mens
    </span>
    </h1>
    <Link to={'/'}
    className='upercase self-start font-semibold  border-b-2 border-stone-800 uppercase'>
        discover more
    </Link>
    </div>

</div>
</div>


    <div className=''>

    <img src={carousel1} alt="" className='object-cover bg-center bg-no-repeat h-[500px] w-full' />
    </div>
    </div>
    </SwiperSlide>

  <SwiperSlide>
    <div>
    <img src={carousel3} alt="" className='object-cover bg-center bg-no-repeat h-[500px] w-full' />

    </div>
    </SwiperSlide>
  <SwiperSlide>
    <div>
    <img src={carousel2} alt="" className='  bg-contain  h-[500px] w-full' />
    </div>
        
</SwiperSlide>


</Swiper>
</div>
  </>
  )
}

export default Carousel