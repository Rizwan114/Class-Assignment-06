import React from 'react'
import Image from 'next/image'
import { AiTwotoneStar } from "react-icons/ai";
import { Button } from "@/components/ui/button";

function HeroSec4 () {
  return (
   <section id='h4'>
    <div  id='h4' className='w-[1312px] h-[534px] gap-[32px] flex'>
        <div  className='w-[416px] h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7]'>
            <Image src={"/Image-01.svg"} width={400} height={300} alt='Image'></Image>


            <div  className='w-[416px] h-[210px] pt-[16px] pb-[24px] pl-[16px] gap-[24px] '>
               
                <div className='w-[48px] h-[24px] gap-[4px] flex'>
                <h6 className='w-[326px] h-[21px] font-semibold	size-[14px] leading-[21px] text-black pr-[330px] '>Design</h6>
                    <div className='w-[24px] h-[24px] rounded-[1px] '><AiTwotoneStar /></div>
                    <div className='w-[20px] h-[24px] font-semibold size-[14px] leading-[21px]'>5.0</div>
                </div>

                <h1 className='w-[382px] h-[34] font-bold size-[24px] leadding-[33.6px] text-black text-3xl mt-5'>UX/UI Design 201</h1>
                <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>      
            </div>

            {/* button */}
            <div className='flex justify-start items-center'>

            <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] bg-white '>
            <Button className='w-[77px] h-[24px] font-normal size-[16px] leading-[24px] text-black ml-12 mt-3 '>Enroll Now</Button>   
            </div>

            <div className='w-[77px] h-[40px] rounded-[5px] ml-9'>
                <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-2xl'>$400 </button>
            </div>
        </div>


        </div>

        {/* 02 */}



        <div className='w-[416px] h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7]'>
            <Image src={"/Image-02.svg"} width={400} height={300} alt='Image'></Image>


            <div className='w-[416px] h-[210px] pt-[16px] pb-[24px] pl-[16px] gap-[24px] '>
               
                <div className='w-[48px] h-[24px] gap-[4px] flex'>
                <h6 className='w-[326px] h-[21px] font-semibold	size-[14px] leading-[21px] text-black pr-[330px] '>Programmimg</h6>
                    <div className='w-[24px] h-[24px] rounded-[1px] '><AiTwotoneStar /></div>
                    <div className='w-[20px] h-[24px] font-semibold size-[14px] leading-[21px]'>5.0</div>
                </div>

                <h1 className='w-[382px] h-[34] font-bold size-[24px] leadding-[33.6px] text-black text-3xl mt-5'>Introduction to Python</h1>
                <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>      
            </div>

            {/* button */}
            <div className='flex justify-start items-center '>

            <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] bg-white  '>
            <Button className='w-[77px] h-[24px] font-normal size-[16px] leading-[24px] text-black  ml-12 mt-3'>Enroll Now</Button>   
            </div>

            <div className='w-[77px] h-[40px] rounded-[5px] ml-9'>
                <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-2xl'>$400 </button>
            </div>
        </div>


        </div>
        


                                          {/* 03 */}

            
        <div className='w-[416px] h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7]'>
            <Image src={"/Image-03.svg"} width={400} height={300} alt='Image'></Image>


            <div className='w-[416px] h-[210px] pt-[16px] pb-[24px] pl-[16px] gap-[24px] '>
               
                <div className='w-[48px] h-[24px] gap-[4px] flex'>
                <h6 className='w-[326px] h-[21px] font-semibold	size-[14px] leading-[21px] text-black pr-[330px] '>Business</h6>
                    <div className='w-[24px] h-[24px] rounded-[1px] '><AiTwotoneStar /></div>
                    <div className='w-[20px] h-[24px] font-semibold size-[14px] leading-[21px]'>5.0</div>
                </div>

                <h1 className='w-[382px] h-[34] font-bold size-[24px] leadding-[33.6px] text-black text-2xl mt-5'>Data Analysis for Beginners</h1>
                <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>      
            </div>

            {/* button */}
            <div className='flex justify-start items-center'>

            <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] bg-white '>
            <Button className='w-[77px] h-[24px] font-normal size-[16px] leading-[24px] text-black ml-12 mt-3 '>Enroll Now</Button>   
            </div>

            <div className='w-[77px] h-[40px] rounded-[5px] ml-9'>
                <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-2xl'>$400 </button>
            </div>
        </div>


        </div>

                        </div>
                        <div className='w-[416px] h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7] mt-16 flex' >
                        {/* 04 */}

                        <div className='w-[416px] h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7]'>
            <Image src={"/Image-04.svg"} width={400} height={300} alt='Image'></Image>


            <div className='w-[416px] h-[210px] pt-[16px] pb-[24px] pl-[16px] gap-[24px] '>
               
                <div className='w-[48px] h-[24px] gap-[4px] flex'>
                <h6 className='w-[326px] h-[21px] font-semibold	size-[14px] leading-[21px] text-black pr-[330px] '>Art</h6>
                    <div className='w-[24px] h-[24px] rounded-[1px] '><AiTwotoneStar /></div>
                    <div className='w-[20px] h-[24px] font-semibold size-[14px] leading-[21px]'>5.0</div>
                </div>

                <h1 className='w-[382px] h-[34] font-bold size-[24px] leadding-[33.6px] text-black text-2xl mt-5'>Art Specialization</h1>
                <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>      
            </div>

            {/* button */}
            <div className='flex justify-start items-center'>

            <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] bg-white '>
            <Button className='w-[77px] h-[24px] font-normal size-[16px] leading-[24px] text-black ml-12 mt-3 '>Enroll Now</Button>   
            </div>

            <div className='w-[77px] h-[40px] rounded-[5px] ml-9'>
                <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-2xl'>$400 </button>
            </div>
        </div>


        </div>


                            {/* 05 */}

                            <div className='w-[416px] h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7]'>
            <Image src={"/Image-05.svg"} width={400} height={300} alt='Image'></Image>


            <div className='w-[416px] h-[210px] pt-[16px] pb-[24px] pl-[16px] gap-[24px] '>
               
                <div className='w-[48px] h-[24px] gap-[4px] flex'>
                <h6 className='w-[326px] h-[21px] font-semibold	size-[14px] leading-[21px] text-black pr-[330px] '>Law</h6>
                    <div className='w-[24px] h-[24px] rounded-[1px] '><AiTwotoneStar /></div>
                    <div className='w-[20px] h-[24px] font-semibold size-[14px] leading-[21px]'>5.0</div>
                </div>

                <h1 className='w-[382px] h-[34] font-bold size-[24px] leadding-[33.6px] text-black text-2xl mt-5'>Rule of Law</h1>
                <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>      
            </div>

            {/* button */}
            <div className='flex justify-start items-center'>

            <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] bg-white '>
            <Button className='w-[77px] h-[24px] font-normal size-[16px] leading-[24px] text-black ml-12 mt-3 '>Enroll Now</Button>   
            </div>

            <div className='w-[77px] h-[40px] rounded-[5px] ml-9'>
                <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-2xl'>$400 </button>
            </div>
        </div>


        </div>

         
                                       {/* 06 */}

            <div className='w-[416px] h-[534px] rounded-[5px] gap-[24px] bg-[#F7F7F7]'>
            <Image src={"/Image-06.svg"} width={400} height={300} alt='Image'></Image>


            <div className='w-[416px] h-[210px] pt-[16px] pb-[24px] pl-[16px] gap-[24px] '>
               
                <div className='w-[48px] h-[24px] gap-[4px] flex'>
                <h6 className='w-[326px] h-[21px] font-semibold	size-[14px] leading-[21px] text-black pr-[330px] '>Tech</h6>
                    <div className='w-[24px] h-[24px] rounded-[1px] '><AiTwotoneStar /></div>
                    <div className='w-[20px] h-[24px] font-semibold size-[14px] leading-[21px]'>5.0</div>
                </div>

                <h1 className='w-[382px] h-[34] font-bold size-[24px] leadding-[33.6px] text-black text-2xl mt-5'>Introduction to webflow</h1>
                <p className='w-[382px] h-[48px] font-normal size-[16px] leading-[24px] mt-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>      
            </div>

            {/* button */}
            <div className='flex justify-start items-center'>

            <div className='w-[117px] h-[40px] rounded-[5px] border-[1px] bg-white '>
            <Button className='w-[77px] h-[24px] font-normal size-[16px] leading-[24px] text-black ml-12 mt-3 '>Enroll Now</Button>   
            </div>

            <div className='w-[77px] h-[40px] rounded-[5px] ml-9'>
                <button className='w-[37px] h-[24px] font-medium size-[16px] leading-[24px] text-2xl'>$400 </button>
            </div>
        </div>


        </div>

       


    </div>

    <div className=' pt-[8px] pr-[16px] pb-[8px] pl-[560px] mt-16 '>
            <Button className='font-normal text-black bg-white'>View All Courses</Button>
        </div>

   </section>
  )
}

export default HeroSec4 
