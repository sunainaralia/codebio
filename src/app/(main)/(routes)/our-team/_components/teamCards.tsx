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
      darkIcon: "/icons/LinkedIn.svg",
      lightIcon: "/icons/LinkedIn_light.svg",
    },
    insta: {
      darkIcon: "/icons/Instagram.svg",
      lightIcon: "/icons/Instagram_light.svg",
    },
  };

  return (
    <div >
      <div className="flex justify-between gap-24">
        <div className="">
          <Image src={image} alt="" width={200} height={200} />
        </div>

        <div className="flex items-start  justify-between w-[300px]">
          <div className="flex  text-[#000] font-semibold text-2xl 3xl:text-[60px] lg:text-[30px] items-center gap-8">
            {experience}{" "}
            <span className="text-sm 3xl:text-[20px] lg:text-[17px]  leading-[27px]">
              Years of Experience
            </span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <Image src={icon} alt="" width={30} height={30} />
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
        <div className="text-4xl 3xl:text-[60px] lg:text-[40px] font-semibold capitalize 3xl:mt-[49px] mt-[30px]">{name}</div>
        <div className="font-medium 3xl:text-[30px] lg:text-[22px] text-[16px] mt-[15px] text-[#000000] 3xl:leading-[40px]">{role}</div>
        <div className="text-[#525252] 2xl:leading-[32px] text-[12px] 3xl:text-[24px] lg:text-[18px] max-w-[650px] 3xl:mt-[45px] lg:mt-[30px]">{description}</div>
      </div>

      <div className="3xl:max-w-[820px] xl:w-[400px] lg:w-[700px] md:w-[600px]  3xl:mt-[45px] mt-[30px] 3xl:mb-[100px] lg:mb-[50px] mb-[30px]">
        <div className="3xl:text-[40px] lg:text-[28px] text-[20px]">Expert in:</div>
        <div className="flex gap-1 flex-wrap 3xl:mt-[40px] lg:mt-[30px] mt-[25px] ">
            {
                tags.map((tag, index) => (
                    <Button variant={"outline"} key={index} className="text-[10px] me-[14px] mt-[10px] lg:text-[20px] rounded-3xl">
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
