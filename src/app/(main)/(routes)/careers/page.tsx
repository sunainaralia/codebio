"use client";

import AnimatedButton from "@/components/AnimatedButton";
import Image from "next/image";
import React, { useState } from "react";
import CardsCareers from "./_components/cardsCareers";
import { cn } from "@/lib/utils";
import Recuritprocess from "./_components/recuritprocess";
import LetsCollab from "../../_components/letsCollab";
import { Separator } from "@/components/ui/separator";
import { useRouter } from 'next/navigation';

function CareersPage() {
   const router = useRouter();
  const handleNavigation = () => {
    router.push('/contact-us');
  };
  const recuritmentData = [
    {
      title: "Review Applications & CV’s",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      title: "Interview InVitation",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      title: "The Interview",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      title: "Task",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
    {
      title: "Onboarding",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const jobs = [
    {
      title: "Digital Marketing & SEO Specialist",
      experience: "2+ years",
    },
    {
      title: "Business Development Expert",
      experience: "4+ years",
    },
    {
      title: "Shopify Developer",
      experience: "2+ years",
    },
    {
      title: "WordPress / WooCommerce Developer",
      experience: "2+ years",
    },
    {
      title: "UI/UX Designer",
      experience: "2+ years",
    },
  ];
  return (
    <div className="px-[30px] md:px-20">
      <div className=" pt-[30px] pb-[50px] sm:py-24 md:py-[120px] 3xl:pt-[150px] 3xl:pb-[250px]  ">
        <div className=" mx-auto lg:text-5xl 3xl:text-[56px] 4xl:text-[84px] sm:text-[42px] text-[30px] uppercase font-[900] text-center mb-[15px] sm:mb-6 leading-[40px] sm:leading-[3rem] 4xl:leading-[113px] ">
          CAREERS
        </div>

        <div className="flex w-fit gap-3 sm:gap-4 items-center mx-auto">
          {/* <Image src={"/vectors/Union.svg"} alt="" height={30} width={30} /> */}
          <Image className='hidden sm:block' src={"/vectors/Union.svg"} alt="img" height={30} width={30} />
          <Image className='sm:hidden' src={"/vectors/Union.svg"} alt="img" height={16} width={16} />
          <h3 className="md:text-2xl 3xl:text-3xl 4xl:text-[42px] text-lg text-[#525252]  font-normal">
            Explore Exciting Opportunities
          </h3>
          {/* <Image src={"/vectors/Union.svg"} alt="" height={30} width={30} /> */}
          <Image className='hidden sm:block' src={"/vectors/Union.svg"} alt="img" height={30} width={30} />
          <Image className='sm:hidden' src={"/vectors/Union.svg"} alt="img" height={16} width={16} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-y-[ 100px] gap-10 lg:gap-14 3xl:gap-[100px]">
        <div className=" row-span-2">
          <div className="flex gap-[22px] justify-center lg:justify-start items-center">
            {/* <Image src={"/vectors/Union.svg"} alt="" height={20} width={20} /> */}
            <Image className='hidden lg:block' src={"/vectors/Union.svg"} alt="img" height={36} width={36} />
           
            <h3 className="font-normal text-[#525252] text-lg sm:text-xl lg:text-[28px] 4xl:text-[42px]">Job Openings</h3>
          </div>

          <div className="lg:text-5xl 4xl:text-[120px] text-[36px] sm:text-[42px] leading-[48px] sm:leading-[4rem] lg:leading-[5rem] 4xl:leading-[10rem] uppercase font-[900] text-black my-6 4xl:mt-9 4xl:mb-[50px] text-center lg:text-start">Join Team</div>

          <div className="text-center lg:text-start   ">
            <p className="text-sm sm:text-lg  md:text-xl  4xl:text-[30px]  4xl:leading-10">Please send your resume here:</p>
            <a
              href="mailto:career@codebiosis.com"
              className="text-2xl md:text-3xl 3xl:text-4xl 4xl:text-[54px] 4xl:leading-[100px] font-bold underline underline-offset-8 mt-1 "
            >
              contact@codebiosis.com
            </a>
          </div>
        </div>

        {jobs.map((job, index) => (
          <div
            // mt-[120px]
            className="col-span-1 text-[#525252] mt-5 border-b border-[#D8D8D8] flex justify-between lg:items-center  "
            key={index}
          >
            <div className="">
              <h3 className="font-bold text-xl  md:text-2xl 2xl:text-3xl 4xl:text-4xl 4xl:leading-[60px] ">{job.title}</h3>
              <div className="font-normal text-sm sm:text-lg  md:text-xl  4xl:text-[30px]  4xl:leading-[60px] pb-5 4xl:pb-10 mt-2.5 lg:mt-0 ">{"(" + job.experience + " Experience)"}</div>
            </div>{" "}
            <div className="">
              <Image className="mt-2 lg:mt-0" src={"/careers/goto.svg"} alt="img" height={12} width={12} />
            </div>
          </div>
        ))}
        <div className="col-span-1 4xl:pt-7 ">
          <div className="flex w-full h-full justify-center items-center">
            <AnimatedButton onClick={handleNavigation} className="w-fit h-fit">Get in Touch</AnimatedButton>
          </div>
        </div>
      </div>

      <div className="pt-[100px] md:pt-[150px] 3xl:pt-[250px] ">
        <CardsCareers />
      </div>

      <div className="flex pt-[70px] md:pt-[150px] 3xl:pt-[350px] justify-between item s-center flex-wrap flex-col max-lg:gap-y-10 lg:flex-row ">
        <div className="lg:hidden r">
          <div className=" text-[34px] lg:text-4xl 4xl:text-6xl  text-black mb-3 text-wrap line-clamp-2 font-black text-center">Recuritment Process</div>
          <Separator className="h-px max-w-[120px] lg:max-w-[250px] bg-[#525252] mt-1 sm:mt-6 mb-[60px]  mx-auto" />
        </div>
        <div className=" lg:w-[49%]">
          <Recuritprocess data={recuritmentData[currentCard]} />
        </div>
        <div className=" lg:w-[42%] 4xl:w-[48%]">
          <div className="hidden lg:block">
            <div className="text-[30px] sm:text-[34px] lg:text-4xl 4xl:text-6xl  text-black mb-3 text-wrap line-clamp-2 font-black text-center">Recuritment Process</div>
            <Separator className="h-px max-w-[120px] lg:max-w-[250px] bg-[#525252] mt-1 sm:mt-6 mb-[60px]  mx-auto" />
          </div>
          <div className="">
            {recuritmentData.map((item, index) => (
              <div className={cn("flex gap-4 items-center my-6 pl-5 border-l border-[#525252] cursor-pointer font-normal text-lg  md:text-xl  4xl:text-[30px] 3xl:leading-[3rem] 4xl:leading-[100px] text-[#2B2B2B]", currentCard === index && " text-xl md:text-2xl 4xl:text-[36px] font-bold 2xl:leading-[3rem] 4xl:leading-[100px] ")} onClick={() => setCurrentCard(index)} key={index}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <LetsCollab title="Meet the team" className="" substring="From creative thinkers to technical experts, our team is united by a passion for innovation and a dedication to excellence. Get to know the faces behind our success stories, and discover what drives each member to contribute their unique skills and perspectives to our mission." subGHeading="Brilliant Minds Behind CodeBiosis" />
      </div>
      <Separator className='h-px w-full bg-[#525252] mt-14 mx-auto' />
    </div>
  );
}

export default CareersPage;
