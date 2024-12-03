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
                        <div className="mt-[43px] xl:pt-12 3xl:pt-[100px]" key={index}>
                            {point.maintitle && <div className="text-xl sm:text-2xl md:text-3xl xl:text-[40px] 3xl:text-[52px] font-bold 3xl:mt-[25px] pb-[43px]">
                                {point.maintitle}
                            </div>}
                            <div className="text-lg sm:text-2xl md:text-3xl 2xl:text-[36px] 3xl:text-[42px] font-bold 3xl:mt-[25px]">
                                {point.title}
                            </div>
                            <div className="text-[#525252] text-[15px] md:text-xl 2xl:text-2xl 3xl:text-[30px] font-normal mt-[15px] 3xl:mt-[30px] 3xl:leading-[40px] leading-[21px]">
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
