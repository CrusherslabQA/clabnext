// components/SimpleSwiper.js
import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

const SimpleSwiper = ({ children }) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      {React.Children.map(children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SimpleSwiper;
