"use client";
import React, { useState } from "react";
import ArrowIconButton from "../ArrowIconButton";
import AnimatedButton from "../AnimatedButton";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
interface GetInTouchSectionProps {
  className?: string;
}
function GetInTouchSection({ className }: GetInTouchSectionProps) {
  const[subscription,setSubscription] =useState('')
  const router = useRouter();

  const handleContactNavigation = () => {
    router.push("/contact-us");
  };

  const handleSubscribe = (e:any) => {
    e.preventDefault();
    console.log(subscription)
    setSubscription:""
  }
  return (
    <div className="sm:w-[95%] m-auto">
      <div
        className={cn(
          "mt-[27px] 4xl:mt-[60px] pb-[87px] xl:pb-[150px] 4xl:pb-[300px] lg:pt-10 4xl:pt-20 border-b border-[#D8D8D8]",
          className
        )}
      >
        <div className=" lg:text-5xl 4xl:text-[84px] text-[36px] font-extrabold">
          Stay Updated !
        </div>
        <div className="md:flex justify-between items-end">
          <form onSubmit={handleSubscribe} className="w-full md:max-w-[650px] 3xl:max-w-[900px]">
            <div className="flex items-center border-b w-full max-w-[700px] justify-between  lg:mt-[65px] mt-[50px]">
              <input
              onChange={(e)=>setSubscription(e.target.value)}
              value={subscription}
                type="text"
                placeholder="yourname@mail.com"
                className="w-full border-none mb-2.5 4xl:mb-[20px] text-sm sm:text-lg 4xl:text-[26px] font-normal text-[#8D8D8D] outline-none max-w-[600px]"
              />
              <ArrowIconButton
                invertArrow
                onClick={() => {}}
                className=" mb-2.5 4xl:mb-[20px]"
              />
            </div>
            <div className="lg:text-xl text-[14px] 4xl:text-[26px] w-full mt-[40px] text-[#2B2B2B]">
              By providing your email, you agree for us to contact you via email
              with future updates. Your data is stored securely and we never pass
              it on to third parties.
            </div>
          </form>
          <AnimatedButton
            className="hidden xl:flex w-fit h-fit "
            onClick={handleContactNavigation}
          >
            Get in touch
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
export default GetInTouchSection;
