/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedButton from "@/components/AnimatedButton";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import WorkCards from "../_components/workCards";
import WorkCardscustom from "../_components/customworkCards";
import { ParallaxTiltedScroll } from "../_components/tiltedScroller";
import { WorkCardProps } from "@/components/data/main";
import {
  axisBank,
  images,
  kotakBank,
  mainPresentation,
  ourWorkAlmondImg,
  ourWorkMainImg,
  tataSonet,
} from "@/components/data/images";
import { FlipWords } from "../_components/flipWords";
import { useRouter } from "next/navigation";
import Link from "next/link";

function OurWorkSection() {
  const navigate = useRouter();

  const works: WorkCardProps[] = [
    {
      img: "/works/work-1.png",
      id: "works1",
       cardstyling:"",
       mainDescription:"",
       March_2021:"",
       Their_Problem:"",
       How_We_Solved_It:"",
       What_Client_Said:"",
       Design_img: "",
      Colorpalette_img: "",
      Font_img: "",
       

    },
    {
      img: "/works/work-2.png",
      id: "works2",
      name: "The Almond House",
      description: " E-commerce Store, Confectionary",
      strategy: "Brand Strategy, UX Strategy",
      design: "UI/UX Design, Art Direction",
       cardstyling:"",
       mainDescription:"",
       March_2021:"",
       Their_Problem:"",
       How_We_Solved_It:"",
       What_Client_Said:"",
       Design_img: "",
      Colorpalette_img: "",
      Font_img: "",
    },
    {
      img: "/works/work-3.png",
      id: "works3",
      name: "Kotak Foundation",
      description: "Informative, Charity",
      strategy: "Brand, UI Design",
      design: "UI/UX Design",
       cardstyling:"",
       mainDescription:"",
       March_2021:"",
       Their_Problem:"",
       How_We_Solved_It:"",
       What_Client_Said:"",
       Design_img: "",
      Colorpalette_img: "",
      Font_img: "",
    },
    {
      img: "/works/work-4.png",
      id: "works4",
      name: "Axis Bank",
      description: "Video Animation, Banking",
      strategy: "Storyboarding, Voiceover",
      design: "Asset Design, Animation",
       cardstyling:"",
       mainDescription:"",
       March_2021:"",
       Their_Problem:"",
       How_We_Solved_It:"",
       What_Client_Said:"",
       Design_img: "",
      Colorpalette_img: "",
      Font_img: "",
    },
    {
      img: "/works/work-4.png",
      id: "works4",
       cardstyling:"",
       mainDescription:"",
       March_2021:"",
       Their_Problem:"",
       How_We_Solved_It:"",
       What_Client_Said:"",
       Design_img: "",
      Colorpalette_img: "",
      Font_img: "",
    
    },
  ];
  return (
    <div className=" 4xl:mt-44 ">
      <Separator className="lg:hidden block h-px w-full bg-[#D8D8D8] mb-7" />

      <div className="flex gap-4 items-center  mb-8 lg:mb-[100px] lg:mx-[32px] mx-0 relative z-[2]">
        <Image
          src={"/vectors/Union.svg"}
          alt=""
          height={30}
          width={30}
          className="hidden lg:block 4xl:h-[30px] 4xl:w-[30px] lg:h-[24px] lg:w-[24px]"
        />
        <h3 className="text-lg font-normal text-[#525252] sm:text-xl lg:text-[28px] 4xl:text-[42px]">Our Work</h3>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="relative w-full h-full">
            {/* <img className="w-full" src="/works/work-1.png" alt="" /> */}
            <Link href="/our-work/works4" target="_blank">
           
                <WorkCardscustom {...works[4]} imgArray={ourWorkMainImg} />
             
            </Link>
            <div className="absolute bottom-12 right-3 ">
              <Link href={"/our-work"}>
                <AnimatedButton
                  className="bg-[#2B2B2B] !text-primary-white hidden lg:flex"
                  btnClassName="bg-primary-white"
                  icon="/vectors/blacktick.svg" 
                >
                  View More Projects
                </AnimatedButton>
                <span className="absolute -bottom-10 outline outline-8 outline-primary-white right-5 w-14 h-14 bg-primary-natural rounded-full p-2 md:hidden flex justify-center items-center">
                  <svg
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.438008 4.97485L0.438008 0.200779L16.3516 8.39096L16.3516 13.6106L0.438006 21.8008L0.438007 17.0267L11.673 11.0008L0.438008 4.97485Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          <Separator className="hidden lg:block h-px w-full bg-[#D8D8D8] mt-2 mb-6" />
          <Separator
            className="block lg:hidden h-px w-full bg-[#525252] mt-2 mb-6"
            orientation="horizontal"
          />
        </div>

        <div className="lg:flex w-full lg:w-full  mt-9 lg:mt-16 xl:mt-32 mb-6 justify-center">
          <div className="lg:w-[calc(50%-2px)] ">
            <Link href="/our-work/works2" target="_blank">
              <WorkCards {...works[1]} imgArray={ourWorkAlmondImg} />
            </Link>
          </div>

          <Separator
            className="hidden lg:block bg-[#525252] mx-10"
            orientation="vertical"
          />
          <Separator
            className="block lg:hidden bg-[#525252] my-10"
            orientation="horizontal"
          />

          <div className="lg:min-w-[100px]  lg:w-[calc(50%-2px)]">
            <Link href="/our-work/works4" target="_blank">
              <WorkCards {...works[2]} imgArray={kotakBank} />
            </Link>
          </div>
        </div>

        <Separator className="hidden lg:block h-px w-full bg-[#525252] mt-2 mb-6" />
        <Separator
          className="block lg:hidden h-px w-full bg-[#525252] mt-2 mb-6"
          orientation="horizontal"
        />

        {/* <div className="lg:flex w-full mt-9 lg:mt-16 xl:mt-32 mb-6 justify-center">
          <div className="lg:min-w-[100px]  lg:w-[calc(50%-2px)]">
            <Link href="/our-work/works2" target="_blank">
              <WorkCards {...works[1]} imgArray={kotakBank} />
            </Link>
          </div>

          <Separator
            className="hidden lg:block bg-[#D8D8D8] mx-10"
            orientation="vertical"
          />
          <Separator
            className="block lg:hidden bg-[#D8D8D8] my-10"
            orientation="horizontal"
          />

          <div className="lg:min-w-[100px]  lg:w-[calc(50%-2px)]">
            <Link href="/our-work/works4" target="_blank">
              <WorkCards {...works[2]} imgArray={tataSonet} />
            </Link>
          </div>
        </div>

        <Separator className="hidden lg:block h-px w-full bg-[#D8D8D8] mt-2 mb-6" />
        <Separator
          className="block lg:hidden h-px w-full bg-[#D8D8D8] mt-2 mb-6"
          orientation="horizontal"
        /> */}

        <div className="lg:flex w-full mt-9 lg:mt-16 xl:mt-32 mb-6">
          <div className="lg:min-w-[100px] min-2xl:pe-10 lg:w-[calc(48%-2px)] ">
            <Link href="/our-work/works4" target="_blank">
              <WorkCards {...works[3]} imgArray={axisBank} />
            </Link>
          </div>

          <Separator
            className="hidden lg:block bg-[#525252] mx-10 min-[2100]:-translate-x-10"
            orientation="vertical"
          />

          <div className="lg:min-w-[100px]  lg:w-[calc(50%-2px)] max-w-[900px] flex justify-center items-center my-16 md:my-20 lg:my-0">
            <div
              className="flex items-center w-fit scale-75 4xl:scale-100 h-fit m-auto gap-4 "
              style={{ cursor: "pointer" }}
              onClick={() => navigate.push(`/contact-us`)}
            >
              <FlipWords
                className="font-bold text-[34px] md:text-5xl xl:text-[70px] whitespace-nowrap"
                border={6}
                word="Got A Project?"
              />{" "}
              <Image
                className="w-[48px] h-[48px]  lg:w-24 lg:h-24"
                src={"/illustrations/briefcase.svg"}
                alt=""
                height={48}
                width={48}
              />
            </div>
          </div>

          <Separator
            className="block lg:hidden bg-[#525252] mt-10 lg:my-10"
            orientation="horizontal"
          />
        </div>
      </div>
    </div>
  );
}

export default OurWorkSection;