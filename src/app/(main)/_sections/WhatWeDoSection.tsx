/* eslint-disable react/no-unescaped-entities */
'use client';
import AnimatedButton from '@/components/AnimatedButton';
import SolutionCard from '@/components/SolutionCard';
import { useRouter } from 'next/navigation';
import React from 'react';


const solutions = [
  {
    title: 'Web Development',
    icon: '/lottiee/HomePage/web-dev.svg',  
    cardStyling:"border-b "

  },
  {
    title: 'Digital Marketing',
    icon: '/lottiee/HomePage/dm.svg',
    cardStyling:"border-b border-l "
  },
  {
    title: 'UX/UI Design & Graphic Design',
    icon: '/lottiee/HomePage/ui.svg',
    
  },
  {
    title: 'AI Services',
    icon: '/lottiee/HomePage/ai.svg',
    
    cardStyling:"border-l "
  },
];

// function WhatWeDoSection() {
//   return (
//     <div className='py-14 flex flex-col justify-center md:items-center md:text-center gap-4'>
//       <h3 className='text-xl font-medium'>What We do</h3>
//       <h2 className='text-3xl pt-2 font-bold hidden md:block'>
//         We provide enterprise-level
//         <br /> solutions to reshape your business.
//       </h2>
//       <h2 className='block md:hidden font-black pt-2 text-[36px] leading-[3rem]'>
//         We provide enterprise-level solutions to reshape your business.
//       </h2>
//       <div className=' w-full grid grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  md:gap-8 py-6'>
//         {solutions.map((solution, index) => (
//           <SolutionCard key={index} {...solution} />
//         ))}
//       </div>

//       <p className='text-[#2B2B2B] text-lg font-normal hidden md:block'>
//         At Codebiosis, it's our mission to transform your brand into its best digital version. We focus on a customer-centric <br /> approach to create engaging, interactive, and immersive experiences that deliver top-notch results.
//       </p>
//       <p className='text-[#2B2B2B] text-lg font-normal hidden md:block'>
//         For over a year, we’ve been delivering top-notch web design services, graphic design, brand identity, and commerce. Each project is<br /> customized to fit your business's unique needs. We start by understanding your products, target audience, and competitors to create a web<br /> design or brand identity that stands out.
//       </p>
//       <p className='text-[#2B2B2B] text-lg font-normal text-center block md:hidden'>
//         At Codebiosis, it's our mission to transform your brand into its best digital version. We focus on a customer-centric
//         approach to create engaging, interactive, and immersive experiences that deliver top-notch results.
//         <br></br>
//         For over a year, we’ve been delivering top-notch web design services, graphic design, brand identity, and commerce. Each project is
//         customized to fit your business's unique needs. We start by understanding your products, target audience, and competitors to create a web
//         design or brand identity that stands out.
//       </p>

//       <AnimatedButton className='hidden md:flex'>
//         More About Expertise
//       </AnimatedButton>
//       <div className='block md:hidden'>
//         <AnimatedButton className='mx-auto'>
//           More About Expertise
//         </AnimatedButton>
//       </div>
//     </div>
//   );
// }

function WhatWeDoSection() {

  const router = useRouter();

  const handleNavigation = () => {
    router.push('/services');
  };

  return (
    <div className="py-[34px] 2xl:pt-28 flex flex-col justify-center md:items-center md:text-center px-[30px] md:px-0">
      <h3 className="text-lg font-normal text-[#525252] sm:text-[26px] 4xl:text-[42px] lg:text-[32px]">What We do</h3>
      <h2 className=" text-[36px] md:text-5xl lg:text-[50px] 4xl:text-[84px]  lg:!leading-[70px] 4xl:!leading-[7rem] font-bold hidden lg:block mt-[10px]">
        We provide enterprise-level
        <br /> solutions to reshape your business.
      </h2>
      <h2 className="block lg:hidden font-black pt-3 text-[36px] sm:text-5xl sm:!leading-[4rem]">
        We provide enterprise-level solutions to reshape your business.
      </h2>
      <div className="w-full grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] lg:gap-8 4xl:py-[54px]  md:py-3  md:mt-24 lg:mt-24 mt-[50px]">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} cardStyling={solution.cardStyling || ''} title={solution.title} icon={solution.icon} />
        ))}
      </div>

      <p className="text-[#2B2B2B] text-lg  md:text-[20px] 4xl:text-[30px] 4xl:leading-10 font-normal hidden md:block  lg:mt-[65px] mt-[50px]">
        At Codebiosis, it's our mission to transform your brand into its best digital version. We focus on a customer-centric <span className='2xl:block'>approach to create engaging, interactive, and immersive experiences that deliver top-notch results.</span>
      </p>
      <p className="text-[#2B2B2B] text-lg md:text-[20px] 4xl:text-[30px] 4xl:leading-10 font-normal hidden md:block mt-10 ">
        For over a year, we’ve been delivering top-notch web design services, graphic design, brand identity, and commerce. Each project iscustomized to fit your business's unique needs. We start by understanding your products, target audience, and competitors to create a web design or brand identity that stands out.
      </p>
      <p className="text-[#2B2B2B] text-lg  font-normal md:text-center block md:hidden mt-[50px]">
        At Codebiosis, it's our mission to transform your brand into its best digital version. We focus on a customer-centric approach to create engaging, interactive, and immersive experiences that deliver top-notch results.
      </p>

      <AnimatedButton className="hidden md:flex mt-[70px]" onClick={handleNavigation}>
        More About Expertise
      </AnimatedButton>

      <div className="block md:hidden">

        <AnimatedButton className="mx-auto" onClick={handleNavigation}>
          More About Expertise
        </AnimatedButton>

      </div>
    </div>
  );
}

export default WhatWeDoSection;
