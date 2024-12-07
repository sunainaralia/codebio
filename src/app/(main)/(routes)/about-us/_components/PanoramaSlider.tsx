// components/SwiperSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image"
import upperCurve from '../../../../../../public/vectors/slider-curve.svg';

// Array of images
const images = [



"/aboutus/o4.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o4.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o3.png",
  "/aboutus/o3.png",
  "/aboutus/o4.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o4.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o3.png",
  "/aboutus/o3.png",
  "/aboutus/o4.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o4.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o3.png",
  "/aboutus/o3.png",
  "/aboutus/o4.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o4.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o3.png",
  "/aboutus/o3.png",
  "/aboutus/o4.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o4.jpg",
  "/aboutus/o6.jpg",
  "/aboutus/o5.jpg",
  "/aboutus/o3.png",
];

const PanoramaSlider = () => {
  return (
    <div id="panorama" className="relative">
        <Image width={100} height={100} className="w-screen absolute top-12 md:top-9 lg:top-7 left-0 z-10" src={upperCurve} alt="curve" />
        <Image width={100} height={100} className="w-screen absolute scale-110 bottom-12 md:bottom-9 lg:bottom-7 left-0 z-10 rotate-180" src={upperCurve} alt="curve" />
      <Swiper
        // effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        coverflowEffect={{
          rotate: 80,
          depth: -300,
          modifier: 0.2,
          scale: 1.2,
       
        }}
        breakpoints={{
        
            768: {
              slidesPerView: 4, // Tablet screens
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4, // Desktop screens
              spaceBetween: 20,
            },
          }}
  
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image width={664} height={702} src={image} className="w-full" alt={`Nature ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PanoramaSlider;
