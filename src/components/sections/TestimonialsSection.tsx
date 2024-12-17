/* eslint-disable react/display-name*/
"use client";

import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Rating from "../Rating";
import ArrowIconButton from "../ArrowIconButton";
import AnimatedButton from "../AnimatedButton";
import Link from "next/link";

interface TestimonialsardProps {
  name: string;
  description: string;
  rating: string;
  inverted: boolean;
  image: string;
}

const testimonials = [
  {
    name: "Digital Marketer, The Revolver Club",
    description: `"They understand the requirements
    first before working on anything,
    and that's something that they
    do well."`,
    image: "/testimonials/Ellipse1.png",
    rating: "4.0",
  },
  {
    name: "Founder, Niara Healthcare Pvt. Ltd.",
    desctiption: `"They did a fantastic job and catered to
    all my requirements."`,
    image: "/testimonials/Ellipse2.png",
    rating: "5.0",
  },
  {
    name: "Founder & Managing Director, Essens Wellness",
    desctiption: `"Overall, their team's work process and
    capability are impressive."`,
    image: "/testimonials/Ellipse3.png",
    rating: "5.0",
  },
  {
    name: "Marketing Director, Magicoin Investments",
    desctiption: `"Codebiosis redesigned our website, and the result is modern, user-friendly, and aligned with our brand. We've seen a significant increase in customer engagement!"`,
    image: "/testimonials/Ellipse4.png",
    rating: "4.0",
  },
  {
    name: "Marketing Director, TwistEats",
    desctiption: `"The team transformed our outdated site into a fast, responsive, and visually stunning platform. Their expertise and communication were top-notch. Highly recommended!"`,
    image: "/testimonials/Ellipse5.png",
    rating: "5.0",
  },
  {
    name: "Business Development Manager, Zen Zone",
    desctiption: `"We needed a robust e-commerce solution, and Codebiosis delivered. The intuitive, secure site has boosted our online sales. Their attention to detail was outstanding."`,
    image: "/testimonials/Ellipse6.png",
    rating: "5.0",
  },
  {
    name: "Marketing Director, Techwiz Solutions Co. Ltd.",
    desctiption: `"Codebiosis crafted a digital marketing strategy that elevated our business. Their SEO and social media campaigns have driven traffic and boosted brand visibility."`,
    image: "/testimonials/Ellipse7.png",
    rating: "4.0",
  },
  {
    name: "Development Manager, SparkPlug Interactive",
    desctiption: `"The UI/UX design services were amazing. Codebiosis created a seamless user experience for our app, resulting in increased retention and satisfaction."`,
    image: "/testimonials/Ellipse8.png",
    rating: "5.0",
  },
  {
    name: "Relations Manager, RealVoyage.inc",
    desctiption: `"Our search engine rankings improved dramatically with Codebiosis. Their SEO strategies brought a significant increase in organic traffic and leads."`,
    image: "/testimonials/Ellipse9.png",
    rating: "5.0",
  },
  {
    name: "Manager, Bharatize Solutions ",
    desctiption: `"Codebiosis brought our app idea to life, providing innovative solutions and a fantastic final product. The development process was smooth and efficient."`,
    image: "/testimonials/Ellipse10.png",
    rating: "4.0",
  },
  {
    name: "Marketing Director, Kaleidoscope Studio",
    desctiption: `"Codebiosis has been crucial in our digital transformation, handling web development and marketing with professionalism and expertise. Our online presence is stronger than ever."`,
    image: "/testimonials/Ellipse11.png",
    rating: "5.0",
  },
  {
    name: "CEO, BeautyBloc",
    desctiption: `"The Codebiosis team is professional and responsive. They understood our business needs and delivered impactful solutions. We’re thrilled with their work."`,
    image: "/testimonials/Ellipse12.png",
    rating: "5.0",
  },
];

