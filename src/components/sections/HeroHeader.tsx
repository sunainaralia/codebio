"use client";

import Image from "next/image";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import AnimatedButton from "../AnimatedButton";
import LottieAnimation from "@/app/(main)/_components/lottiePlayer";

function HeroHeader(props: {
  title: string;
  featureText: string;
  subText?: string;
  iconPath?: string;
  buttonText?: string;
  titleClassName?: string;
  hasLottie?: boolean;
}) {
  return (
    <>
      <div className="md:flex justify-around items-center flex-row pt-8 pb-14 md:py-14 gap-7  lg:h-[600px] 4xl:h-[750px]">
        <div className="h-full w-full flex flex-col justify-center items-center col-span-1">
          <div className="flex flex-row items-center gap-4">
            <Image src={"/vectors/Union.svg"} alt="" height={30} width={30} />
            <h3
              className={cn(
                `text-lg font-normal text-[#525252] sm:text-[28px] lg:text-[32px] text-center lg:leading-[56px]`,
                props.subText && "text-xl "
              )}
            >
              {props.title}
            </h3>
            <Image src={"/vectors/Union.svg"} alt="" height={30} width={30} />
          </div>
          <h1
            className={cn(
              "  lg:text-6xl 4xl:text-[120px] text-[42px] font-black mt-6 text-center w-full",
              props.titleClassName,
              "leading-[4rem] lg:leading-[5rem] 4xl:leading-[10rem]"
            )}
          >
            {props.featureText}
          </h1>

          <div className="max-w-[655px] hidden md:block text-center text-[15px] sm:text-xl lg:text-xl 4xl:text-3xl 4xl:!leading-10 mt-5 2xl:mt-10">
            {props.subText}
          </div>

          {props.buttonText && (
            <AnimatedButton className="hidden md:block">
              {props.buttonText}
            </AnimatedButton>
          )}
        </div>
        <Separator className="h-full w-px bg-[#D8D8D8]" />
        <div className="h-full w-full flex flex-col justify-center items-center col-span-1 relative mt-6">
          {props.hasLottie ? (
            <LottieAnimation
              animationData={props.iconPath ?? ""}
              className="max-h-[300px] max-w-[300px] md:max-h-[500px] md:max-w-[400px] "
            />
          ) : (
            <Image src={props.iconPath ?? ""} alt="" fill />
          )}
        </div>
        <div className="flex flex-col items-center md:hidden">
          <div className="max-w-[655px] text-center text-[15px] sm:text-xl lg:text-xl 4xl:text-3xl 4xl:!leading-10 mt-5 2xl:mt-10">
            {props.subText}
          </div>

          {props.buttonText && (
            <AnimatedButton>{props.buttonText}</AnimatedButton>
          )}
        </div>
      </div>
      <Separator className="lg:hidden block h-px w-full bg-[#D8D8D8]" />
    </>
  );
}

export default HeroHeader;
