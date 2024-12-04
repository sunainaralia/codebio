import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <div className="w-full mt-12 md:mt-20 4xl:mt-[200px] hidden lg:block">
      <div className="w-full text-center">
        <div className="text-[30px] lg:text-5xl 4xl:text-[72px]  font-[900] uppercase mb-3 lg:mb-5 ">Awards</div>
        <div className="text-[#8D8D8D] py-3 border-t border-[#8D8D8D] w-fit mx-auto text-xl lg:text-2xl 4xl:text-[34px]">
          Awards & Honors
        </div>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {/* <div className="flex mt-16 4xl:mt-36 4xl:mb-[300px]"> */}
      <div className="p-5 xl:p-10 4xl:p-16 flex flex-wrap gap-6 border-x border-[#525252]">
          <Image
            src="/services/award_01-1.svg"
            alt=""
            width={100}
            height={100}
            className=" lg:min-h-[100px] 4xl:min-w-[132px]"
          />
          <div className=" text-sm sm:base md:text-xl lg:text-xl 4xl:text-3xl font-normal 4xl:!leading-10 text-[#8D8D8D]">
            Currently have 36 active media campaigns across 24 projects, moving
            through a unique approach.
          </div>
        </div>
        <div className="p-5 xl:p-10 4xl:p-16 flex flex-col gap-6  border-x border-[#525252]">
          <Image
            src="/services/award_03-1.svg"
            alt=""
            width={100}
            height={100}
            className=" lg:min-h-[100px] 4xl:min-w-[192px]"
          />
          <div className=" text-sm sm:base md:text-xl lg:text-xl 4xl:text-3xl font-normal 4xl:!leading-10 text-[#8D8D8D]">
            Currently have 36 active media campaigns across 24 projects, moving
            through a unique approach.
          </div>
        </div>
        <div className="p-5 xl:p-10 4xl:p-16 flex flex-col gap-6  border-x border-[#525252]">
          <Image
            src="/services/award_02-1.svg"
            alt=""
            width={100}
            height={100}
            className="min-h-[100px] 4xl:min-w-[190px]"
          />
          <div className=" text-sm sm:base md:text-xl lg:text-xl 4xl:text-3xl font-normal 4xl:!leading-10 text-[#8D8D8D]">
            Currently have 36 active media campaigns across 24 projects, moving
            through a unique approach.
          </div>
        </div>
      {/* </div> */}
    </div></div>
  );
};

export default Awards;
