'use client';

import AnimatedButton from '@/components/AnimatedButton';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import LottieAnimation from '../_components/lottiePlayer';
import { useRouter } from 'next/navigation';

function OurApproachSection() {
  
  const router = useRouter();

  const handleWorkNavigation = () => {
    router.push('/services');
  };
  return (
    <div className='lg:flex justify-center flex-col md:flex-row pb-14 md:pb-14 lg:mt-44 4xl:pt-28 4xl:gap-7 gap-4 4xl:h-[900px]'>
      <div className='h-full w-full flex flex-col justify-center items-start col-span-1 gap-2 md:gap-4 '>
        <div className='text-lg font-normal text-[#525252] sm:text-xl lg:text-[28px] 4xl:text-[42px]'>
          Our Approach
        </div>
        <h1 className=' text-[34px] md:text-6xl lg:text-[50px] 4xl:text-[84px]  md:!leading-[5rem] 4xl:!leading-[7rem] font-[900]'>
        Build. Innovate. Grow.
        </h1>
        <div className='flex h-full w-full my-16 lg:hidden flex-col justify-center items-center col-span-1 relative'>
          <LottieAnimation
            animationData={require('@/../public/lottiee/HomePage/Our_Approach.json')}
            className='max-h-[400px] max-w-[400px]'
          />
        </div>
        <p className='text-[15px] md:text-lg 4xl:text-3xl text-center lg:text-start text-[#2B2B2B]'>
        We build strong digital foundations, innovate with the latest technology, and drive growth by boosting traffic and engagement. Our mission is to turn your digital goals into real-world success.
        </p>
        <div className='flex lg:block justify-center items-center w-full pb-3 max-sm:mt-9'>
          <AnimatedButton onClick={handleWorkNavigation}>Our Process</AnimatedButton>
        </div>
      </div>
      <Separator className='h-full w-px bg-[#525252] min-[2100px]:ms-20' />
      <div className='hidden h-full w-full lg:flex flex-col justify-center items-center col-span-1 relative'>
        <LottieAnimation
          animationData={require('@/../public/lottiee/HomePage/Our_Approach.json')}
          className='max-h-[400px] max-w-[400px]'
        />
      </div>

      <Separator className='block lg:hidden h-px w-full bg-[#D8D8D8] mt-10 ' />
    </div>
  );
}

export default OurApproachSection;
