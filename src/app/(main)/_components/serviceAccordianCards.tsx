import { serviceDataMain } from "@/components/data/services";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import LottieAnimation from "./lottiePlayer";
interface ServiceAccordianCardsProps {
  section: string;
  data: string;
  index: number;
}
const ServiceAccordianCards = ({
  section,
  data,
  index,
}: ServiceAccordianCardsProps) => {

 
  return (
    <div className="group transition duration-300 3xl:p-4 rounded-md cursor-pointer ">
      <div className="w-full flex justify-between items-center gap-4 ">
        <div className="text-lg sm:text-xl lg:text-2xl 3xl:text-3xl 4xl:text-4xl text-black font-bold text-black group-hover:text-[#fff] transition duration-300">
          {data}
        </div>

        {/*  */}
      
          <LottieAnimation
            animationData={require(`@/../public/lottiee/OurService/${
              serviceDataMain[section].description.icon
            }${index + 1 > 9 ? index + 1 : `0${index + 1}`}.json`)}
            className="w-10 h-[60px] max-h-[60px] max-w-10 transition duration-300 group-hover:filter group-hover:invert group-hover:fill-[#fff]"
          />
       
      </div>
      <div className="text-[#525252] text-normal text-sm sm:text-base lg:text-xl 4xl:text-3xl mt-3 lg:mt-6 4xl:mt-24 4xl:!leading-10 group-hover:text-[#fff] duration-300">
        {serviceDataMain[section].sections[data]}
      </div>
    </div>
  );
};
export default ServiceAccordianCards;
