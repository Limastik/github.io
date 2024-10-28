import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import slide1 from './assets/slide-1.jpg';
import slide2 from './assets/slide-2.jpg';
import slide3 from './assets/slide-3.png';

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={slide1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
