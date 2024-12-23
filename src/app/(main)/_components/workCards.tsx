"use client";

import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { ParallaxHorizontalScroll } from "./horizontalScroller";
import { images, ourWorkAlmondImg } from "@/components/data/images";
import { ParallaxTiltedScroll } from "./tiltedScroller";

interface WorkCardProps {
  img?: string;
  name?: string;
  description?: string;
  strategy?: string;
  design?: string;
  id?: string;
  hideLowerSection?: boolean;
  cardstyling?: string;
}

const WorkCards = ({
  img,
  name,
  description,
  strategy,
  design,
  cardType,
  imageArr,
  id,
  cardstyling,
  onClick,
  hideLowerSection = false,
}: WorkCardProps & { cardType?: string } & { imageArr?: string[] } & {
  onClick?: () => void;
}) => {
  return (
    <div className="max-2xl:max-w-[900px] 2xl:w-full 2xl:px-16">
      <div className="relative">
        {cardType === "horizontal" ? (
          <ParallaxHorizontalScroll images={imageArr || ourWorkAlmondImg} />
        ) : (
          <div className={` ${cardstyling} rounded-3xl`}><ParallaxTiltedScroll images={imageArr || ourWorkAlmondImg} /></div>
        )}
        <span
          onClick={onClick}
          className="absolute -bottom-10 outline outline-8 outline-primary-white right-5 w-14 h-14 bg-primary-natural rounded-full p-2 md:hidden flex justify-center items-center"
        >
          <svg
            width="17"
            height="22"
            viewBox="0 0 17 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.438008 4.97485L0.438008 0.200779L16.3516 8.39096L16.3516 13.6106L0.438006 21.8008L0.438007 17.0267L11.673 11.0008L0.438008 4.97485Z"
              fill="white"
            />
          </svg>
        </span>
      </div>

      <div className="flex flex-col justify-between h-full">
        {/* Conditionally Render Name and Description */}
        {(name || description) && (
          <div
            className={`flex flex-col lg:flex-row lg:justify-center lg:text-center my-7 md:mt-12 items-center ${
              hideLowerSection ? "flex flex-col" : "flex lg:items-center gap-1"
            }`}
          >
            {name && (
              <span className="text-2xl lg:text-[22px] 4xl:text-[38px] text-black font-bold me-2">
                {name}:  
              </span>
            )}
            {!hideLowerSection && description && (
              <span className="text-[#8D8D8D] text-sm sm:text-xl  4xl:text-[26px] font-normal">
                <span className="hidden lg:block"> {description}</span>
                <span className="lg:hidden block"> {description}</span>
              </span>
            )}
            {hideLowerSection && description && (
              <span className="text-[#8D8D8D] text-sm sm:text-xl xl:text-[26px] font-normal">
                  {description}
              </span>
            )}
          </div>
        )}

        {/* Conditionally Render Strategy and Design */}
        {!hideLowerSection && (strategy || design) && (
          <div className="flex lg:justify-center">
            {strategy && (
              <div className="flex-1">
                <div className="lg:text-center text-xl sm:text-2xl lg:text-[22px] 4xl:text-[28px] font-bold text-[#525252] py-1">
                  Strategy
                </div>
                <div className="text-[12px] text-[#525252] sm:text-base 4xl:text-xl text-start lg:text-center mt-2 font-normal">
                  {strategy}
                </div>
              </div>
            )}
            {strategy && design && (
              <Separator className="w-px bg-[#D8D8D8] mx-6" />
            )}
            {design && (
              <div className="flex-1">
                <div className="lg:text-center text-xl sm:text-2xl lg:text-[22px] 4xl:text-[28px] font-bold text-[#525252] py-1">
                  Design
                </div>
                <div className="text-[12px] text-[#525252] sm:text-base 4xl:text-xl text-start lg:text-center mt-2 font-normal">
                  {design}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
interface WorkCardProps2 {
  img?: string;
  name?: string;
  description?: string;
  strategy?: string;
  design?: string;
  id?: string;
  hideLowerSection?: boolean;
}
export default WorkCards