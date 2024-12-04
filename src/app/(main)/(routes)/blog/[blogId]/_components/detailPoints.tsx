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
                        <div className="pt-[43px] xl:pt-[100px]" key={index}>
                            <div className="text-xl sm:text-2xl md:text-3xl xl:text-[40px] 2xl:text-[52px] font-bold">
                                {point.maintitle}
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl xl:text-[40px] 2xl:text-[42px] font-bold mt-[40px]">
                                {point.title}
                            </div>
                            <div className="text-[#525252] text-[15px] md:text-xl xl:text-2xl 2xl:text-[30px] font-normal mt-[15px] xl:mt-[30px] xl:leading-[40px] leading-[21px]">
                                {point.description}
                            </div>

                            {point.blogsdetailsImages &&   <div className='pt-[20px] xl:pt-[125px] xl:pb-[25px]'>
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

// just a comment