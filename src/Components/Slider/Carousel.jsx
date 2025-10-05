"use client"
 
import React, { useRef, useState } from 'react';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import sleep from "@/lib/Sleep/Sleeper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SliderCarousel=()=>{
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const data=[
    {name:"img-1",img:"/Img/Slider/1.webp",id:1},
    {name:"img-2",img:"/Img/Slider/2.webp",id:2},
    {name:"img3",img:"/Img/Slider/3.webp",id:3},
  ]
  return(
<div className="py-5 w-11/12 overflow-hidden ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[150px]  lg:h-[250px] rounded-xl shadow-md shadow-gray-400"
      >
 
        {data.map((items,index)=><SwiperSlide> <Image
      src={items.img}
      width={500}
      height={500}
      alt="Picture of the author"
      className="w-full"
    /></SwiperSlide>)}
        <div className="hidden lg:block">
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} >
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        </div>
      </Swiper>
    </div>
  )
}

export default SliderCarousel