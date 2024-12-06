"use client";

import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Rating from "@/components/Rating";
import ArrowIconButton from "@/components/ArrowIconButton";
import Marquee from "react-fast-marquee";
import { clientLogos } from "@/components/data/images";

import galgal from "../../../../../../public/Home_Page/homepage_images/our-client-logo/galgal-img.svg";
import house from "../../../../../../public/Home_Page/homepage_images/our-client-logo/almond house.svg";
import axisbank from "../../../../../../public/Home_Page/homepage_images/our-client-logo/axis bank.svg";
import bansiwala from "../../../../../../public/Home_Page/homepage_images/our-client-logo/bansiwala.svg";
import actifiber from "../../../../../../public/Home_Page/homepage_images/our-client-logo/actifiber.svg";
import bsui from "../../../../../../public/Home_Page/homepage_images/our-client-logo/bsui.svg";
import budun from "../../../../../../public/Home_Page/homepage_images/our-client-logo/budun.svg";
import client from "../../../../../../public/Home_Page/homepage_images/our-client-logo/clint-img.svg";
import dular from "../../../../../../public/Home_Page/homepage_images/our-client-logo/dulaar.svg";
import dvai from "../../../../../../public/Home_Page/homepage_images/our-client-logo/dvai.svg";
import evoFood from "../../../../../../public/Home_Page/homepage_images/our-client-logo/evo foods.svg";
import concept from "../../../../../../public/Home_Page/homepage_images/our-client-logo/fluid concepts.svg";
import services from "../../../../../../public/Home_Page/homepage_images/our-client-logo/hallmark services.svg";
import resortwear from "../../../../../../public/Home_Page/homepage_images/our-client-logo/kai resortwear.svg";
import kisah from "../../../../../../public/Home_Page/homepage_images/our-client-logo/kisah.svg";
import kotak from "../../../../../../public/Home_Page/homepage_images/our-client-logo/kotak.svg";
import lalande from "../../../../../../public/Home_Page/homepage_images/our-client-logo/lalande.svg";
import mcdtta from "../../../../../../public/Home_Page/homepage_images/our-client-logo/mcdtta.svg";
import medimix from "../../../../../../public/Home_Page/homepage_images/our-client-logo/medimix.svg";
import meson from "../../../../../../public/Home_Page/homepage_images/our-client-logo/meson.svg";
import mypepr from "../../../../../../public/Home_Page/homepage_images/our-client-logo/mypepr.svg";
import ocuwear from "../../../../../../public/Home_Page/homepage_images/our-client-logo/ocuwear.svg";
import peach from "../../../../../../public/Home_Page/homepage_images/our-client-logo/peach mode.svg";
import rejeshJewellers from "../../../../../../public/Home_Page/homepage_images/our-client-logo/rajesh tulsiani jewellers.svg";
import revolver from "../../../../../../public/Home_Page/homepage_images/our-client-logo/revolver club.svg";
import secureinteli from "../../../../../../public/Home_Page/homepage_images/our-client-logo/secureinteli.svg";
import skully from "../../../../../../public/Home_Page/homepage_images/our-client-logo/skully.svg";
import stoneSoup from "../../../../../../public/Home_Page/homepage_images/our-client-logo/stone soup.svg";
import supersmelly from "../../../../../../public/Home_Page/homepage_images/our-client-logo/super smelly.svg";
import talitha from "../../../../../../public/Home_Page/homepage_images/our-client-logo/talitha.svg";
import tata_1868 from "../../../../../../public/Home_Page/homepage_images/our-client-logo/tata 1868.svg";
import tataSonet from "../../../../../../public/Home_Page/homepage_images/our-client-logo/tata sonnets.svg";
import truvitals from "../../../../../../public/Home_Page/homepage_images/our-client-logo/truvitals.svg";
import viridis from "../../../../../../public/Home_Page/homepage_images/our-client-logo/viridis chemicals.svg";
import vlcc from "../../../../../../public/Home_Page/homepage_images/our-client-logo/vlcc.svg";
interface TestimonialsardProps {
  name: string;
  description: string;
  rating: number;
  inverted: boolean;
  image: string;
}

interface TestimonialProps {
  index: number;
}

