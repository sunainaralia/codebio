import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface DesignBoxProps {
    title?: string
    text?: string
    img1?: string
    img2?: string
    className?: string
    classNameSeparator?: string
    imageUpper?: string
}
export const DesignUpperImage = ({imageUpper,className}:DesignBoxProps) => {
  return (
    <Image src={imageUpper || ""} alt="" className={cn(className)} width={2100} height={700}/>
  )
}

export const DesignText = ({text , className}:DesignBoxProps) => {
  return (
    <p className={cn(" text-center ",className)}>{text}</p>
  )
}

export const DesignLowerImage = ({img1,img2,className,classNameSeparator}:DesignBoxProps) => {
  return (
    <div className={cn("md:flex items-center w-full justify-center mt-9 md:mt-20 4xl:mt-40",className)}>

        <Image src={img1 || ""} alt="" className='4xl:w-[950px] 4xl:h-[500px] 3xl:min-w-[600px] 3xl:min-h-[300px] md:w-[35%] md:h-[35%]  mx-auto ' width={370} height={194}/>
   
      <Separator className={`4xl:h-[500px] 2xl:min-h-[300px] min-h-28 md:h-[190px]  hidden md:block  md:w-[.5px] bg-[#525252] md:mx-10 4xl:mx-24`}/>

        <Image src={img2 || ""} alt="img" className='4xl:w-[950px] 4xl:h-[500px] 2xl:min-w-[600px] 2xl:min-h-[300px] md:w-[45%] md:h-[45%]  mx-auto mt-10 md:mt-0' width={370} height={194}/>

    </div>
  )
}