function TestimonialsSection() {
  const sliderRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div id="testimonials" className="pb-10  lg:flex flex-col ">
      <div className="lg:flex flex-row justify-between  mb-10 items-center">
        <div className="flex gap-4 items-center">
          <Image
            alt=""
            src={"/vectors/Union.svg"}
            height={30}
            width={30}
            className="hidden lg:inline"
          />
          <h3 className="text-lg font-normal text-[#525252] sm:text-xl lg:text-[28px] 4xl:text-[42px] ">
            Testimonials
          </h3>
        </div>
        <h2 className="text-[28px] lg:text-[22px]  4xl:text-5xl min-[1800px]:text-6xl text-[#2B2B2B] font-bold mt-2.5 sm:mt-5 lg:mt-0">
          Their curiosity was piqued right from the start !
        </h2>
      </div>
      <Separator className="h-px w-full bg-[#525252] my-4" />
      {/* <div className='hidden md:flex justify-around flex-row py-14 gap-7 h-[200px]'>
        <div className='h-full w-full flex flex-col justify-center items-center col-span-1'>
          <p>
            It is no surprise that CodeBiosis builds some of the most elegant
            and beautiful e-commerce experiences. Using their custom solutions,
            you’ll be able to elevate your brand while giving your customers a
            tailored experience they’ll love.
          </p>
        </div>
        <Separator className='hidden md:block h-full w-px bg-[#D8D8D8]' />
        <div className='h-full w-full flex flex-col justify-center items-center col-span-1 relative'>
          <p>
            Rather than just focusing on the deliverable, the CodeBiosis team to
            the outcome. The team collaborated on the project remotely, which
            made the whole process easy and stress-free. CodeBiosis is a great
            team to work with.
          </p>
        </div>
      </div> */}
      <Separator className="hidden lg:block h-px w-full bg-transparent my-4" />
      <div className="py-8 pt-1">
        <div className="flex flex-row lg:justify-end items-center gap-6 2xl:translate-y-14 lg:mb-5 2xl:mb-0 relative z-10 ">
          <ArrowIconButton
            height={70}
            width={70}
            onClick={handlePrev}
            className={`w-[34px] lg:!w-[70px] h-[34px] lg:!h-[70px] lg:p-2 scale-75 4xl:scale-100  ${
              currentSlide === 0 ? "opacity-50" : ""
            }`}
          />
          <ArrowIconButton
            height={70}
            width={70}
            invertArrow
            onClick={handleNext}
            className={`w-[34px] lg:!w-[70px] h-[34px] lg:!h-[70px] lg:p-2 scale-75  4xl:scale-100
              ${
                currentSlide === testimonials.length - 1 - 2 ? "opacity-50" : ""
              }`}
          />
        </div>
        <div className="max-sm:w-full 2xl:w-[90%]">
          <Swiper 
         
            ref={sliderRef}
            onSlideChange={(e) => {
              setCurrentSlide(e.activeIndex);
            }}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 }, // For tablets
              1280: { slidesPerView: 3, spaceBetween: 30 }, // For desktops
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} >
                <TestimonialsSection.TestimonialCard
                  description={item.description}
                  image={item.image}
                  name={item.name}  
                  rating={item.rating}
                  inverted={index % 2 == 0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex lg:hidden justify-center items-center w-full pb-3 max-sm:mt-8 ">
          <Link href="https://clutch.co/profile/codebiosis-private#highlights">
          <AnimatedButton>Review all on Clutch</AnimatedButton></Link>
        </div>

        {/* <div className='block md:hidden'>
          {testimonials.map((item, index) => (
            <TestimonialsSection.TestimonialCard
              description={item.description}
              image={item.image}
              name={item.name}
              rating={item.rating}
              inverted={index % 2 == 0}
              key={index}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}

TestimonialsSection.TestimonialCard = ({
  name,
  description,
  rating,
  image,
  inverted,
}: TestimonialsardProps) => {
  return (
    <>
      <div className="md:flex flex-col justify-start items-start gap-6 md:py-0 !h-full">
        <Image
          src={"/vectors/review_appos.svg"}
          alt={""}
          width={50}
          height={40}
          className={` sm:w-[40px] xl:w-[90px]   ${
            inverted ? "rotate-180" : ""
          } hidden lg:block`}
        />

        <div className="flex flex-row md:justify-center items-start gap-3 4xl:gap-6 mb-10 sm:mb-16 md:mb-0 mt-10 4xl:mt-24">
          <Image
            src={"/vectors/review_appos.svg"}
            alt={""}
            width={40}
            height={40}
            className={`rotate-180 hidden  w-[24px] 4xl:w-[40px] `}
          />
          <div className="hidden md:block">
            <Avatar>
              <AvatarImage src={image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <p className="md:min-h-[8em] xl:h-[8em] 2xl:h-[7em] text-[#2B2B2B] text-base md:text-xl lg:text-[20px] 4xl:text-[26px] font-normal overflow-hidden line-clamp-6">
            {description}
          </p>
          <Image
            src={"/vectors/review_appos.svg"}
            alt={""}
            width={50}
            height={40}
            className={`sm:w-[40px] xl:w-[90px] ${
              inverted ? "rotate-180" : ""
            } lg:hidden block`}
          />
        </div>
        <div className="div flex justify-between items-center md:block w-full ">
          <div className="block md:hidden ">
            <Avatar>
              <AvatarImage src={image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="block w-full min-h-20">
            <h2 className="text-base 4xl:text-[22px] font-bold 4xl:h-[3.5rem] lg:h-[2.5rem] md:text-start text-end">
              {name}
            </h2>
            <Separator className="hidden md:block h-px w-[90%] bg-primary-natural 4xl:my-4 my-2" />
            <div className="flex flex-row gap-3 items-center md:justify-start justify-end">
              <h2 className="text-2xl lg:text-3xl text-[#2B2B2B] font-[900] ">
                {rating}
              </h2>
              <Rating value={rating} />
            </div>
          </div>
        </div>
        <Separator className="md:hidden block h-px w-full bg-primary-natural my-4" />
        <Separator className=" h-full w-px bg-primary-natural my-4" />
      </div>
      {/* done */}
    </>
  );
};

export default TestimonialsSection;
