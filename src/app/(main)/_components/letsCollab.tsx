import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FlipWords } from "./flipWords";

interface LetsCollabProps {
  className?: string;
  title: string;
  substring: string;
  subGHeading?: string;
}

const LetsCollab = ({
  className,
  title,
  substring,
  subGHeading,
}: LetsCollabProps) => {
  return (
    <div className={cn("md:flex items-center justify-between 4xl:my-[200px] lg:my-24 sm:mb-[100px] sm:mt-10 mt-[50px] mb-20", className)}>
      <div className="md:w-[49%] ">
        <div className="flex gap-4 items-center justify-center md:justify-start mb-5">
          <Image
            src={"/vectors/Union.svg"}
            className="w-4 h-4 4xl:w-[30px] 4xl:h-[30px]"
            alt=""
            height={30}
            width={30}
          />
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] 4xl:text-4xl 4xl:leading-[48px] text-black font-medium ">
            {subGHeading || "Let's Collaborate"}
          </h3>
        </div>

        <div className="text-[#525252] md:max-w-[930px] 4xl:!leading-10 text-sm sm:base lg:text-xl 4xl:text-3xl font-normal text-center md:text-start">
          {substring}
        </div>
      </div>

      <Separator
        className="w-px bg-[#525252] my-4 md:h-[200px]"
        orientation="vertical"
      />

      <div className="flex gap-4 xl:gap-8 text-3xl xl:text-5xl 4xl:text-[70px] font-[900] items-center justify-center md:w-[49%] md:mt-0 mt-10">
        <FlipWords word={title} className="z-[5] w-fit px-0 pb-2" border={8} />
        <Image
          className="w-[48px] h-[48px]  4xl:w-24 4xl:h-20"
          src={"/illustrations/briefcase.svg"}
          alt=""
          height={48}
          width={48}
        />
      </div>
    </div>
  );
};

export default LetsCollab;
