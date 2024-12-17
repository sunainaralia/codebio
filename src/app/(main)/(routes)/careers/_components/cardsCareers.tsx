import { cardDataCareers } from "@/components/data/careers";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const CardsCareers = () => {
  return (
    <div>
      <div className=" text-[30px] sm:text-5xl 3xl:text-6xl 3xl:text-[72px] font-black text-center">Benefits</div>
      <Separator className="h-px max-w-[120px] lg:max-w-[250px] bg-[#525252] mt-1 sm:mt-6 mb-[50px] sm:mb-24 lg:mb-[150px] mx-auto" />

      <div className="flex max-w-[1490px] justify-center gap-[36px] lg:gap-[60px] mx-auto flex-wrap">
        {
            cardDataCareers.map((card, index) => (
                <Card key={index} {...card} />
            ))
        }
      </div>
    </div>
  );
};

type CardData = {
  img?: string;
  icon?: string;
  title?: string;
};

const Card = ({ img, icon, title }: CardData) => {
  return (
    <div className="border border-[#525252] rounded-[20px] overflow-hidden w-[150px] md:w-[200px] xl:w-[250px] h-[180px] md:h-[240px] 2xl:h-[300px]">
      {img ? (
        <div className="">
          <Image src={img} alt="" width={250} height={350} />
        </div>
      ) : (
        <div className="p-4 flex items-center justify-center flex-col h-full gap-7 4xl:gap-12 ">
          <Image className="hidden xl:block" src={icon || ""} alt="" width={80} height={28} />
          <Image className="xl:hidden" src={icon || ""} alt="" width={50} height={50} />
          <div className="font-bold text-sm sm:text-xl xl:text-2xl max-w-[150px] text-center text-[#525252]">{title}</div>
        </div>
      )}
    </div>
  );
};

export default CardsCareers;
