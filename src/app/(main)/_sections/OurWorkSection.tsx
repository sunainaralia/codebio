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
  Medimix,
  ourWorkAlmondImg,
  ourWorkMainImg,
  tataSonet,
  VLCC,
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
      img: "/ourWork/work-01.webp",
      Design_img: "/ourWork/almond_house_design.png",
      Colorpalette_img: "/ourWork/almond_color.png",
      Font_img:"/ourWork/almond_font.png",
      id: "works1",
      name: "Almond House",
      description: "Food & Confectionery",
      strategy: "Local SEO Focus, CRM Integration",
      design: "UI/UX, Backend Optimization",
      imageArr:ourWorkAlmondImg,
      cardstyling:"bg-[#E46C38]",
      mainDescription:'We redesigned their website with an engaging UI/UX and implemented backend optimizations to improve speed and user experience.',
      March_2021:"Almond House is a renowned name in the food and confectionery industry, known for its premium quality sweets and savory items, especially during festive seasons.",
      Their_Problem:"Almond House’s website was outdated and faced challenges with slow speed and low order volumes. Their site lacked modern design and aesthetic hinting at the heritage",
    How_We_Solved_It:"The new design made the website 40% faster, which improved user experience and contributed to a 50% increase in organic traffic. Integrating Zoho CRM and ERP systems helped streamline order management and customer service, boosting efficiency during peak seasons.", 
    What_Client_Said:"CodeBiosis transformed our digital presence with an intuitive, secure, and high-performing website. Our clients love the new interface, and we've seen a remarkable increase in client inquiries",
    },
    {
          img: "/ourWork/work-02.webp",
          Design_img: "/ourWork/medimix_design.png",
          Colorpalette_img:"/ourWork/medimix_color.png",
          Font_img:"/ourWork/medimix_font.png",
          id: "works2",
          name: "Medimix",
          imageArr: Medimix,
          description: "Ayurvedic Health & Wellness",
          strategy: "SEO Strategy, Social Media Campaigns",
          cardstyling:"bg-[#DEF4E6]",
          design: "Blended UI/UX, eCommerce Platform",
          mainDescription: `We built an eCommerce platform that reflects their brand heritage and enhances user experience and streamlined their UI/UX to improve client interaction.`,
          March_2021:"Medimix is a trusted name in Ayurvedic skincare and wellness products, blending traditional Ayurvedic practices with modern science.",
          Their_Problem:"Medimix needed a site that blended traditional Ayurvedic values with modern digital functionality. Additionally they wanted a modern and light weight aesthetic.",
        How_We_Solved_It:"We grew organic traffic by 45% and sales by 30% with targeted SEO and social media efforts. CRM & ERP integration streamlined operations and customer relations.",
        What_Client_Said:"CodeBiosis transformed our digital presence with an intuitive, secure, and high-performing website. Our clients love the new interface, and we've seen a remarkable increase in client inquiries",
        },
    {
         img: "/ourWork/work-03.webp",
         Design_img: "/ourWork/vlcc_design.png",
         Colorpalette_img:"/ourWork/vlcc_color.png",
         Font_img:"/ourWork/vlcc_font.png",
         id: "works3",
         name: "VLCC",
         imageArr: VLCC,
         description: "Food & Confectionery",
         strategy: "Shopping Integration, CRM",
         cardstyling:"bg-[#F6CAA0]",
         design: "UI/UX, eCommerce Features",
         mainDescription: `We overhauled their site with a luxurious UI/UX design and implemented eCommerce features to boost engagement and conversions.`,
         March_2021:"VLCC is a leader in the beauty and wellness industry, offering a wide range of products and services aimed at enhancing personal beauty and health.",
         Their_Problem:"VLCC’s online store had several performance issues, resulting in low conversions and poor user engagement.",
       How_We_Solved_It:"We provided custom-built eCommerce features that increased user retention and AOV by 25%. SEO strategies helped grow organic traffic by 60%, leading to higher conversions and better customer engagement. HubSpot integration enhanced customer data management and marketing efforts.",
       What_Client_Said:"CodeBiosis transformed our digital presence with an intuitive, secure, and high-performing website. Our clients love the new interface, and we've seen a remarkable increase in client inquiries",
       },
    {
      img: "/works/work-4.png",
      id: "works4",
       cardstyling:"bg-[#D7165D]",
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
              <WorkCards {...works[1]} imageArr={ourWorkAlmondImg} />
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

          <div className={`lg:min-w-[100px]  lg:w-[calc(50%-2px)] `}>
            <Link href="/our-work/works4" target="_blank">
              <WorkCards {...works[2]} imageArr={Medimix} />
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
              <WorkCards {...works[1]} imageArr={kotakBank} />
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
              <WorkCards {...works[2]} imageArr={tataSonet} />
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
              <WorkCards {...works[3]} imageArr={VLCC} />
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