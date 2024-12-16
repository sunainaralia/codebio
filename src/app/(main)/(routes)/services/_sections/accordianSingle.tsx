'use client';

import LottieAnimation from '@/app/(main)/_components/lottiePlayer';
import ServiceAccordianCards from '@/app/(main)/_components/serviceAccordianCards';
import AnimatedButton from '@/components/AnimatedButton';
import { serviceDataMain, serviceDataMobile } from '@/components/data/services';
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
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/contact-us');
  };

  return (
    <div>
      <Accordion type='single' value={value}>
        <AccordionItem value={'true'} className='my-5 py-2.5 border-none'>
          <div className=''>
            <div className='flex w-full justify-between items-center'>
              <LottieAnimation
                animationData={require(`@/../public/lottiee/OurService/DV.json`)}
                className={`w-12 h-10 lg:w-28  lg:h-28  lg:max-h-28  lg:max-w-28 ${
                  id % 2 == 0 ? 'order-last' : ''
                }`}
              />
              <AnimatedButton onClick={handleNavigation} className='hidden md:flex mt-0 h-fit text-xl lg:text-[28px] font-bold text-[#2B2B2B]'>
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

            <div className='hidden md:block text-2xl md:text-3xl xl:text-4xl 3xl:text-5xl 4xl:text-[72px] py-3 lg:py-6 4xl:pb-10 4xl:pt-9 uppercase font-[900] md:font-bold'>
              {service} 
            </div>

            <div className='flex w-full mt-8 lg:my-5 justify-between'>
              <div className='max-w-[900px] text-[#2B2B2B] text-start text-[15px] sm:text-base lg:text-xl 4xl:text-3xl 4xl:!leading-10'>
               <span className='hidden md:block'> {serviceDataMain[service].description.text}</span>
               <span className='md:hidden block'> {serviceDataMobile[service].description.text}</span>
              </div>
              
            </div>
          </div>
          <div className='hidden md:block'>
            <AccordionContent>
              <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative z-10 4xl:py-10 mx-auto my-6 lg:my-10 lg:ring-offset-0'>
                {Object.keys(serviceDataMain[service].sections)?.map(
                  (data: string, index: number) => (
                    <div
                      className={cn(
                        'p-6 3xl:p-12 min-w-[300px] border-0 border-b-[0.5px] border-t-0 lg:border-x-[0.5px] xl:border-l-0 border-[#525252] hover:bg-[#2D2D2D] group duration-300',
                        
                        index % 3 === 0 && 'xl:border-l-[0.5px] border-[#525252]',
                        index < 3 && 'xl:border-b-[0.5px] border-[#525252]',
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
          <div className='flex gap-2 flex-wrap md:hidden mt-8'>
            {Object.keys(serviceDataMain[service].sections).map(
              (data, index) => (
                <Button
                  key={index}
                  className='inline-block bg-gray-200 rounded-full px-2.5 text-[11px] sm:text-base font-bold text-[#2B2B2B]'
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
