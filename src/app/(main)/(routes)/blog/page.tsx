'use client';

import { blogCards } from '@/components/data/blog';
import Image from 'next/image';
import React from 'react';
import BlogCard from './_components/blogCards';
import AnimatedButton from '@/components/AnimatedButton';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import { useRouter } from 'next/navigation';
function Blog() {
  const navigate = useRouter();
  // just a comment
  return (
    <div className="px-[30px] md:px-20">
      <div className="pt-8 pb-1 lg:pb-[80px] lg:pt-[100px] 4xl:pt-[200px] xl:pb-[50px]">
        <div className="hidden md:block mx-auto lg:text-5xl 4xl:text-[84px] text-[42px] uppercase font-[900] text-center mb-6 ">
          Blogs
        </div>

        <div className="flex w-fit gap-3 sm:gap-4 items-center mb-5 mx-auto  ">
          <Image className='hidden sm:block'  src={"/vectors/Union.svg"} alt="" height={30} width={30} />
          <Image className='sm:hidden' src={"/vectors/Union.svg"} alt="img" height={16} width={16} />
          <h3 className=" md:text-2xl lg:text-3xl 4xl:text-[42px] text-lg text-[#525252]  font-normal  ">
            Explore the Latest Insights
          </h3>
          <Image className='hidden sm:block' src={"/vectors/Union.svg"} alt="" height={30} width={30} />
          <Image className='sm:hidden' src={"/vectors/Union.svg"} alt="img" height={16} width={16} />
        </div>

        <div className="block md:hidden  mx-auto text-[42px] uppercase font-[900] text-center mb-2 ">
          Blogs
        </div>
      </div>

      <div className="md:flex flex-wrap border-b md:border-0  border-[#525252]">
        {blogCards.map((card, index) => (
          <div
            className="flex justify-center md:basis-1/2 lg:basis-1/3 2xl:basis-1/4 md:border-b border-[#525252] "
            key={index}
            onClick={() => navigate.push(`/blog/${card.id}`)}
          >
            <BlogCard
              key={index}
              id={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              time={card.time}
              indexvalue={card.indexvalue}
            />
          </div>
        ))}
      </div>
      {/* <div className='hidden md:flex justify-center pt-0 md:pt-12 2xl:pt-[150px]'>
        <Image src={"/icons/load_more.svg"} alt="" height={30} width={30} />
      </div> */}
      <div className="flex justify-center py-[60px] text-[18px]">
        <AnimatedButton>Load More</AnimatedButton>
      </div>

      <div className="">
        <GetInTouchSection className=" md:py-14 lg:py-32" />
      </div>
    </div>
  );
}

export default Blog;
