'use client';

import React from 'react';
import BannerDetails from './_sections/bannerDetails';
import { works } from '@/components/data/main';
import AnimatedButton from '@/components/AnimatedButton';
import LetsCollab from '../../_components/letsCollab';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import OurStatsRightSection from '@/components/sections/ourStatsRightSection';
import OurStatsSection from '@/components/sections/OurStatsSection';

function Work() {
  return (
    <div className='px-[30px] md:px-20'>
      {
        works.slice(0,5).map((work) => <BannerDetails key={work.id} {...work} buttonText="View full Details"/>)
      } 

      <div className='flex w-full justify-center mb-10 md:mb-0'>
        <AnimatedButton>Load More</AnimatedButton>
      </div>

      <div className='hidden md:block'>
        <OurStatsRightSection />
      </div>
      <div className='block md:hidden'>
        <OurStatsSection />
      </div>

      <LetsCollab
        title='Got a Project'
        substring='We’re a team of passionate professionals driven by innovative ideas, dedicated to helping businesses build exceptional digital identities through expert web development, UI/UX design, eCommerce solutions, branding, marketing, ai services and beyond.'
      />

      <GetInTouchSection />
    </div>
  );
}

export default Work;
