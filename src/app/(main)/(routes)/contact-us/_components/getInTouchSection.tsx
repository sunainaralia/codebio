'use client';

import { SocialButton } from '@/app/(main)/_components/navigationbar';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const GetInTouchSection = () => {
  const socials = [
    {
      title: 'linkedin',
      darkIcon: '/icons/LinkedIn.svg',
      lightIcon: '/icons/LinkedIn_light.svg',
      link: '#',
    },
    {
      title: 'Instagram',
      darkIcon: '/icons/Instagram.svg',
      lightIcon: '/icons/Instagram_light.svg',
      link: '#',
    },
    {
      title: 'Facebook',
      darkIcon: '/icons/Facebook.svg',
      lightIcon: '/icons/Facebook_light.svg',
      link: '#',
    },
  ];

  return (
    <div className='3xl:mt-[300px] lg:mt-[120px] md:mt-[80px] mt-[30px] overflow-x-hidden 3xl:mb-[350px] lg:mb-[130px] mb-[85px]'>
      <div className=' mx-auto text-center text-3xl lg:text-[50px] 3xl:text-[72px] pt-2 font-bold h-[97px]'>
        Get In Touch
      </div>
      <Separator className='h-px w-full max-w-[100px] bg-[#D8D8D8] mx-auto' />

      <div className='md:flex justify-between 3xl:w-[1726px] xl:w-[1200px] mx-auto 3xl:mt-[150px] lg:mt-[90px] mt-[50px]'>
        <div className='flex md:block md:text-center text-[#2b2b2b] justify-between'>
          <div>
            <div className='font-bold text-[24px] 3xl:text-[48px] md:text-[35px] text-[#000]'>Work Enquires</div>
            <div className='text-sm lg:text-[20px] 3xl:text-[28px] mt-[30px]'>
              <div className='lg:mb-[20px] mb-[12px]'>+91 6307 080 414</div>
              <div className=''>sales@codebiosis.com</div>
            </div>
          </div>
          <Separator
            className='h-px w-full max-w-[50px] bg-[#D8D8D8] my-5 mx-auto hidden md:block'
          />
          <div className='text-sm lg:text-[18px] 3xl:text-[24px]'>
            <div className='lg:mb-[15px] mb-[9px]'>Assistance Hours:</div>
            <div className='lg:mb-[15px] mb-[9px]'>Monday - Friday</div>
            <div className='flex flex-col justify-center'>
              <div className='mb-[8px]'>9:00 am to 7:00 pm IST</div>
              <div className=''>10:30 pm to 8:30 am EST</div>
            </div>
          </div>
        </div>

        <Separator className='h-px md:h-auto w-full md:w-px bg-[#D8D8D8]  md:my-0 my-5' />
        <div className='flex md:block md:text-center text-[#2b2b2b] justify-between'>
           <div>
            <div className='font-bold text-[24px] 3xl:text-[48px] md:text-[35px] text-[#000]'>Careers & Press</div>
            <div className='text-sm lg:text-[20px] 3xl:text-[28px] mt-[30px]'>
              <div className='lg:mb-[20px] mb-[12px]'>+91 6307 080 414</div>
              <div className=''>contact@codebiosis.com</div>
            </div>
          </div>
          <Separator className='hidden md:block h-px w-full max-w-[50px] bg-[#D8D8D8] my-4 mx-auto' />
          <div className='text-sm lg:text-[18px] 3xl:text-[24px]'>
            <div className='lg:mb-[15px] mb-[9px]'>Assistance Hours:</div>
            <div className='lg:mb-[15px] mb-[9px]'>Monday - Friday</div>
            <div className='flex flex-col justify-center'>
              <div className='mb-[8px]'>9 am to 7 pm IST</div>
              <div className=''>9 am to 7 pm EST</div>
            </div>
          </div>
        </div>

        <Separator className='h-px md:h-auto w-full md:w-px bg-[#D8D8D8]  md:my-0 my-5' />


        <div className='flex md:block md:text-center text-[#2b2b2b] justify-between items-center'>
          <div className='font-bold text-[24px] 3xl:text-[48px] md:text-[35px] text-[#000]'>Work Enquires</div>
          <div className='flex flex-row justify-center items-center gap-3 mt-5'>
            {socials.map((social, index) => (
              <SocialButton
                key={index}
                title={social.title}
                darkIcon={social.darkIcon}
                onClick={() => console.log(`Clicked on ${social.title}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchSection;
