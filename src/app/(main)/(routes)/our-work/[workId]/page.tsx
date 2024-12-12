'use client';
import React, { useEffect, useState } from 'react';
import { WorkCardProps, works } from '@/components/data/main';
import { useParams, useRouter } from 'next/navigation';
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
  const [data, setData] = useState<any>({});
  const [cardsData, setCardsData] = useState<WorkCardProps[]>([]);
  const { workId } = useParams();
  useEffect(() => {
    setData(works.filter((work) => work.id === workId)[0]);

    setCardsData(works.filter((work) => work.id !== workId));
  }, []);

  const navigate = useRouter();
  console.log(cardsData[0]);
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

      <div className='text-sm text-[#525252] text-center'>
        <div className='font-bold mt-6 mb-4 3xl:mt-12 3xl:mb-7 text-base md:text-xl lg:text-2xl 3xl:text-[28px] 3xl:leading-[37px] text-[#525252] '>March 1, 2021</div>
        <div className='3xl:text-[30px] xl:text-2xl md:text-xl text-[15px] font-normal text-[#525252] text-center 3xl:leading-[40px] 2xl:w-[70%] mx-auto'>
          Developed the platform with crystal clear visions and an agile
          development cycle. Redefined visual system for the clients with
          upgraded search tools and content which help boost the site
          visitors. Refactored the code to minimize time and memory complexities
          for search optimization.
        </div>
      </div>

      <div>
        <p className='hidden md:block 4xl:text-[70px] xl:text-6xl md:text-5xl text-3xl font-black text-[#2B2B2B] 4xl:leading-[94px] text-center mt-12 lg:mt-28 2xl:mb-8 mb-4 '>Their Problem</p>
        <p className='3xl:text-[30px] xl:text-2xl md:text-xl text-base font-normal text-[#525252] text-center 3xl:leading-[40px] 2xl:w-[70%] mx-auto '>Secure Inteli struggled with a slow, underperforming website that wasn’t converting leads effectively. Their site lacked modern design and the security features necessary to attract high-value clients in the cybersecurity sector.</p>
      </div>

      <div className='mt-20 4xl:mt-[118px]  '>
        <div className='md:flex w-full justify-between'>
          <div className='md:w-[49%]'>
            <div className='4xl:text-[70px] xl:text-6xl md:text-5xl text-3xl font-black text-[#2B2B2B] 4xl:leading-[94px] flex items-center'>
              <Image
                src='/worksDetail/tasks.svg'
                alt='img'
                width={56}
                height={50}
                className='4xl:w-[136px] 4xl:h-[120px] lg:w-20 lg:h-20 '
              />{' '}
              Our Tasks
            </div>
            <div className='max-w-[500px] text-center md:text-start 4xl:text-[36px] xl:text-2xl lg:text-xl text-base font-normal text-[#525252] 3xl:leading-[45px] mt-6 '>
              {data.mainDescription}
            </div>
          </div>
          <Separator
            className='w-px h-auto bg-[#D8D8D8] mx-6'
            orientation='vertical'
          />
          <div className='flex gap-8 md:w-[49%] justify-center my-10 md:my-0'>
            <div className='text-3xl flex gap-2 font-bold items-center'>
              <Image
                src='/worksDetail/strategy.svg'
                alt=''
                width={60}
                height={60}
              />{' '}
              <div className='text-base  text-[#525252]'>
                Strategy{' '}
                <div className='font-medium text-sm'>{data.strategy}</div>
              </div>
            </div>{' '}
            <div className='max-w-[500px]'></div>
            <div className='text-3xl flex gap-2 font-bold items-center'>
              <Image
                src='/worksDetail/design.svg'
                alt=''
                width={60}
                height={60}
              />
              <div className='text-base  text-[#525252]'>
                Design <div className='font-medium text-sm'>{data.design}</div>
              </div>
            </div>{' '}
            <div className='max-w-[500px]'></div>
          </div>
        </div>

        <div className='max-w-[1000px] mx-auto text-center text-[#525252] my-20'>
          Enhanced the aesthetics to reinforce user experience and
          visibility. Incorporated accessibility to widen the user spectrum.
          Augmented to the features by using third-party integrations as per
          client requirements. A dedicated post-deployment team maintains the
          deliverables and updates them on a regular basis.
        </div>

        <Separator
          className='h-px w-full bg-[#D8D8D8]'
          orientation='horizontal'
        />
      </div>

      <div className='md:py-20'>
        <div className='flex w-full justify-between'>
          <div className=''>
            <div className='text-3xl flex gap-2 font-bold'>
              What Client Said
            </div>
            <div className='text-sm text-[#8D8D8D]'>Reviewd on Clutch</div>
          </div>

          <Image
            src='/worksDetail/quotes.svg'
            alt=''
            width={100}
            height={100}
          />
        </div>

        <div className='md:flex mt-10 justify-between'>
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
        </div>
      </div>

      <Separator
        className='block md:hidden h-px w-full bg-[#D8D8D8] my-20'
        orientation='horizontal'
      />

      <div className='py-20'>
        <div className='w-fit text-center mx-auto'>
          <div className='text-3xl font-bold uppercase'>Design</div>
          <Separator className='h-px w-full my-3 bg-[#D8D8D8]' />
          <div className='text-[#8D8D8D]'>Our Creative Process</div>
        </div>

        <div className=''>
          <DesignUpperImage imageUpper={'/worksDetail/des1.svg'} />
          <DesignText text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet." />
          <DesignLowerImage
            img1='/worksDetail/des2.svg'
            img2='/worksDetail/des3.svg'
          />
        </div>

        <div className='w-fit mx-auto py-6'>
          <AnimatedButton>Load More</AnimatedButton>
        </div>
      </div>

      <div className='md:py-20'>
        <div className='w-full md:flex justify-between'>
          <div className='flex gap-4 items-center mb-5 justify-center md:justify-start'>
            <Image src={'/vectors/Union.svg'} alt='' height={30} width={30} />
            <h3 className='text-xl '>Discover More</h3>
            <Image src={'/vectors/Union.svg'} alt='' height={30} width={30} className='block md:hidden' />
          </div>
          <AnimatedButton className='hidden md:flex mt-0'>
            All Projects
          </AnimatedButton>
        </div>

        <div className='md:flex w-full mt-12 mb-6 justify-center'>
          <div className=''>
            <WorkCards
              {...cardsData[0]}
              onClick={() => navigate.push(`/our-work/${cardsData[0]?.id}`)}
              hideLowerSection={true}
            />
          </div>
          <Separator
            className='hidden md:block bg-[#D8D8D8] h-auto mx-20'
            orientation='vertical'
          />
          <Separator
            className='block md:hidden h-px w-full bg-[#D8D8D8] my-10'
            orientation='horizontal'
          />

          <div className=''>
            <WorkCards
              {...cardsData[1]}
              onClick={() => navigate.push(`/our-work/${cardsData[1]?.id}`)}
              hideLowerSection={true}
            />
          </div>
        </div>

        <div className='block md:hidden'>
          <AnimatedButton className=' mt-20 mx-auto'>All Projects</AnimatedButton>
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
