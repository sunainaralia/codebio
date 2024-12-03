'use client';

import LottieAnimation from '@/app/(main)/_components/lottiePlayer';
import ServiceAccordianCards from '@/app/(main)/_components/serviceAccordianCards';
import AnimatedButton from '@/components/AnimatedButton';
import { serviceDataMain } from '@/components/data/services';
+7;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '@radix-ui/react-separator';
import Lottie, { LottiePlayer } from 'lottie-react';
import Image from 'next/image';
import React, { useState } from 'react';

const AccordianSingle = ({
  service,
  id = 0,
}: {
  service: any;
  id?: number;
}) => {
  const [value, setValue] = useState('true');
  console.log('id', id);

  return (
    <div>
      <Accordion type='single' value={value}>
        <AccordionItem value={'true'} className='my-5 py-5 border-none'>
          <div className=''>
            <div className='flex w-full justify-between items-center'>
              <LottieAnimation
                animationData={require(`@/../public/lottiee/OurService/DV.json`)}
                className={`w-12 h-10 lg:w-28  lg:h-28  lg:max-h-28  lg:max-w-28 ${
                  id % 2 == 0 ? 'order-last' : ''
                }`}
              />
              <AnimatedButton className='hidden md:flex mt-0 h-fit text-[28px] font-bold text-[#2B2B2B]'>
                Let us Help
              </AnimatedButton>
              <div
                className={`md:hidden block text-[34px] uppercase font-[900] ${
                  id % 2 != 0 ? 'order-first' : ''
                }`}
              >
                {service}
              </div>
            </div>

            <div className='hidden md:block text-4xl lg:text-5xl xl:text-[72px] py-6 xl:pb-10 xl:pt-9 uppercase font-[900]'>
              {service}
            </div>

            <div className='flex w-full my-5 justify-between'>
              <div className='max-w-[900px] text-[#2B2B2B] text-start text-[15px] sm:text-xl md:text-2xl xl:text-3xl xl:!leading-10'>
                {serviceDataMain[service].description.text}
              </div>
              {/* <div className='hidden md:block text-2xl underline underline-offset-8'>
                <AccordionTrigger
                  className='gap-4'
                  icon={'/vectors/triggerUp.svg'}
                  onClick={() => {
                    setValue(value === 'true' ? 'false' : 'true');
                  }}
                >
                  Explore All
                </AccordionTrigger>
              </div> */}
            </div>
          </div>
          <div className='hidden md:block'>
            <AccordionContent>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 mx-auto my-10'>
                {Object.keys(serviceDataMain[service].sections)?.map(
                  (data: string, index: number) => (
                    <div
                      className={cn(
                        'p-12 min-w-[300px] border-0 border-b border-t-0 lg:border-r border-[#525252]',
                        index % 3 === 0 && 'lg:border-l border-[#525252]',
                        index < 3 && 'lg:border-b-1 border-[#525252]',
                        index >=
                          Object.keys(serviceDataMain[service].sections)
                            .length -
                            (Object.keys(serviceDataMain[service].sections)
                              .length %
                              3 ===
                            0
                              ? 3
                              : Object.keys(serviceDataMain[service].sections)
                                  .length % 3) && 'border-b-0',
                      )}
                      key={index}
                    >
                      <ServiceAccordianCards
                        section={service}
                        data={data}
                        index={index}

                      />
                    
                    </div>
                  ),
                )}
                {/* <div
                className=" basis-1/3 p-12 min-w-[300px] border border-b-0 border-[#D8D8D8] flex items-center justify-center h-auto cursor-pointer"
                onClick={() => setValue("false")}
              >
                <Image
                  src={"/vectors/triggerClose.svg"}
                  width={64}
                  height={64}
                  alt=""
                  className="m-auto"
                />
              </div> */}
              </div>
            </AccordionContent>
          </div>
          <div className=''>
            {Object.keys(serviceDataMain[service].sections).map(
              (data, index) => (
                <Button
                  key={index}
                  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                  variant={'outline'}
                >
                  {data}
                </Button>
              ),
            )}
          </div>
        </AccordionItem>
      </Accordion>
      <Separator
        className='block md:hidden h-px w-full bg-[#D8D8D8] mt-2 mb-6'
        orientation='horizontal'
      />
    </div>
  );
};

export default AccordianSingle;
