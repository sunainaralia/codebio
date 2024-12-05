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
        <div>
            <form action="submit" onSubmit={handleSubmit} id='form' className='md:flex flex-col gap-12 pt-[30px] md:mt-[90px] 3xl:mt-[200px] 3xl:px-[90px] md:px-[30px] lg:px-[40px]'>
                <div className="md:flex  gap-10 3xl:gap-[145px] md:gap-[100px]">
                    <input type="text" name='name' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] md:pb-5 mb-10  3xl:mb-[120px]   3xl:text-[30px] text-[18px] md:text-[25px] text-[#525252] rounded-[5px]x`x' placeholder='Full Name *' required />
                    <input type="email" name='email' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] md:pb-5 mb-10  3xl:mb-[120px]   3xl:text-[30px] text-[18px] md:text-[25px] text-[#525252] rounded-[5px]' placeholder='Your Email Address *' required />
                </div>

                <div className="md:flex  gap-10 3xl:gap-[145px] md:gap-[100px]">
                    <input type="text" name='company' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] md:pb-5 mb-10  3xl:mb-[120px]   3xl:text-[30px] text-[18px] md:text-[25px] text-[#525252] rounded-[5px]' placeholder="Your Phone / Contact Number *" required />
                    <input type="text" name="phone" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] md:pb-5 mb-10  3xl:mb-[120px]   3xl:text-[30px] text-[18px] md:text-[25px] text-[#525252] rounded-[5px]' placeholder='Your Company / Organization’s Name' required />
                </div>

                <div className="md:flex  gap-10 3xl:gap-[145px] md:gap-[100px]">
                    <input type="text" name='company' className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] md:pb-5 mb-10  3xl:mb-[120px]   3xl:text-[30px] text-[18px] md:text-[25px] text-[#525252] rounded-[5px]' placeholder="Your Company / Store URL" required />
                    <input type="text" name="phone" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] md:pb-5 mb-10  3xl:mb-[120px]   3xl:text-[30px] text-[18px] md:text-[25px] text-[#525252] rounded-[5px]' placeholder='Company Location' required />
                </div>

                <div className="flex">
                    <input type="text" name="message" className='w-full border-b-[1px] border-[#2B2B2B] focus:outline-none pb-[10px] md:pb-5 mb-10  3xl:mb-[120px]   3xl:text-[30px] text-[18px] md:text-[25px] text-[#525252] rounded-[5px]' placeholder='How can we help ? *' required />
                </div>

                <div className='flex items-center gap-x-5'>
                    <input className='3xl:w-[46px] 3xl:h-[46px] h-[26px] w-[26px] rounded-[10px]  ' type="checkbox" name="" id="" />
                    <p className='text-[#525252] font-medium italic 3xl:text-[30px] text-[12px] md:text-[25px] '>I agree to receive promotional and marketing emails from CodeBiosis about their products and solutions.</p>
                </div>

                <AnimatedButton className='w-fit mx-auto text-[28px] font-bold text-[#2B2B2B]  '>Send Message</AnimatedButton>
            </form>
        </div>
    )
}

export default Form