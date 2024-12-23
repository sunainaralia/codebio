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
    <div className="px-[30px] md:px-20">
      <div className="4xl:mt-[150px] lg:mt-[100px] mt-[60px] 4xl:mb-[175px] mb-14 xl:mb-[100px]">
        <div className=" mx-auto text-3xl  lg:text-4xl xl:text-5xl 4xl:text-[84px] uppercase font-[900] text-center mb-[25px]  ">
          Our Team
        </div>

        <div className="flex w-fit gap-4 items-center  mx-auto">
          <Image  className='h-[16px] w-[16px] md:w-[28px] md:h-[28px]  3xl:h-[36px]  3xl:w-[36px] ' src={"/vectors/Union.svg"} alt="" height={30} width={30} />
          <h3 className="text-md text-center md:text-xl 3xl:text-[42px] text-[#525252] font-normal ">
            Brilliant Minds Behind CodeBiosis
          </h3>
          <Image  className='h-[16px] w-[16px] md:w-[28px] md:h-[28px]  3xl:h-[36px]  3xl:w-[36px] ' src={"/vectors/Union.svg"} alt="" height={30} width={30} />
        </div>
      </div>

      <div className="lg:flex flex-wrap pb-6 md:pb-10 3xl:pb-14  justify-center">
        {team.map((card, index) => (
          <div
            className={cn(
              "lg:flex justify-center xl:basis-1/2 border-b border-[#D8D8D8] mt-[100px ] py-[30px] sm:py-10 lg:py-16 3xl:py-[100px]"
            )}
            key={index}
          >
            <div
              className={cn(
                "lg:w-full flex items-start justify-center ",
                index % 2 === 0 && "lg:border-r lg:border-[#D8D8D8]"
              )}
            >
              <TeamCards {...card} />
            </div>
          </div>
        ))}
      </div>

      <AnimatedButton className="w-fit mx-auto">Know Them</AnimatedButton>

      <div>
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
