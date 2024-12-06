import React from 'react'
import BlogDetails3 from './BlogDetails3'
import BlogDetails from '../page'
import BlogDetails4 from './BlogDetails4'

const DetailPoints = ({ data, indexvalue }: any) => {

    return (
        <div className="pb-[20px] xl:pb-[125px]">
            {indexvalue !== 2 && indexvalue! !== 3 ? <>

                {
                    data.map((point: any, index: number) => (
                        <div className="pt-[43px] xl:pt-14 4xl:pt-[70px]" key={index}>
                            {/* text-xl sm:text-2xl md:text-3xl xl:text-[40px] 3xl:text-[52px] */}
                            {point.maintitle && <div className="text-xl sm:text-[38px] 4xl:text-[52px] leading-[27px] sm:leading-[3rem] 4xl:leading-[70px] font-bold ">
                                {point.maintitle}
                            </div>}
                            {/* text-lg sm:text-2xl md:text-3xl 2xl:text-[36px] 3xl:text-[42px] */}
                            <div className=" text-lg sm:text-3xl lg:text-[28px] 4xl:text-[42px] 4xl:leading-[56px] font-bold mt-5">
                                {point.title}
                            </div>
                            {/* text-[15px] md:text-xl 2xl:text-2xl 3xl:text-[30px] 3xl:leading-[40px] leading-[21px] */}
                            {/* text-sm sm:text-base lg:text-xl 4xl:text-3xl */}
                            <div className="text-[#525252] text-[15px] sm:text-lg  md:text-[20px] 4xl:text-[30px]  4xl:leading-10 font-normal mt-[15px] 4xl:mt-2xl ">
                                {point.description}
                            </div>

                            {point.blogsdetailsImages && <div className='pt-[20px] xl:pt-[125px] xl:pb-[25px]'>
                                <img src={point.blogsdetailsImages} alt="blogsdetailsImages" />
                            </div>}
                        </div>
                    ))
                }
            </> : indexvalue === 2 ? <BlogDetails3 /> : <BlogDetails4 />
            }
        </div>
    )
}

export default DetailPoints;

