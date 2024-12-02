import { BlogCards } from "@/components/data/blog";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

const BlogCard = ({ title, description, icon, id, time }: BlogCards) => {
  return (
    <div className=" my-[30px] md:my-[60px] 2xl:mt-[150px] 2xl:mb-[74px] 3xl:mb-[86px] cursor-pointer px-2 flex flex-col justify-between ">

      <div className="h-[200px] lg:h-[375px] max-w-[600px]">
        <Image
          src={icon}
          alt=""
          width={600}
          height={375}
          className="rounded-xl w-full h-full object-cover "
        />
      </div>
      <div>
        <div className="xl:text-2xl  4xl:text-[32px] text-[18px] font-[900] my-[13px] 2xl:my-[23px] ">{title.slice(0, 40)}....</div>
      </div>
      <div className="flex text-[#8D8D8D] xl:text-lg 4xl:text-[24px] text-[14px] font-normal items-center ">
        {description} <Separator className="w-px h-4 bg-[#D8D8D8] mx-4" />{" "}
        {time}
      </div>
    </div>

  );
};

export default BlogCard;
