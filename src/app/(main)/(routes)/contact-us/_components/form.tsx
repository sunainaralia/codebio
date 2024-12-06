"use client"

import AnimatedButton from '@/components/AnimatedButton'
import React from 'react'

const Form = () => {
    const handleSubmit = (event: any) => {

        event.preventDefault();

        const formData = new FormData(event.target);

        Array.from(formData.entries()).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });

    }
    return (
        <div className='xl:w-[90%] 4xl:w-[80%] mx-auto mt-[30px] sm:mt-24 md:mt-32 2xl:mt-[200px]'>
            <form action="submit" onSubmit={handleSubmit} id='form' className='flex flex-col flex-wrap gap-y-11 sm:gap-y-16 md:gap-y-20 gap-x-20 2xl:gap-y-28 2xl:gap-x-36  '>
                <div className="flex max-md:flex-col gap-y-11 3xl:gap-[145px] sm:gap-16 lg:gap-[100px]">
                    <input type="text" name='name' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5      3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]' placeholder='Full Name *' required />
                    <input type="email" name='email' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5      3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]' placeholder='Your Email Address *' required />
                </div>

                <div className="flex max-md:flex-col gap-y-11 3xl:gap-[145px] sm:gap-16 lg:gap-[100px]">
                    <input type="text" name='company' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5      3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]' placeholder="Your Phone / Contact Number *" required />
                    <input type="text" name="phone" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5      3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]' placeholder='Your Company / Organization’s Name' required />
                </div>

                <div className="flex max-md:flex-col gap-y-11 3xl:gap-[145px] sm:gap-16 lg:gap-[100px]">
                    <input type="text" name='company' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5      3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]' placeholder="Your Company / Store URL" required />
                    <input type="text" name="phone" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5      3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]' placeholder='Company Location' required />
                </div>

                <div className="flex">
                    <input type="text" name="message" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] xl:pb-5      3xl:text-[30px] text-[18px] xl:text-[22px] text-[#525252]' placeholder='How can we help ? *' required />
                </div>

                <div className='flex items-center gap-x-2.5 md:gap-x-5'>
                    <input className='3xl:w-[46px] 3xl:h-[46px] h-[26px] w-[26px] rounded-[10px]  ' type="checkbox" name="" id="" />
                    <p className='text-[#525252] font-medium italic 3xl:text-[30px] sm:text-lg text-[12px] xl:text-[22px] '>I agree to receive promotional and marketing emails from CodeBiosis about their products and solutions.</p>
                </div>        
            </form>
            <AnimatedButton className='w-fit mx-auto text-lg lg:text-xl 3xl:text-[28px] font-bold text-[#2B2B2B] '>Send Message</AnimatedButton>
        </div>
    )
}

export default Form