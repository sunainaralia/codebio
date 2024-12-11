import Image from 'next/image';
import React from 'react';
import Form from './_components/form';
import OurOfficeLocatedSection from '@/components/sections/OurOfficeLocatedSection';
import LetsCollab from '../../_components/letsCollab';
import GetInTouchSection from './_components/getInTouchSection';
import { Separator } from '@/components/ui/separator';

function ContactUs() {
  return (
    <div className='px-[30px] md:px-20'>
      <div className='3xl:mt-[150px] lg:mt-[90px] mt-[30px] '>
        <div className=' mx-auto text-3xl  xl:text-4xl 4xl:text-[84px] uppercase font-[900] text-center mb-[15px] sm:mb-[25px] '>
          CONTACT US
        </div>

        <div className='flex w-fit gap-4 max-lg:items-center mx-auto'>
          <Image src={'/vectors/Union.svg'} alt='' height={36} width={36} className='h-[16px] w-[16px] md:w-[28px] md:h-[28px]  4xl:h-[36px]  3xl:w-[36px] 4xl:mt-5'/>
          <h3 className='text-md text-center md:text-xl 4xl:text-[42px] text-[#525252] font-normal 4xl:mt-[30px]'>
            Our friendly team would love to hear from you
          </h3>
          <Image src={'/vectors/Union.svg'} alt='' height={36} width={36} className='h-[16px] w-[16px] md:w-[28px] md:h-[28px]  4xl:h-[36px]  3xl:w-[36px] 4xl:mt-5'/>
        </div>
      </div>

      <Form />

      <div className='pt-[84px] md:pt-24 2xl:pt-[140px] 4xl:pt-[200px]'>
        <OurOfficeLocatedSection />
      </div>
      <div className='py-5 3xl:py-14'>
        <LetsCollab
          title='Join Our Team'
          subGHeading='Look Out Open Positions'
          substring='We’re a team of creatives who are excited about unique ideas and help digital and fin-tech companies to create amazing identity.'
        />
      </div>

      <GetInTouchSection />

      <Separator className='h-px w-full bg-[#525252] mt-14 mx-auto' />
    </div>
  );
}

export default ContactUs;

