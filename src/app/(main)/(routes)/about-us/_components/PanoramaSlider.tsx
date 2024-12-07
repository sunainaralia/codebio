// components/SwiperSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

// Array of images
const images = [
//   "https://swiperjs.com/demos/images/nature-1.jpg",
//   "https://swiperjs.com/demos/images/nature-2.jpg",
//   "https://swiperjs.com/demos/images/nature-3.jpg",
//   "https://swiperjs.com/demos/images/nature-4.jpg",
//   "https://swiperjs.com/demos/images/nature-5.jpg",
//   "https://swiperjs.com/demos/images/nature-6.jpg",
//   "https://swiperjs.com/demos/images/nature-7.jpg",
//   "https://swiperjs.com/demos/images/nature-8.jpg",
//   "https://swiperjs.com/demos/images/nature-9.jpg",


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
    <div id="panorama" className="">
      <Swiper
        effect={"coverflow"}
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
