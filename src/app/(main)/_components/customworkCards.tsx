"use client";

import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { ParallaxHorizontalScroll } from "./horizontalScroller";
import { images } from "@/components/data/images";
import { ParallaxTiltedScroll } from "./tiltedScroller";
import { ParallaxTiltedScrollcustom } from "./custometiledScroller";

interface WorkCardProps {
  img?: string;
  name?: string;
  description?: string;
  strategy?: string;
  design?: string;
  id?: string;
  hideLowerSection?: boolean;
}

const WorkCardscustom = ({
  img,
  name,
  description,
  strategy,
  design,
  cardType,
  imgArray,
  id,
  onClick,
  hideLowerSection = false,
}: WorkCardProps & { cardType?: string } & { imgArray?: string[] } & {
  onClick?: () => void;
}) => {
  return (
    <div className="w-full max-2xl:max-w-[1500px] 2xl:!w-full ">
      <div className="relative">
        {cardType === "horizontal" ? (
          <ParallaxHorizontalScroll images={imgArray || images} />
        ) : (
          <ParallaxTiltedScrollcustom images={imgArray || images} />
        )}
        
      </div>

      <div className="flex flex-col justify-between h-full">
        {/* Conditionally Render Name and Description */}
        {(name || description) && (
          <div
            className={`flex flex-col lg:flex-row lg:justify-center lg:text-center my-7 md:mt-12 ${
              hideLowerSection ? "flex flex-col" : "flex lg:items-center gap-1"
            }`}
          >
            {name && (
              <span className="text-2xl lg:text-3xl xl:text-[38px] text-black font-bold">
                {name}
              </span>
            )}
            {!hideLowerSection && description && (
              <span className="text-[#8D8D8D] text-sm sm:text-xl xl:text-[26px] font-normal">
                <span className="hidden lg:block">: {description}</span>
                <span className="lg:hidden block">{description}</span>
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
                <div className="lg:text-center text-xl sm:text-2xl xl:text-[28px] font-bold text-[#525252] py-1">
                  Strategy
                </div>
                <div className="text-[12px] text-[#525252] sm:text-base xl:text-xl text-start lg:text-center mt-2 font-normal">
                  {strategy}
                </div>
              </div>
            )}
            {strategy && design && (
              <Separator className="w-px bg-[#D8D8D8] mx-6" />
            )}
            {design && (
              <div className="flex-1">
                <div className="lg:text-center text-xl sm:text-2xl xl:text-[28px] font-bold text-[#525252] py-1">
                  Design
                </div>
                <div className="text-[12px] text-[#525252] sm:text-base xl:text-xl text-start lg:text-center mt-2 font-normal">
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
export default WorkCardscustom;
