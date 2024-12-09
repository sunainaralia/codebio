import Image from 'next/image'
import React from 'react'

const Recuritprocess = ({data }: any) => {
  return (
    <div className='border w-fit overflow-hidden border-[#525252] rounded-[20px]'>
        <Image className='' src={"/careers/card.svg"} alt="img" width={1050} height={370}/>

        <div className='p-6 lg:p-10 4xl:pt-[35px] 4xl:ps-[70px] 4xl:pb-[63px]  '>
          <div className="text-lg sm:text-xl lg:text-[28px] 4xl:text-[42px] md:leading-[3rem] 4xl:leading-[100px] font-bold">
              {data.title}
          </div>
          <div className="text-[15px] sm:text-lg  md:text-lg 4xl:text-[30px]  4xl:leading-10  text-[#525252] 4xl:max-w-[766px] ">
              {data.description}
          </div>
        </div>
    </div>
  )
}

export default Recuritprocess