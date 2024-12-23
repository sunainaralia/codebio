"use client";

import { ArrowBigDown, MapPinIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import map from "../../../public/Home_Page/homepage_images/map.png";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import pinGray from "@/../public/pin-g.svg";
import pin from "@/../public/pin.svg";

function OurOfficeLocatedSection() {
  const [showMap, setShowMap] = useState("usa");

  const Pin = () => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M37.8913 62.3156C40.8336 60.8921 59.375 51.2517 59.375 34.375C59.375 22.2938 49.5812 12.5 37.5 12.5C25.4188 12.5 15.625 22.2938 15.625 34.375C15.625 51.2517 34.1664 60.8921 37.1087 62.3156C37.3651 62.4397 37.6349 62.4397 37.8913 62.3156ZM37.5 43.75C42.6777 43.75 46.875 39.5527 46.875 34.375C46.875 29.1973 42.6777 25 37.5 25C32.3223 25 28.125 29.1973 28.125 34.375C28.125 39.5527 32.3223 43.75 37.5 43.75Z"
          fill="black"
          className="cursor-pointer"
        />
      </svg>
    );
  };

  const PinGray = () => {
    return (
      <svg
        width={20}
        height={20}
        fill="none"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3966 33.1429C22.4381 32.1225 31.6667 27.029 31.6667 18.3337C31.6667 11.8903 26.4434 6.66699 20 6.66699C13.5567 6.66699 8.33337 11.8903 8.33337 18.3337C8.33337 27.029 17.562 32.1225 19.6035 33.1429C19.8583 33.2702 20.1418 33.2702 20.3966 33.1429ZM20 23.3337C22.7615 23.3337 25 21.0951 25 18.3337C25 15.5722 22.7615 13.3337 20 13.3337C17.2386 13.3337 15 15.5722 15 18.3337C15 21.0951 17.2386 23.3337 20 23.3337Z"
          fill="#E0E0E0"
          className="cursor-pointer"
        />
      </svg>
    );
  };
  return (
    <div >
      <div className="text-lg font-normal text-[#525252] sm:text-xl 4xl:text-[42px] lg:text-[22px] text-center">
        Our Offices
      </div>
      <div className=" text-[36px] md:text-5xl lg:text-[50px] 4xl:text-[84px]  lg:!leading-[70px] 4xl:!leading-[7rem] font-bold block mt-[10px] text-center">
        We&#39;re Located At
      </div>

      <div className="relative">
        <Image
          src={map}
          width={1600}
          height={1200}
          alt=""
          className=" mx-auto py-16"
        />
      </div>

      {/* <ComposableMap
        focusable={false}
        height={1200}
        max={500}
        className="my-10 max-w-[1600px] mx-auto h-[1000px]"
        markerHeight={40}
      >
      
        <Geographies geography="/feature.json" focusable={false}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#525252"
                fill="#525252"
                focusable={false}
                className="focus:border-none focus:outline-none"
              />
            ))
          }
        </Geographies>
        <Marker
          coordinates={showMap === "kol" ? [76.5, 32.9] : [78.99997, 27.9]}
          onClick={() => {
            setShowMap("kol");
          }}
          height={40}
        >
          {showMap === "kol" ? <Pin /> : <PinGray />}
        </Marker>
        <Marker
          coordinates={
            showMap === "usa" ? [-92.15715, 50.781082] : [-84.15715, 44.781082]
          }
          className="focus:border-none focus:outline-none"
          onClick={() => {
            setShowMap("usa");
          }}
        >
          {showMap === "usa" ? <Pin /> : <PinGray />}
        </Marker>
        <Marker
          coordinates={showMap === "blr" ? [71.99997, 22] : [74.99997, 18]}
          onClick={() => {
            setShowMap("blr");
          }}
        >
          {showMap === "blr" ? <Pin /> : <PinGray />}
        </Marker>
      </ComposableMap> */}

      <div className="flex md:text-center md:m-auto 3xl:px-10 justify-center ">
        <div className="flex flex-col xl:flex-row xl:border-b-[.5px] xl:border-[#525252] " >
          <div
            className={`xl:px-6 mt-6 xl:w-1/3 sm:mt-10 xl:mt-0 pb-5 sm:pb-9 xl:pb-14 4xl:px-[100px] max-xl:border-b-[.5px] max-xl:border-[#525252] xl:border-r-[.5px] xl:border-[#525252] ${showMap === "blr" && "!opacity-100"
              } transition-all duration-300`}
          >
            <div className="text-2xl font-[900] md:text-3xl 4xl:text-5xl">USA</div>
            <div className="mt-1 md:mt-3 text-sm md:text-xl 4xl:text-[28px] 4xl:!leading-9 font-medium">
              16192 Coastal, Lewes, Delaware 19958, Sussex County, USA
            </div>
          </div>
          <div
            className={`xl:px-6 mt-6 xl:w-1/3 sm:mt-10 xl:mt-0 pb-5 sm:pb-9 xl:pb-14 4xl:px-[100px] max-xl:border-b-[.5px] max-xl:border-[#525252] xl:border-r-[.5px] xl:border-[#525252]  ${showMap === "blr" && "!opacity-100"
              } transition-all duration-300`}
          >
            <div className="text-2xl font-[900] md:text-3xl 4xl:text-5xl">Bengaluru</div>
            <div className="mt-1 md:mt-3 text-sm md:text-xl 4xl:text-[28px] 4xl:!leading-9 font-medium">
              NO.11 (407/52) 28TH CROSS, 11th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011

            </div>
          </div>
          <div
            className={`xl:px-6 mt-6 xl:w-1/3 sm:mt-10 xl:mt-0 pb-5 sm:pb-9 xl:pb-14 4xl:px-[100px] max-xl:border-b-[.5px] max-xl:border-[#525252]  ${showMap === "blr" && "!opacity-100"
              } transition-all duration-300`}
          >
            <div className="text-2xl font-[900] md:text-3xl 4xl:text-5xl">Lucknow</div>
            <div className="mt-1 md:mt-3 text-sm md:text-xl 4xl:text-[28px] 4xl:!leading-9 font-medium">
              302-03, 3rd Floor, Aakriti Tower, Vidhan Sabha Marg, Hazratganj, Lucknow, Uttar Pradesh 226018
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurOfficeLocatedSection;
