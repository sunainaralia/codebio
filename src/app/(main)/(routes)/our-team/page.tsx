"use client";

import Image from "next/image";
import React from "react";
import TeamCards from "./_components/teamCards";
import { team } from "@/components/data/team";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/AnimatedButton";
import LetsCollab from "../../_components/letsCollab";
import { Separator } from "@/components/ui/separator";

function OurTeam() {
  return (
    <div className="px-10 md:px-20">
      <div className="3xl:mt-[150px] lg:mt-[100px] mt-[60px] 4xl:mb-[175px] mb-[50px]">
        <div className=" mx-auto text-3xl  lg:text-4xl xl:text-5xl 4xl:text-[84px] uppercase font-[900] text-center mb-[25px]  ">
          Our Team
        </div>

        <div className="flex w-fit gap-4 items-center mb-5 mx-auto">
          <Image  className='h-[16px] w-[16px] md:w-[28px] md:h-[28px]  3xl:h-[36px]  3xl:w-[36px] 3xl:mt-[30px]' src={"/vectors/Star 1.svg"} alt="" height={30} width={30} />
          <h3 className="text-md text-center md:text-xl 3xl:text-[42px] text-[#525252] font-normal 3xl:mt-[30px]">
            Brilliant Minds Behind CodeBiosis
          </h3>
          <Image  className='h-[16px] w-[16px] md:w-[28px] md:h-[28px]  3xl:h-[36px]  3xl:w-[36px] 3xl:mt-[30px]' src={"/vectors/Star 1.svg"} alt="" height={30} width={30} />
        </div>
      </div>

      <div className="flex flex-wrap py-6 md:py-10 3xl:py-14 4xl:py-[150px] justify-center">
        {team.map((card, index) => (
          <div
            className={cn(
              "flex justify-center lg:basis-1/2 border-b border-[#D8D8D8] mt-[100px ] py-[30px] sm:py-10 lg:py-16 3xl:py-[100px]"
            )}
            key={index}
          >
            <div
              className={cn(
                "w-full flex items-start justify-center ",
                index % 2 === 0 && "lg:border-r lg:border-[#D8D8D8]"
              )}
            >
              <TeamCards {...card} />
            </div>
          </div>
        ))}
      </div>

      <AnimatedButton className="w-fit mx-auto">Know Them</AnimatedButton>

      <div className="py-10 2xl:py-14">
        <LetsCollab
          title="Join Our Team"
          substring="We’re a team of creatives who are excited about unique ideas and help digital and fin-tech companies to create amazing identity."
          subGHeading="Look Out Open Positions"
        />
      </div>

      <Separator className="mt-14 w-full bg-[#D8D8D8] h-px " />
    </div>
  );
}

export default OurTeam;
