


'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { ourWorkData } from "./ourWork";

const OurServiceSection = () => {
  return (
    <div id="oursolution" className="pb-12 lg:pb-24 pt-2.5 md:pt-24">
      <div className="flex gap-4 items-center mb-5 md:mb-[70px]">
        <Image
          src={"/vectors/Union.svg"}
          alt=""
          height={30}
          width={30}
          className="hidden md:block"
        />
        <h3 className="text-lg font-normal text-[#525252] sm:text-3xl lg:text-[42px]">
          Our Solutions
        </h3>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
      
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 20 }, // For tablets
          1280: { slidesPerView: 3, spaceBetween: 30 }, // For desktops
        }}
        className="w-full"
      >
        {ourWorkData.map((work, index) => (
          <SwiperSlide key={index}>
            <Link
              href="/services"
              target="_blank"
              key={index}
              passHref
              className=""
            >
              <div className="md:px-5 bg-white md:border-r-[0.5px] border-y-0 border-[#dbdbdb] text-center cursor-pointer lg:px-10 flex flex-col justify-between hover:bg-primary-natural hover:text-primary-white group duration-300 snap-start hover:rounded-[20px]  md:p-10 max-md:hover:p-2 pb-14">
                <div className="min-h-[350px">
                  <h3 className="text-[34px] lg:text-4xl 2xl:text-6xl text-black font-medium mb-3 text-wrap line-clamp-2">
                    {work.title}
                  </h3>
                  <p className="text-lg sm:text-xl lg:text-3xl text-gray-600 text-wrap mb-3 mt-5 leading-6 lg:leading-10  line-clamp-3 2xl:line-clamp-5">
                    {work.description}
                  </p>
                </div>
                <div className="lg:mt-10 w-full">
                  {/* <Image
                    src={work.image}
                    alt={work.title}
                    width={100}
                    height={100}
                    className="w-full mx-auto hidden lg:block lg:w-full h-auto mb-4 rounded-lg"
                  /> */}
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={100}
                    height={100}
                    className="w-full mx-auto lg:w-full h-auto mb-4 rounded-lg"
                  />
                  <div className="flex flex-wrap gap-2 mt-4 md:mt-10">
                    {work.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 border rounded-full bg-gray-100 text-xs lg:text-xl text-[black] group-hover:text-primary-white group-hover:border-primary-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurServiceSection;

