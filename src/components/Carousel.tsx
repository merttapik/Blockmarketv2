import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore,{EffectCoverflow, Pagination} from "swiper";

type Props = {}

function Carousel({}: Props) {
    SwiperCore.use([EffectCoverflow, Pagination]);
  return (
    <div className='h-full ' >
   <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/blockmarket1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/blockmarket2.png" alt="" />
           
        </SwiperSlide>
        <SwiperSlide>
          <img src="/blockmarket3.png" alt="" />
        </SwiperSlide>
      
      </Swiper>
</div>
  )
}

export default Carousel