const logosRow1 = [
  budun,
  tata_1868,
  galgal,
  mypepr,
  house,
  axisbank,
  talitha,
  bansiwala,
  ocuwear,
  vlcc,
  actifiber,
  skully,
  truvitals,
  medimix,
  budun,
  bsui,
  dular,
  budun,
  tata_1868,
  galgal,
  mypepr,
  house,
  axisbank,
  talitha,
  bansiwala,
  ocuwear,
  vlcc,
  actifiber,
  skully,
  truvitals,
  medimix,
  budun,
  bsui,
  budun,
  tata_1868,
  galgal,
  mypepr,
  house,
  axisbank,
  talitha,
  bansiwala,
  ocuwear,
  vlcc,
  actifiber,
  skully,
  truvitals,
  medimix,
  budun,
  bsui,
  dular,
  budun,
  tata_1868,
  galgal,
  mypepr,
  house,
  axisbank,
  talitha,
  bansiwala,
  ocuwear,
  vlcc,
  actifiber,
  skully,
  truvitals,
  medimix,
  budun,
  bsui,
];
const logosRow2 = [
  dular,
  dvai,
  evoFood,
  concept,
  services,
  resortwear,
  kisah,
  kotak,
  lalande,
  mcdtta,
  meson,
  peach,
  rejeshJewellers,
  revolver,
  secureinteli,
  stoneSoup,
  tataSonet,
  supersmelly,
  viridis,
  dular,
  dvai,
  evoFood,
  concept,
  services,
  resortwear,
  kisah,
  kotak,
  lalande,
  mcdtta,
  meson,
  peach,
  rejeshJewellers,
  revolver,
  secureinteli,
  stoneSoup,
  tataSonet,
  supersmelly,
  viridis,
  dular,
  dvai,
  evoFood,
  concept,
  services,
  resortwear,
  kisah,
  kotak,
  lalande,
  mcdtta,
  meson,
  peach,
  rejeshJewellers,
  revolver,
  secureinteli,
  stoneSoup,
  tataSonet,
  supersmelly,
  viridis,
  dular,
  dvai,
  evoFood,
  concept,
  services,
  resortwear,
  kisah,
  kotak,
  lalande,
  mcdtta,
  meson,
  peach,
  rejeshJewellers,
  revolver,
  secureinteli,
  stoneSoup,
  tataSonet,
  supersmelly,
  viridis,
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
    <div className="md:min-h-[200px] flex flex-col ">
      <div className="px-[30px] md:px-20">
        {" "}
        <div className="md:flex flex-row justify-between items-center mb-5 md:mb-0">
          <div className="hidden md:flex flex-row gap-4 items-center">
            <Image alt="" src={"/vectors/Union.svg"} height={30} width={30} />
            <h3 className="text-lg font-normal text-[#525252] sm:text-3xl lg:text-[28px] 4xl:text-[42px]">
              Testimonials
            </h3>
          </div>
          <h2 className="text-[28px] lg:text-[26px] 4xl:text-6xl text-[#2B2B2B] font-bold mt-2.5 sm:mt-5 lg:mt-0">
            Some friends we’ve made in the process !
          </h2>
        </div>
        <Separator className="hidden md:block h-px w-full bg-[#525252] my-4 mb-10 xl:mt-11 xl:mb-[60px]" />
        <div className="hidden md:flex justify-around flex-row gap-10 xl:gap-20 xl:h-[200px] 4xl:h-[220px]">
          <div className="h-full w-full flex flex-col justify-center col-span-1">
            <div className="text-[15px] sm:text-lg lg:text-xl 4xl:text-4xl 4xl:!leading-[41px] text-[#2B2B2B] font-bold mb-5">
              Excellent Team
            </div>
            <p className="text-[15px] sm:text-base xl:text-xl 4xl:text-3xl 4xl:!leading-[41px] text-[#525252]">
              Our team stands out for its creativity and skill. We bring
              together diverse talents to craft exceptional web development,
              digital marketing, and design solutions. With a shared commitment
              to excellence, we turn ideas into successful outcomes and drive
              innovation in every project.
            </p>
          </div>
          <Separator className="h-full w-px bg-[#525252]" />
          <div className="h-full w-full flex flex-col justify-center col-span-1 relative">
            <div className="text-[15px] sm:text-lg lg:text-xl 4xl:text-3xl 4xl:!leading-[41px]  text-[#2B2B2B] font-bold mb-5">
              Best Solution Providers
            </div>
            <p className="text-[15px] sm:text-base xl:text-xl 4xl:text-3xl 4xl:!leading-[41px] text-[#525252]">
              We deliver tailored solutions that align with your business goals.
              Combining cutting-edge technology with industry expertise, we
              solve complex challenges and drive sustainable growth, exceeding
              your expectations.
            </p>
          </div>
        </div>
      </div>
      <Separator className="hidden md:block h-px w-full bg-[#525252] my-4 sm:my-10 xl:my-20" />
      {/* <div className='mt-20 md:mt-0'>
        <Marquee speed={40}>
          <div className='flex gap-20 w-full px-2 py-4 ob-img'>
            {clientLogos.slice(0, 10).map((logo, index) => (
              <Image
              width={100}
              height={100}
                src={`/logos/HomeClientLogo/${logo}`}
                alt={`Client Logo ${logo}`}
                key={index}
              />
            ))}
          </div>
        </Marquee>
        <Marquee speed={30} direction='right'>
          <div className='flex gap-20 w-full px-2 py-4 pb-0 ob-img'>
            {clientLogos.slice(10).map((logo, index) => (
              <img
                src={`/logos/HomeClientLogo/${logo}`}
                alt={`Client Logo ${logo}`}
                key={index}
              
              />
            ))}
          </div>
        </Marquee>
      </div> */}
      <div className="sliding-logos-container gap-0 4xl:gap-2.5  overflow-hidden mt-10w 4xl:mt-24">
        {/* Row 1 */}
        <div className="sliding-row gap-14 lg:gap-24 row1">
          {logosRow1.map((logo, index) => (
            <Image
              key={index}
              className="lg:w-[100px]  4xl:w-[185px] w-[90px]"
              src={logo}
              alt={`Logo ${index}`}
            />
          ))}
          {logosRow1.map((logo, index) => (
            <Image
              key={`duplicate1-${index}`}
              className=" lg:w-[100px] 4xl:w-[185px] w-[90px]"
              src={logo}
              alt={`Duplicate Logo ${index}`}
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="sliding-row gap-14 lg:gap-24 row2">
          {logosRow2.map((logo, index) => (
            <Image
              key={index}
              className="lg:w-[100px]  4xl:w-[185px] w-[90px]"
              src={logo}
              alt={`Logo ${index}`}
            />
          ))}
          {logosRow2.map((logo, index) => (
            <Image
              key={`duplicate2-${index}`}
              className="lg:w-[100px]  4xl:w-[185px] w-[90px]"
              src={logo}
              alt={`Duplicate Logo ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
