"use client";
import { Separator } from "@radix-ui/react-separator";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

function OurStatsRightSection() {
  return (
    <div className="my-20 mt-5 py-24  min-h-[200px]  grid grid-cols-5">
      <div className="flex col-span-2">
        <div className="flex flex-col w-full items-start  ">
          <h1 className="text-[36px] font-black mb-2 md:h-[1.7em]">Our Stats</h1>
          <Separator className="h-px w-full bg-[#D8D8D8] my-4" />
          <p className="text-sm sm:text-xl font-medium ">
            Numbers don’t lie. We have an unparalleled 
            <br />
            track record of digital excellence.
          </p>
        </div>
        <Separator className="h-full w-px bg-[#525252] p-[.5px] my-4" />
      </div>
      <div className="flex">
        <StatsInfo count={180} title="Succeeded Projects" />
        <Separator className="h-full w-px bg-[#525252] p-[.5px] my-4" />
      </div>
      <div className="flex">
        <StatsInfo count={10000} title="Working hours were spent" />
        <Separator className="h-full w-px bg-[#525252] p-[.5px] my-4" />
      </div>
      <div className="flex">
        <StatsInfo count={150} title="Stores Optimized" />
        <Separator className="h-full w-px bg-[#525252] p-[.5px] my-4" />
      </div>
    </div>
  );
}

function StatsInfo({ count, title }: { count: number; title: string }) {
  const countUpRef = useRef(null);
  const inView = useInView(countUpRef, { once: true });
  return (
    <div className="flex flex-col justify-center items-center flex-1" ref={countUpRef}>
      <h1 className="text-5xl 4xl:text-[78px] font-medium text-black p-1 md:h-[1.7em]"><CountUp end={inView ? count : 0} start={0} duration={3} />+</h1>
      <Separator className="h-px w-full bg-[#525252] p-[.5px] my-4" />
      <h3 className="xl:p-4 xl:text-center xl:h-[3rem] text-base sm:text-xl 4xl:text-3xl font-normal text-[#2B2B2B]">{title}</h3>
    </div>
  );
}

export default OurStatsRightSection;






