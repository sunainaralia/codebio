"use client";

import AnimatedButton from "@/components/AnimatedButton";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const CertifiedPartnersSection = () => {
  const PartnerImagesMobile = [
    {
      logos: [
        {
          img: [
            {
              src: "/Home_Page/homepage_images/zoho.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/spotifyplus.png",
              alt: "OpenAI",
            },

            {
              src: "/Home_Page/homepage_images/pipedrive.png",
              alt: "OpenAI",
            },
          ],
        },
        {
          img: [
            {
              src: "/Home_Page/homepage_images/hub.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/google-enalystic.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/google-partners.png",
              alt: "OpenAI",
            },
          ],
        },
      ],
    },
    {
      logos: [
        {
          img: [
            {
              src: "/Home_Page/homepage_images/photoshop.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/salesforce.png",
              alt: "OpenAI",
            },

            {
              src: "/Home_Page/homepage_images/semurus.png",
              alt: "OpenAI",
            },
          ],
        },
        {
          img: [
            {
              src: "/Home_Page/homepage_images/wordpress.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/zoomnifo.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/adobe.png",
              alt: "OpenAI",
            },
          ],
        },
      ],
    },

    {
      logos: [
        {
          img: [
            {
              src: "/Home_Page/homepage_images/Ae.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/appolo.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/callrail.png",
              alt: "OpenAI",
            },
          ],
        },
        {
          img: [
            {
              src: "/Home_Page/homepage_images/figma.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/google-console.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/Ai.png",
              alt: "OpenAI",
            },
          ],
        },
      ],
    },

    {
      logos: [
        {
          img: [
            {
              src: "/Home_Page/homepage_images/klivia.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/rasa.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/mailchimp.png",
              alt: "OpenAI",
            },
          
          ],
        },
        {
          img: [
            {
              src: "/Home_Page/homepage_images/framer.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/Frame 4679@2x.png",
              alt: "OpenAI",
            },
            {
              src: "/Home_Page/homepage_images/aws.png",
              alt: "OpenAI",
            },
          ],
        },
      ],
    },
  ];

  const partners = [
    {
      src: "/Home_Page/homepage_images/home-certified-partners-img1.png",
      alt: "OpenAI",
    },
    { src: "/Home_Page/homepage_images/photoshop.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/pipedrive.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/salesforce.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/semurus.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/spotifyplus.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/wordpress.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/zoho.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/zoomnifo.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/adobe.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/Ae.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/appolo.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/callrail.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/figma.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/google-enalystic.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/google-partners.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/google-console.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/hub.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/Ai.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/klivia.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/rasa.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/mailchimp.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/framer.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/Frame 4679@2x.png", alt: "OpenAI" },
    { src: "/Home_Page/homepage_images/aws.png", alt: "OpenAI" },
  ];

  return (
    <div id="certifiedPartners">
      <div className="lg:mt-44">
        <div className="md:flex w-full justify-between items-center hidden">
          <div className="flex gap-4 items-center">
            <Image src={"/vectors/Union.svg"} alt="" height={30} width={30} />

            <h3 className="text-lg sm:text-xl lg:text-3xl xl:text-[42px] text-[#525252] font-normal ">
              Certified Partners
            </h3>
          </div>

          <AnimatedButton className="mt-0 hidden md:flex">
            Our Strengths
          </AnimatedButton>
        </div>

        <Separator className="h-px w-full bg-[#D8D8D8] my-8 hidden md:block" />

        <div className="overflow-hidden mt-14 lg:mt-32 hidden md:flex">
          <div className="grid grid-cols-3 xl:grid-cols-5 scale-105">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex justify-center items-center border-r-[0.5px] border-b-[0.5px] border-black px-12 py-6`}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={399}
                  height={136}
                  className="object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 20 }, // For tablets
              1280: { slidesPerView: 3, spaceBetween: 30 }, // For desktops
            }}
            className="w-full pb-10"
          >
            {PartnerImagesMobile.map((partners, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid grid-cols-2 gap-0.5 overflow-hidden">
                  {partners.logos.map((logo, logoIndex) => (
                    <React.Fragment key={logoIndex}>
                      {logo.img.map((item, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="flex items-center justify-center border-l border-b border-black p-5 scale-105"
                        >
                          <Image
                            src={item.src}
                            alt='logos'
                            width={100}
                            height={72}
                            className="object-contain grayscale w-[156px] h-[72px]"
                          />
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center items-center mb-20">
          <AnimatedButton className="md:hidden flex mt-9">
            Our Strengths
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default CertifiedPartnersSection;
