// 'use client';

import { ParallaxHorizontalScroll } from "@/app/(main)/_components/horizontalScroller";
import { ParallaxTiltedScroll } from "@/app/(main)/_components/tiltedScroller";
import AnimatedButton from "@/components/AnimatedButton";
import { images } from "@/components/data/images";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface WorkCardProps {
  img: string;
  name?: string;
  description?: string;
  strategy?: string;
  design?: string;
  id?: string;
  mainDescription?: string;
  buttonText: string;
  imageArr?: string[];
}

const BannerDetails = ({
  img,
  name,
  description,
  strategy,
  design,
  id,
  mainDescription,
  buttonText,
  imageArr,
}: WorkCardProps) => {
  const navigate = useRouter();
  return (
    <div className="w-full pt-5 md:pt-20">
      <div className="relative w-full lg:!h-[750px]">
        {id === "works4" ? (
          <ParallaxTiltedScroll
            images={imageArr || images}
            imageH={200}
            imageW={800}
            className="max-w-full w-full md:!h-[550px]"
            childrenClassName="md:w-[200vw] ml-[-25%] mt-[-50%]"
          />
        ) : (
          <ParallaxHorizontalScroll
            images={imageArr || images}
            imageH={200}
            imageW={800}
            className="max-w-full w-full md:!h-[750px] max-h-full"
          />
        )}

        <div className="absolute bottom-0 md:bottom-12 right-3 ">
          <AnimatedButton
            className="bg-[#2B2B2B] text-primary-white"
            btnClassName="bg-primary-white"
            icon="/vectors/blacktick.svg"
            onClick={() => {
              navigate.push(`/our-work/${id}`);
            }}
          >
            {buttonText}
          </AnimatedButton>
        </div>
      </div>

      <div className="my-[50px]">
        <div className="xl:flex  justify-center">
          <div className="">
            <div className="2xl:text-[54px] xl:text-[40px] lg:text-[30px] text-[25px] capitalize font-bold text-center xl:text-start">
              {name}
            </div>
            <div className="text-[#8D8D8D] mt-3 2xl:text-[34px] lg:text-[29px] sm:text-[20px] text-[18px] text-center xl:text-start">
              {description}
            </div>
            <div className=" lg:flex text-[#525252] items-baseline my-5 justify-center">
            <div className="flex flex-col 2xl:!flex-row items-center ">
                <div className="mr-2 font-semibold text-[28px]">Design:</div>
                <div className="text-[20px]">{design}</div>
              </div>
              <Separator className="w-px bg-[#D8D8D8] mx-6" />
              <div className="flex flex-col 2xl:!flex-row items-center">
                <div className="mr-2 font-semibold text-[28px]">Design:</div>
                <div className="text-[20px]">{design}</div>
              </div>
            </div>
            <div className="md:hidden flex md:justify-center items-center">
              <div className="flex-1">
                <div className="md:text-center text-base font-semibold text-[#525252] py-1">
                  Strategy
                </div>
                <div className="text-[12px] text-[#8D8D8D]">{strategy}</div>
              </div>
              <Separator
                className="w-px bg-[#D8D8D8] mx-6"
                orientation="vertical"
              />
            
            </div>
          </div>

          <div className="text-[#525252] 3xl:max-w-[957px] 2xl:max-w-[740px]  2xl:text-[30px] sm:text-[20px] lg:text-[25px] font-normal 2xl:text-right text-center  w-full">
            {mainDescription}
          </div>
        </div>
        <Separator className="h-px w-full bg-[#D8D8D8] mt-10 md:mt-2 mb-6" />
      </div>
    </div>
  );
};

export default BannerDetails;
