/* eslint-disable @next/next/no-img-element */
import React from "react";
import LottieAnimation from "../_components/lottiePlayer";

interface SectionProps {
  title: string;
  logoSrc: any;
  altText: string;
  items: {
    heading: string;
    description: string;
  }[];
}

const CaseStudySection: React.FC<SectionProps> = ({
  title,
  logoSrc,
  altText,
  items,
}) => {
  return (
    <div className="flex-1">
      <div className="md:mb-4">
        <div className="flex items-center pt-10">
          <LottieAnimation animationData={logoSrc} className="w-12 h-12 lg:w-[70px] lg:h-[70px] mr-4" />
          <h2 className="text-xl md:text-4xl lg:text-[30px] 4xl:text-5xl font-bold max-w-[890px] 4xl:!leading-[64px] lg:leading-[40px] text-black">{title}</h2>
        </div>
        <div className=" flex flex-col sm:flex-row gap-[2%] flex-wrap ">
          {items.map((item, index) => (
            <div key={index} className="w-full sm:w-[49%] mt-5 md:mt-12 2xl:mt-[60px]">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[26px] 4xl:text-4xl 4xl:leading-[48px] text-[#525252] font-bold">{item.heading}</h3>
              <p className="text-[#525252] text-[15px] md:text-base 3xl:text-2xl 3xl:leading-[40px] lg:leading-[26px] leading-[21px] 2xl:max-w-[900px]  mt-1 md:mt-3"  style={{ color: "#525252" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;
