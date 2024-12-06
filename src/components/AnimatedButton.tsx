'use client'
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { HtmlHTMLAttributes, ReactNode, useEffect, useRef } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  btnClassName?: string;
  icon?: string;
  onClick?: () => void;
}

const AnimatedButton = ({ children, className, btnClassName, icon, onClick }: AnimatedButtonProps) => {
  let ref = useRef<HTMLButtonElement>(null);

  const inView = useInView(ref, {
    once: true, // Trigger animation only once
    amount: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <button
      className={cn(`mt-11 lg:mt-16 3xl:mt-[90px] relative Animatedbutton rounded-full text-lg lg:text-xl 4xl:text-[28px] font-bold ps-5 pe-3 py-2.5 md:py-2.5 flex flex-row justify-center items-center gap-5 z-[5] overflow-visible border border-black  ` , className)}
      onClick={onClick}
      ref={ref}
    >
      <div className={cn(`z-10 text-[#2B2B2B] text-lg lg:text-2xl 3xl:text-[28px] font-bold` , className)}>
        {children}
      </div>
      <div className={cn("bg-primary-natural relative rounded-full h-8 xl:h-12 w-8 xl:w-12", btnClassName)}>
        <motion.div
          initial={{ x: -15, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 15, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            repeatDelay: 1,
          }}
          className="relative h-full"
        >
          <Image
            className=" xl:block hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2   "
            alt="img"
            src={icon ? icon : "/icons/angle_icon.svg"}
            // fill      //fill commented and width & height is used instead.
            width={15}
            height={20}
          />
          <Image
            className=" xl:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2   "
            alt="img"
            src={icon ? icon : "/icons/angle_icon.svg"}
            // fill      //fill commented and width & height is used instead.
            width={10}
            height={13}
          />
        </motion.div>
      </div>

      {/* {
        inView ? <svg
        viewBox={`0 0 ${ref?.current?.getBoundingClientRect().width || 0} ${ref?.current?.getBoundingClientRect().height || 0}`}
        fill="none"
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width={ref?.current?.getBoundingClientRect().width ? ref?.current?.getBoundingClientRect().width - 2 : 0}
          height={ref?.current?.getBoundingClientRect().height ? ref?.current?.getBoundingClientRect().height - 2 : 0}
          rx="30"
          fill="none"
          stroke="#222222"
          stroke-width="1"
          strokeDasharray="600, 600"
          className="animate-button-ellipse"
        ></rect>
      </svg> : null
      } */}

    </button>
  );
};

export default AnimatedButton;
