'use client';

import { SocialButton } from '@/app/(main)/_components/navigationbar';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const GetInTouchSection = () => {
  const socials = [
    {
      title: 'linkedin',
      darkIcon: '/icons/LinkedIn.svg',
      lightIcon: '/icons/LinkedIn.svg',
      link: '#',
    },
    {
      title: 'Instagram',
      darkIcon: '/icons/Instagram.svg',
      lightIcon: '/icons/Instagram.svg',
      link: '#',
    },
    {
      title: 'Facebook',
      darkIcon: '/icons/Facebook.svg',
      lightIcon: '/icons/Facebook.svg',
      link: '#',
    },
    {
      title: 'be',
      darkIcon: '/icons/be-social-icon-dark.svg',
      lightIcon: '/icons/be-social-icon-dark.svg',
      link: '#',
    },
    {
      title: 'browser',
      darkIcon: '/icons/browser-dark-icon.svg',
      lightIcon: '/icons/browser-dark-icon.svg',
      link: '#',
    },
  ];

  return (
    <div className='lg:mt-10  mt-[30px]  3xl:mb-[350px] lg:mb-[130px] mb-[85px]'>
      <div className=' mx-auto text-center text-3xl lg:text-[50px] 3xl:text-[72px] pt-2 font-bold mb-1 lg:mb-5 3xl:leading-[97px]'>
        Get In Touch
      </div>
      <Separator className='h-[.5px] w-full max-w-[100px] bg-[#525252] mx-auto' />

      <div className='flex flex-wrap justify-between 2xl:w-[90%] 4xl:w-[80%] mx-auto 4xl:mt-[150px] lg:mt-[90px] mt-[50px]'>
        <div className='flex max-md:w-full md:block md:text-center text-[#2b2b2b] justify-between'>
          <div>
            <div className='font-black text-[24px] 3xl:text-[48px] xl:text-[35px] text-[#000]'>Work Enquires</div>
            <div className='text-sm lg:text-[20px] 3xl:text-[28px]  mt-2.5 md:mt-[30px] font-medium'>
              <div className='lg:mb-[20px] mb-[12px]'><a href="tel:+91 6307 080 414">+91 6307 080 414</a></div>
              <div className=''><a href="mailto:sales@codebiosis.com"> sales@codebiosis.com</a></div>
            </div>
          </div>
          <Separator
            className='h-[.5px] w-full max-w-[50px] bg-[#525252] my-8 mx-auto hidden md:block'
          />
          <div className='text-sm lg:text-[18px] 3xl:text-[24px] font-medium max-md:text-right'>
            <div className='lg:mb-5 mb-4'>Assistance Hours:</div>
            <div className='lg:mb-5 mb-4'>Monday - Friday</div>
            <div className='flex flex-col justify-center'>
              <div className='mb-[8px]'>9:00 am to 7:00 pm IST</div>
              <div className=''>10:30 pm to 8:30 am EST</div>
            </div>
          </div>
        </div>

        <Separator className='h-[.5px] md:h-auto w-full md:w-[.5px] bg-[#525252]  md:my-0 my-5' />
        <div className='flex max-md:w-full md:block md:text-center text-[#2b2b2b] justify-between'>
           <div>
            <div className='font-black text-[24px] 3xl:text-[48px] xl:text-[35px] text-[#000]'>Careers & Press</div>
            <div className='text-sm lg:text-[20px] 3xl:text-[28px]  mt-2.5 md:mt-[30px] font-medium'>
              <div className='lg:mb-[20px] mb-[12px]'><a href="tel:+91 6307 080 414"> +91 6307 080 414</a></div>
              <div className=''><a href="mailto:contact@codebiosis.com">contact@codebiosis.com</a></div>
            </div>
          </div>
          <Separator className='hidden md:block h-px w-full max-w-[50px] bg-[#525252] my-8 mx-auto  ' />
          <div className='text-sm lg:text-[18px] 3xl:text-[24px] font-medium max-md:text-right'>
            <div className='lg:mb-5 mb-4'>Assistance Hours:</div>
            <div className='lg:mb-5 mb-4'>Monday - Friday</div>
            <div className='flex flex-col justify-center'>
              <div className='mb-[8px]'>9 am to 7 pm IST</div>
              <div className=''>9 am to 7 pm EST</div>
            </div>
          </div>
        </div>

        <Separator className='hidden md:block h-[.5px] md:h-auto w-full md:w-[.5px] bg-[#525252]  md:my-0 my-5' />


        <div className='max-md:hidden flex max-md:w-full md:block  md:text-center text-[#2b2b2b] justify-between items-center max-w-[300px]'>
          <div className='font-black text-[24px] 3xl:text-[48px] xl:text-[35px] text-[#000]'>Socials</div>
          <div className='flex flex-wrap justify-center items-center gap-3 3xl:gap-x-10 mt-11'>
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
