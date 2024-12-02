"use client";
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
    <div id="oursolution" className="pb-12 4xl:pb-24 pt-[88px] md:pt-24 lg:pt-[150px] 2xl:pb-[150px] 4xl:pt-0 4xl:mt-[354px] 3xl:mt-[120px] ">
      <div className="flex gap-4 items-center mb-5 md:mb-[70px]">
        <Image
          src={"/vectors/Union.svg"}
          alt=""
          height={30}
          width={30}
          className="hidden md:block 4xl:h-[30px] 4xl:w-[30px] lg:h-[24px] lg:w-[24px]"
        />
        <h3 className="text-lg font-normal text-[#525252] sm:text-3xl lg:text-[28px] 4xl:text-[42px]">
          Our Solutions
        </h3>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1.0}
        spaceBetween={0}
        breakpoints={{
          768: { slidesPerView: 2.0, spaceBetween: 0 }, 
          1280: { slidesPerView: 3.1, spaceBetween: 30 }, 
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
              className="!h-full "
            >
              <div className="md:px-5 bg-white md:border-r-[0.5px] border-y-0 border-[#dbdbdb] text-center cursor-pointer lg:px-10 flex flex-col justify-bet ween hover:bg-primary-natural hover:text-primary-white group duration-300 snap-start hover:rounded-[20px] md:p-10 max-md:hover:p-2 pb-14 ourworkcard">
                <div className=" flex flex-col justify-between">
                  {" "}
                  <div className="">
                    <h3 className="text-[34px] lg:text-4xl 4xl:text-6xl  text-black font-medium mb-3 text-wrap line-clamp-2">
                      {work.title}          
                    </h3>
                    <p className="text-lg sm:text-xl  4xl:text-3xl text-gray-600 text-wrap mb-3 mt-5 leading-6 4xl:leading-10  line-clamp-3 2xl:line-clamp-4">
                      {work.description}
                    </p>
                  </div>
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={100}
                    height={100}
                    className="w-full mx-auto lg:w-full h-auto mb-4 rounded-lg lg:mt-10"
                  />
                </div>
                {/* <Image
                    src={work.image}
                    alt={work.title}
                    width={100}
                    height={100}
                    className="w-full mx-auto hidden lg:block lg:w-full h-auto mb-4 rounded-lg"
                  /> */}

                <div className="3xl:flex flex-wrap gap-2 mt-4 lg:mt-10  hidden ">
                  {work.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 h-12 lg:px-5 py-1 lg:pb-2.5 lg:pt-2 border-2 rounded-full bg-gray-100 lg:text-[16px] 4xl:text-xl text-[black] group-hover:text-primary-white font-medium group-hover:border-primary-white leading-[27px]"
                    >
                      {tag}
                    </span>
                  ))}
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
