/* eslint-disable react/no-unescaped-entities */
"use client"

import HeroHeader from '@/components/sections/HeroHeader';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import TestimonialsSection from './_components/testimonials';
import OurStatsRightSection from '@/components/sections/ourStatsRightSection';
import LetsCollab from '../../_components/letsCollab';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import LottieAnimation from '../../_components/lottiePlayer';


const images = [
  '/aboutus/o4.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o4.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o3.png',
  '/aboutus/o3.png',
  '/aboutus/o4.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o4.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o3.png',
  '/aboutus/o3.png',
  '/aboutus/o4.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o4.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o3.png',
  '/aboutus/o3.png',
  '/aboutus/o4.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o4.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o3.png',
  '/aboutus/o3.png',
  '/aboutus/o4.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o4.jpg',
  '/aboutus/o6.jpg',
  '/aboutus/o5.jpg',
  '/aboutus/o3.png',
  
];

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full max-w-[900px] mx-auto my-14 overflow-hidden">
      <div
        className="whitespace-nowrap transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Carousel Image ${index + 1}`}
            width={900}
            height={500}
            className="inline-block w-full"
          />
        ))}
      </div>
    </div>
  );
}


function AboutUs() {
  return (
    <div className='px-[30px] md:px-20'>
      <div className='w-fit mx-auto pb-[60px] pt-6 sm:py-20'>
        <div className='flex w-fit gap-4 items-center mb-5 mx-auto'>
          <Image src={'/vectors/Union.svg'} alt='' height={30} width={30} />
          <h3 className='text-lg font-normal text-[#525252] sm:text-[26px] 4xl:text-[42px] lg:text-[32px]'>Capabilities</h3>
          <Image src={'/vectors/Union.svg'} alt='' height={30} width={30} />
        </div>

        <div className='font-[900] mx-auto text-3xl lg:text-4xl xl:text-5xl  4xl:text-[80px] text-center mb-5 4xl:mb-12 md:!leading-[50px] lg:!leading-[60px] xl:!leading-[75px] 4xl:!leading-[112px] px-10 xl:px-20 mt-3.5 hidden md:block'>
          Delivering creative solutions with expert precision, transforming your digital vision into impactful, measurable results and success.
        </div>
        <div className='font-[900] mx-auto text-3xl lg:text-4xl xl:text-5xl  4xl:text-[80px] text-center sm:mb-5 4xl:mb-12 md:!leading-[50px] lg:!leading-[60px] xl:!leading-[75px] 4xl:!leading-[112px] md:px-10 xl:px-20 mt-3.5 block md:hidden !leading-10'>
        Transforming your digital vision into measurable success with creative precision.
        </div>

        <div className='flex justify-center'>
          <LottieAnimation
            animationData={require('@/../public/lottiee/aboutUs/About_Us_Hero_Section.json')}
            noAnimation={true}
            className='max-w-[800px] 4xl:w-[1300px] max-h-[500px]'
          />
        </div>
      </div>

      <div className='mb-[60px] xl:my-20 4xl"my-[120px]'>
        <div className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 4xl:text-6xl font-bold text-black text-center'>
          What Makes Us Awesome
        </div>
        <Separator className='h-px w-full max-w-[250px] bg-[#525252] my-5 mx-auto' />

        <div className='max-w-[1950px] text-[15px] sm:text-lg lg:text-xl 4xl:text-3xl 4xl:!leading-10 mx-auto text-start md:text-center pt-4 xl:pt-10 4xl:pt-14 text-[#525252] '>
          What sets us apart is our strong commitment to excellence and innovation in everything we do. We combine technical expertise with creative flair to deliver outstanding web development, digital marketing, and design solutions that are customized to each client's needs.
        </div>

        <div className='max-w-[1900px] text-[15px] sm:text-lg lg:text-xl 4xl:text-3xl 4xl:!leading-10 mx-auto text-center mt-6 mb-14 text-[#525252] hidden md:block'>
          Our user-focused approach ensures that every project we take on is not only visually appealing but also functional, scalable, and results-driven. We pride on staying ahead of industry trends, using the latest technologies to help our clients succeed in the digital world. Above all, we value strong relationships, transparency, and delivering real, measurable impact.
        </div>
      </div>

      <div className='md:flex md:py-14'>
        <div className='md:w-[49%] md:px-10'>
         <div className='flex flex-row md:flex-col justify-between items-center mb-7'> <LottieAnimation
            animationData={require('@/../public/lottiee/aboutUs/Vision.json')}
            className='max-w-[64px] max-h-[64px]'
          />
          <div className='text-3xl font-bold md:my-6'>Our Vision</div></div>
          <div className='text-[#2B2B2B]  text-[15px] sm:text-lg lg:text-xl 4xl:text-3xl 4xl:!leading-10'>
            Our vision is to lead in the digital world by delivering innovative, user-focused solutions in web development, digital marketing, app development, and UI/UX design. We empower businesses with digital experiences that are visually appealing, functional, and scalable, combining cutting-edge technology with creative strategies to drive growth and positive change for our clients.
          </div>
        </div>
        <Separator
          className='h-auto md:w-px bg-[##525252] p-[.5px] hidden md:block'
          orientation='vertical'
        />
        <Separator
          className='block md:hidden h-px w-full bg-[##525252] mb-12 mt-2.5'
          orientation='horizontal'
        />

        <div className='md:w-[49%] md:px-10'>
        <div className='flex flex-row md:flex-col justify-between items-center mb-7'>    <LottieAnimation
            animationData={require('@/../public/lottiee/aboutUs/Results.json')}
            className='max-w-[64px] max-h-[64px]'
          />
          <div className='text-3xl font-bold   md:my-6'>Our Mission</div></div>
          <div className='text-[#2B2B2B] text-[15px] sm:text-lg lg:text-xl 4xl:text-3xl 4xl:!leading-10'>
            Our mission is to empower businesses with innovative, user-focused websites that blend creativity with functionality. We build visually appealing, responsive solutions designed for growth, tailored to each client's unique needs. Through teamwork and expertise, we strive to be the trusted partner that helps clients thrive in the evolving digital landscape.
          </div>
        </div>

        <Separator
          className='block md:hidden h-px w-full bg-[#D8D8D8] mb-12 mt-2.5'
          orientation='horizontal'
        />
      </div>

      <div className='md:py-14'>
        {/* <div className="flex">
           <Image src={"/aboutus/1.jpg"} alt="" width={500} height={500} style={{
            clipPath:"polygon(280px 10px, calc( 100% - 145px) 34px, 100% 60px, 100% calc( 100% - 85px), calc( 100% - 159px) calc( 100% - 33px), 282px calc( 100% - 10px), 190px calc( 100% - 2px), 189px 0px);"
           }}/>
           <Image src={"/aboutus/2.jpg"} alt="" width={500} height={500} className="" style={{
            clipPath:"polygon(236px 44px, calc( 100% - 94px) 59px, 100% 60px, 100% calc( 100% - 85px), calc( 100% - 109px) calc( 100% - 72px), 250px calc( 100% - 52px), 0px calc( 100% - 2px), 0px 0px);"
           }}/>
        </div> */}

        {/* <Image
          src={'/aboutus/imgGal.svg'}
          alt=''
          width={3000}
          height={1500}
          className='m-auto my-14'
        /> */}

        <div className='md:py-14'>
          <ImageCarousel />
        </div>

        <div className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl 4xl:text-6xl font-bold text-black text-center'>
          Our Vibe
          <Separator className='h-px w-full max-w-[250px] bg-[#525252] my-4 mx-auto' />
        </div>
        <div className='max-w-[1850px] text-[15px] sm:text-lg lg:text-xl 4xl:text-3xl 4xl:!leading-10 mx-auto text-start md:text-center pt-4 xl:pt-10 4xl:pt-14 text-[#525252]'>
          Our vibe is all about creativity, collaboration, and making things happen. We believe in combining fresh ideas with smart strategies to create digital experiences that truly stand out. Whether we're building websites, driving digital marketing campaigns, or designing user experiences, we bring energy and passion to every project. We’re laid-back but focused, professional yet approachable, and always ready to push boundaries. At the heart of it all is our belief in teamwork and innovation, helping our clients succeed while enjoying the journey together. We keep things fun, flexible, and full of possibility.
        </div>
      </div>

      <div className='py-14'>
        <HeroHeader
          hasLottie
          iconPath={require('@/../public/lottiee/aboutUs/What We Offer.json')}
          subText='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.'
          title='What We offer'
          featureText='Strategy. Design. Development.'
          titleClassName='text-3xl 4xl:text-[84px] !leading-[2.5rem] md:!leading-[3rem] lg:!leading-[5rem] 4xl:!leading-[7rem] font-[900]'
          buttonText='Explore Our Services'
        />
      </div>

      <div className='mb-20 md:mb-0'>
        <TestimonialsSection />
      </div>
      <div className='hidden md:block'>
        <OurStatsRightSection />
      </div>
      <div className='mt-[160px] md:mt-0'>
        <LetsCollab
          title='Got a Project'
          substring='We’re a team of creatives who are excited about unique ideas and help companies to create amazing identity by crafting top-notch UI/UX & E-Commerce stores.'
        />
      </div>
      <GetInTouchSection />
    </div>
  );
}

export default AboutUs;
