import { SocialButton } from "@/app/(main)/_components/navigationbar";
import { TeamInterface } from "@/components/data/team";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const TeamCards = ({
  name,
  image,
  description,
  icon,
  insta,
  linkedin,
  role,
  experience,
  tags,
}: TeamInterface) => {
  const socials = {
    linkedin: {
      darkIcon: "/icons/linkdin-social-icon.svg",
      lightIcon: "/icons/linkdin-social-icon.svg",
    },
    insta: {
      darkIcon: "/icons/insta-social-icon.svg",
      lightIcon: "/icons/insta-social-icon.svg",
    },
  };

  return (
    <div className="w-full sm:w-[90%]">
      <div className="flex justify-between gap-24">
        <div className="">
          <Image src={image} alt="img" width={200} height={200} />
        </div>

        <div className="flex items-start justify-between 4xl:gap-10 w-[400px] sm:w-[200px] lg:w-[350px] 2xl:w-[300px]">
          <div className="flex  text-[#000] font-bold text-2xl 4xl:text-[60px] lg:text-[30px] xl:text-4xl items-center gap-2 md:gap-5 4xl:gap-8">
            {experience}{" "}
            <span className="text-sm 3xl:text-[20px] lg:text-[17px] font-medium lg:leading-[27px]">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Image src={icon} className="3xl:w-[65px] 3xl:h-[100px]  " alt="img" width={30} height={30} />
            <SocialButton
              title={name}
              darkIcon={socials.linkedin.darkIcon}
              link={linkedin}
            />
            <SocialButton
              title={name}
              darkIcon={socials.insta.darkIcon}
              link={insta}
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="text-2xl md:text-3xl 4xl:text-[60px] 4xl:leading-[80px] font-semibold capitalize 3xl:mt-[49px] mt-5 sm:mt-[30px]">{name}</div>
        <div className="font-normal 4xl:text-[30px] lg:text-[22px] text-[16px] mt-[15px] text-[#000000] 3xl:leading-[40px]">{role}</div>
        <div className="text-[#525252] 2xl:leading-[32px] text-[12px] 4xl:text-[24px] lg:text-[18px] 3xl:mt-[45px] lg:mt-[30px]">{description}</div>
      </div>

      <div className="w-full mt-6 3xl:mt-[45px]">
        <div className="4xl:text-[40px] lg:text-[28px] text-[20px] font-bold">Expert in:</div>
        <div className="flex gap-2.5 flex-wrap 3xl:mt-[40px] lg:mt-[30px] mt-[25px]  4xl:w-[900px] 3xl:w-[700px] w-full">
          {
            tags.map((tag, index) => (
              <Button variant={"outline"} key={index} className="text-xs lg:text-lg 4xl:text-xl rounded-[40px]">
                {tag}
              </Button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
