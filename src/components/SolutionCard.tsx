import React from "react";
import { Separator } from "./ui/separator";
import LottieAnimation from "@/app/(main)/_components/lottiePlayer";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";


interface SolutionCardProps {
  title: string;
  icon: any;
  key:number;
  cardStyling: string;
}

function SolutionCard({ icon, title,cardStyling }: SolutionCardProps) {
  return (
    <Link href="/services" target="_blank" passHref>
      <div 
      className={`flex flex-col items-center lg:min-w-[250px]  lg:border border-primary-natural lg:rounded-lg lg:mb-0 h-full ${cardStyling}}
      `}
    
      > 
        <div className="flex flex-col justify-center items-center lg:flex-1 flex-0 py-7 lg:py-20 3xl:py-36">

          <Image src={icon} alt={`${title} icon`} width={180} height={180} className="w-12 h-12 lg:w-[110px] lg:h-[105px] 3xl:w-[187px] 3xl:max-h-[169px]" />
        </div>

        <Separator className="hidden bg-primary-natural h-px w-full" />
        <div className="w-full flex flex-col justify-center items-center lg:border-t border-[#2b2b2b] lg:h-[120px] 3xl:h-[210px]      px-4 pb-6 lg:pb-0">
          <h1 className="break-normal text-center font-semibold text-sm lg:text-[26px] 3xl:text-[38px] lg:leading-[36px]">
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default SolutionCard;