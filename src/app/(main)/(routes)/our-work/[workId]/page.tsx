/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useEffect, useState } from 'react';
import { WorkCardProps, works } from '@/components/data/main';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import {
  DesignLowerImage,
  DesignText,
  DesignUpperImage,
} from '../_sections/designBox';
import AnimatedButton from '@/components/AnimatedButton';
import WorkCards from '@/app/(main)/_components/workCards';
import LetsCollab from '@/app/(main)/_components/letsCollab';

function WorkDetails() {
  const { workId } = useParams();
  const [data, setData] = useState<any>({});
  const [cardsData, setCardsData] = useState<WorkCardProps[]>([]);

  useEffect(() => {
    const detailPage = works.filter((work) => work.id === workId)[0]
    if (!detailPage) {
      navigate.push('/our-work');
      return;
    }
    else {
      setData(detailPage);
    }

    setCardsData(works.filter((work) => work.id !== workId));
  }, []);

  const navigate = useRouter();
  const pathname = usePathname();

  console.log(cardsData[0]);

  const ServiceProvidedArr = [
    { serviceName: "UI/UX Design" },
    { serviceName: "Custom Development (encryption protocols" },
    { serviceName: "SEO, Digital Marketing, and Social Media Posts" },
    { serviceName: "CRM Integration (Zoho)" },
    { serviceName: "Monthly Maintenance and Support" },
  ]


  return (
    <div className="px-[30px] md:px-20">
      <div className=' mt-9 md:mt-14 4xl:mt-28'>
        <Image
          src={'/vectors/backButton.svg'}
          alt=''
          width={50}
          height={50}
          className='4xl:w-[120px] 4xl:h-[120px] xl:w-[80px] xl:h-[80px] '
          onClick={() => window.history.back()}
        />
      </div>
      <div className='w-fit text-center mx-auto pt-4 md:py-16 2xl:py-24 4xl:pt-[130px] 4xl:pb-52'>
        <div className='4xl:text-[72px] 2xl:text-6xl lg:text-5xl text-4xl font-black text-[#2B2B2B] 4xl:leading-[94px] text-center'>{data?.name}</div>
        <Separator
          className='h-[.5px] w-[250px] bg-[#525252] my-4 lg:my-5 mx-auto'
          orientation='horizontal'
        />
        <div className='4xl:text-[34px] xl:text-2xl lg:text-xl text-base font-normal text-[#8D8D8D] text-center 3xl:leading-[45px]'>{data?.description}</div>
      </div>
      <div className='mt-12  '>
        <Image
          src={data.img}
          alt=''
          width={1200}
          height={600}
          className='w-full'
        />
      </div>

      <div className='text-center'>
        <div className='font-bold mt-6 mb-4 3xl:mt-12 3xl:mb-7 text-base md:text-xl lg:text-2xl 3xl:text-[28px] 3xl:leading-[37px] text-[#525252] '>March 1, 2021</div>
        <div className='3xl:text-[30px]  md:text-xl text-[15px] font-normal text-[#525252] text-center 3xl:leading-[40px] 2xl:w-[70%] mx-auto'>
          {data.March_2021}
        </div>
      </div>

      <div>
        <p className='hidden md:block 4xl:text-[70px] 3xl:text-5xl lg:text-4xl text-3xl font-black text-[#2B2B2B] 4xl:leading-[94px] text-center mt-12 lg:mt-20 2xl:mt-28 2xl:mb-8 mb-4 '>Their Problem</p>
        <p className='3xl:text-[30px]  md:text-xl text-base font-normal text-[#525252] text-center 3xl:leading-[40px] 2xl:w-[70%] mx-auto '>{data.Their_Problem} </p>
      </div>

      <Separator
        className='mt-10 mb-5 sm:mb-0 lg:hidden w-auto h-[.5px] bg-[#525252] '
        orientation='horizontal'
      />
      <div className='sm:mt-10 lg:mt-20 4xl:mt-[118px]  '>
        <div className='flex flex-col lg:flex-row w-full justify-between'>
          <div className='lg:w-[49%] 4xl:pe-[100px] '>
            <div className='4xl:text-[70px]  3xl:text-5xl md:text-[32px] text-3xl font-black text-[#2B2B2B] 4xl:leading-[94px] flex items-center'>
              <Image
                src='/worksDetail/tasks.svg'
                alt='img'
                width={56}
                height={50}
                className='4xl:w-[136px] 4xl:h-[120px] 3xl:w-20 3xl:h-20 h-12 w-12'
              />{' '}
              Our Tasks
            </div>
            <p className=' text-center lg:text-start text-lg sm:text-xl 3xl:text-3xl lg:text-[22px] 4xl:text-4xl font-normal text-[#525252] 4xl:leading-[45px] mt-4 2xl:mt-6 '>
              {data.mainDescription}
            </p>
          </div>
          <Separator
            className='hidden lg:block w-[.5px] h-auto bg-[#525252] mx-6'
            orientation='vertical'
          />
          <div className='flex gap-8 lg:w-[49%] justify-between sm:justify-center 4xl:justify-start 4xl:ps-[100px] items-center mt-9 lg:mt-0 '>
            <div >
              <div className=' flex gap-4 3xl:gap-10  items-center'>
                <Image
                  src='/worksDetail/strategy.svg'
                  alt='img'
                  width={48}
                  height={48}
                  className='4xl:w-[100px] 4xl:h-[100px] 3xl:w-[60px] w-10 h-10 3xl:h-[60px]'
                />{' '}
                <div>
                  <div className='4xl:text-[36px] xl:text-2xl lg:text-xl text-lg font-bold text-[#525252] 3xl:leading-[48px] '>
                    Strategy :{' '}  </div>
                  <div className='hidden lg:block font-normal 3xl:text-xl text-[#525252] text-sm 4xl:mt-2.5'>{data.strategy}</div>
                </div>
              </div>{' '}
              <div className='lg:hidden font-normal 3xl:text-xl text-[#525252] text-xs mt-3'>{data.strategy}</div>
            </div>

            <div>
              <div className=' flex gap-4 3xl:gap-10  items-center'>
                <Image
                  src='/worksDetail/design.svg'
                  alt=''
                  width={48}
                  height={48}
                  className='4xl:w-[100px] 4xl:h-[100px] 3xl:w-[60px] w-10 h-10 3xl:h-[60px]'
                />
                <div>
                  <div className='4xl:text-[36px] xl:text-2xl lg:text-xl text-lg font-bold text-[#525252] 3xl:leading-[48px] '>
                    Design : </div>
                  <div className='hidden lg:block font-normal 3xl:text-xl text-[#525252] text-sm 4xl:mt-2.5'>{data.design}</div>
                </div>
              </div>{' '}
              <div className='lg:hidden font-normal 3xl:text-xl text-[#525252] text-xs mt-3'>{data.design}</div>
            </div>

          </div>
        </div>

        <div className='mt-10 sm:mt-14 md:mt-[117px]'>
          <h1 className='hidden md:block 4xl:text-[70px] 3xl:text-5xl lg:text-4xl text-3xl font-black text-[#2B2B2B] 4xl:leading-[94px] text-center md:mb-7 4xl:mb-12 '>How We Solved It</h1>
          <div className=' 3xl:text-[30px]  lg:text-lg text-[15px] font-normal text-[#525252] text-center 3xl:leading-[40px] 2xl:w-[70%] mx-auto '>
          {data.How_We_Solved_It}
          </div>
        </div>

        <Separator
          className='4xl:mt-[150px] 2xl:mb-14 xl:mt-20 mt-9 mb-10 h-[.5px] w-full bg-[#525252]'
          orientation='horizontal'
        />
      </div>

      <div className='hidden md:block'>
        <p className=' 4xl:text-[70px]  3xl:text-5xl md:text-[32px] text-3xl font-black text-[#2B2B2B] 4xl:leading-[94px] '>Services Provided</p>
        <div className='4xl:mt-20 mt-10 flex flex-wrap max-4xl:justify-between'>
          {ServiceProvidedArr.map((items, i) => {
            return (
              <ul key={i} className='list-disc w-10/12 xl:w-6/12 ps-10 '>
                <li className='4xl:text-[36px] 2xl:text-2xl lg:text-xl text-base font-medium text-[#525252] 4xl:leading-[48px]'> {items.serviceName} </li>
              </ul>
            )
          })}
          <Separator
            className='4xl:my-[118px] xl:my-16 my-10 h-[.5px] w-full bg-[#525252]'
            orientation='horizontal'
          />
        </div>
      </div>

      <div >
        <div className=''>
          <div className='flex w-full justify-between'>
            <div className='text-[28px] md:text-3xl 3xl:text-[42px] leading-[56px] font-bold'>
              What Client Said
            </div>
            <Image
              src='/worksDetail/quotes.svg'
              alt='img'
              width={90}
              height={30}
              className='3xl:w-[157px] 3xl:h-[50px] mt-2 2xl:mt-5 '
            />
          </div>

          <div className='flex 2xl:justify-end justify-center  '>
            <p className=' 3xl:text-[30px] md:text-xl text-[15px] font-normal text-[#525252] 3xl:leading-[40px] mt-7 4xl:mt-[52px] text-center 2xl:text-right  2xl:w-[60%] '>{data.What_Client_Said}</p>
          </div>
        </div>

        {/* <div className='md:flex mt-10 justify-between'>
          <div className='hidden md:flex items-center gap-3'>
            <Image
              src='/worksDetail/person.svg'
              alt=''
              width={40}
              height={40}
            />

            <div className='text-sm text-[#8D8D8D]'>
              <div className=''>First Name Last Name</div>
              <div className=''>Digital Marketer</div>
            </div>
          </div>

          <div className='max-w-[700px] md:text-right mt-10 md:mt-0'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </div>

          <div className='flex md:hidden items-center justify-between gap-3 my-10'>
            <Image
              src='/worksDetail/person.svg'
              alt=''
              width={40}
              height={40}
            />

            <div className='text-right'>
              <div className=''>First Name Last Name</div>
              <div className='text-sm text-[#8D8D8D]'>Digital Marketer</div>
            </div>
          </div>
        </div> */}
      </div>

      {/* <Separator
        className='block md:hidden h-px w-full bg-[#525252] my-20'
        orientation='horizontal'
      /> */}

      <div className='mt-10 sm:mt-16 md:mt-24 2xl:mt-36 4xl:mt-[290px]  '>
        <div className='max-sm:flex max-sm:flex-col-reverse'>
          <div className='w-fit text-center mx-auto  max-sm:flex max-sm:items-center max-sm:mt-10'>
            <div className='4xl:text-[72px] 3xl:text-5xl text-4xl font-black text-[#2B2B2B] 4xl:leading-[97px] text-center uppercase'>Design</div>
            <Separator className='hidden sm:block h-[.5px] w-full my-3 2xl:my-5 bg-[#525252]' />
            <Separator className='sm:hidden h-[45px] w-[.5px] mx-5 bg-[#525252]' />
            <div className='4xl:text-[34px] 3xl:text-2xl lg:text-xl text-lg font-normal text-[#8D8D8D] text-center 3xl:leading-[45px]'>Our Creative Process</div>
          </div>

          <div className='sm:mt-12 4xl:mt-[100px] '>
            <DesignUpperImage className='mx-auto ' imageUpper={data.Design_img} />
            
            
          </div>
        </div>
        <div>
          <DesignText className='4xl:mt-12 mt-7 3xl:text-[30px]  md:text-xl text-[15px] font-normal text-[#525252] text-center 3xl:leading-[40px] xl:w-[85%] mx-auto' text="The redesign of Secure Inteli’s website focused on combining sleek, intuitive interfaces with cutting-edge encryption protocols. The clean, modern aesthetic helped elevate their professional image, while the enhanced functionality ensured a secure and seamless browsing experience for their clients." />
          <DesignLowerImage 
            img1={data.Colorpalette_img}
            img2={data.Font_img}
          />
        </div>
      </div>

      <div className='w-fit mx-auto mt-24 4xl:mt-28'>
        <AnimatedButton>Load More</AnimatedButton>
      </div>

      <div className='mt-[100px] md:mt-36 4xl:mt-[235px] '>
        <Separator
          className='block md:hidden h-[.3px] w-full bg-[#525252] mb-10'
          orientation='horizontal'
        />
        <div className='w-full md:flex justify-between items-center'>
          <div className='flex gap-4 items-center justify-center md:justify-start'>
            <Image className='md:hidden' src={'/vectors/Union.svg'} alt='img' height={15} width={15} />
            <Image src={'/vectors/starJoin.svg'} alt='' height={30} width={30} className='hidden md:block 4xl:w-[50px] 4xl:h-[50px] ' />
            <h3 className='text-lg md:text-[28px] lg:text-3xl 3xl:text-[42px] leading-[56px] font-normal text-[#525252] '>Discover More</h3>
            <Image className='md:hidden' src={'/vectors/Union.svg'} alt='img' height={15} width={15} />
          </div>
          <AnimatedButton className='hidden md:flex !mt-0'>
            All Projects
          </AnimatedButton>
        </div>

        <div className='md:flex w-full mt-16 4xl:mt-[120px] justify-center'>
          <div className='w-full lg:w-1/2'>
            <WorkCards
              {...cardsData[0]}
              onClick={() => navigate.push(`/our-work/${cardsData[0]?.id}`)}
              // hideLowerSection={true}
            />
          </div>
          <Separator
            className='hidden md:block bg-[#525252] h-auto mx-20'
            orientation='vertical'
          />
          <Separator
            className='block md:hidden h-px w-full bg-[#525252] my-10'
            orientation='horizontal'
          />

          <div className='w-full lg:w-1/2'>
            <WorkCards
              {...cardsData[1]}
              onClick={() => navigate.push(`/our-work/${cardsData[1]?.id}`)}
              // hideLowerSection={true}
            />
          </div>
        </div>

        <div className=' justify-center mt-[75px] flex md:hidden' >
        <AnimatedButton className=' !mt-0'>
            All Projects
          </AnimatedButton>
        </div>
      </div>

      <LetsCollab
        className='py-20'
        title='Get In Touch'
        substring='We’re a team of creatives who are excited about unique ideas and help companies to create amazing identity by crafting top-notch UI/UX & E-Commerce stores.'
      />
    </div>
  );
}

export default WorkDetails;
