import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   )
// }


const Page = () => {
  return (
    <section id='' className="w-[1280px] h-[1059px] mt-[1266] ml-[100] pt-[112px] pr-[64px] pb-[112px] pl-[64]  bg-[#FFFFFF] " >


      <div id='h1' className=" w-[768px] h-[109px] gap-[24px] pl-[240px] pb-[200px]">
          <h1 className="w-[768px] h-[58px] font-bold size-[48px] leading-[57.6px] text-[#000000] text-5xl">Explore Courses By Category</h1>
            <br />
          <p className="w-[768px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
      </div>


                                 {/* 01 boxes */}



      <div className=" w-[1280px] h-[200px] gap-[64px] flex ">


        <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex " >
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                <Image src={"/pen-tool-01.png"} width={32} height={32} alt='pen-tool-01' className="gap-[10px]"></Image>
                </div>

                <div>
                <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Design & Development</h6>
                <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
                </div>
                </div>
                
      
          

                                        {/* boxe 02 */}

          <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image src={"/volume-high-7.png"} width={32} height={32} alt='volume-high-7.'></Image>
          </div>

          <div >
            <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Marketing</h6>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
          </div>
          </div>

                                        {/* boxe 03 */}
          
          <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
            <Image src={"/image-8.png"} width={32} height={32} alt=''></Image>
          </div>

          <div >
            <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Development</h6>
            <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
          </div>
          </div>

          </div>




          <div className=" w-[1280px] h-[200px] gap-[64px] flex ">


          {/* boxe 4 */}

          <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
          <Image src={"/microphone-9.png"} width={32} height={32} alt='microphone'></Image>
          </div>

          <div >
          <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Communication</h6>
          <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
          </div>
          </div>



                    {/* boxe 05 */}

          <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
          <Image src={"/link-10.svg"} width={32} height={32} alt='link'></Image>
          </div>

          <div >
          <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Digital Marketing</h6>
          <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
          </div>
          </div>




           {/* boxe 06 */}

           <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
          <Image src={"/arrow-11.svg"} width={32} height={32} alt='arrow'></Image>
          </div>

          <div >
          <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Self Development</h6>
          <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
          </div>
          </div>


          </div>



            <div className=" w-[1280px] h-[200px] gap-[64px] flex ">

              {/* boxe 07 */}


              <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
          <Image src={"/briefcase-12.svg"} width={32} height={32} alt='briefcase'></Image>
          </div>

          <div >
          <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Business</h6>
          <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
          </div>
          </div>




            {/* boxe 08 */}


            <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
          <Image src={"/Vector-13.svg"} width={32} height={32} alt='Vector'></Image>
          </div>

          <div >
          <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Finance</h6>
          <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
          </div>
          </div>


                    {/* boxe 09 */}


                    <div className="  w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
          <div className=" w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
          <Image src={"/book-14.svg"} width={32} height={32} alt='book'></Image>
          </div>

          <div >
          <h6 className="w-[246.67px] h-[30px] font-semibold size-[20px] leading-[30px] text-[#000000] mt-5">Consulting</h6>
          <p className="w-[246.67px] h-[27px] font-normal size-[18px] leading-[27px] text-[#000000]">50+ Courses Available</p>
          </div>
          </div>


                

            </div>



            <div className='w-[155px] h-[48px] ml-[580px] border-[1px]  pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] '>
            <Button  className='w-[120] h-[24] size-[16px] leading-[24] text-slate-950 bg-white pl-14'>View All Courses</Button>
            </div>
      


                                       

         
       
     
    </section>
  )
}

export default Page
