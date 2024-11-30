import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div id='header' className=" flex justify-normal items-center gap-2 w-[1280px] h-[72px] mt-[17px] ml-[100] rounded-[1px] pr-64 pl-64 bg-[#F7F7F7]">

        <div className="flex w-[130.6px] h-[30.38px gap-[8.02px]  mr-20 ">
        <Image src={"/Frame 1.png"} 
        alt="Frame 1"
        width={32.58}
        height={30.38}
        ></Image>

        
        <h1 className="w-[90px] h-[30px] font-bold size-[25.07px] leading-[30.34px] ">Ddsgnr</h1>
        </div>
       

        <div className="w-[910px] h-[44px] gap-[32px] ">




          <div className="flex justify-normal items-center w-[64px] h-[44px] border-[1px] p-[10px] gap-[10px] ">
            <div className="w-[44px] h-[24px] font-normal size-[16px] leading-[24px]  "> Home</div>
          

          <div  className="w-[79px] p-[10px] gap-[10px]">
          <div className="w-[59px] h-[24px] font-normal size-[16px] leading-[24px] text-[#000000]">Courses</div>
          </div>

          <div className="w-[81px]  p-[10px] gap-[10px]">
            <div className="w-[61px] h-[24px] size-[16px] leading-[24px] text-[#000000]">Services</div>
          </div>

          <div className="w-[113px] p-[10px] gap-[10px]">
              <div className="w-[93px] h-[24px] size-[16px] leading-[24px] text-[#000000]">Achievement</div>
          </div>

          <div className="w-[86px] p-[10px] gap-[10px]">
                <div className="w-[66px] font-normal  size-[16px] leading-[24px] text-[#000000]">About Us</div>
          </div>

          <div className="w-[104px] p-[10px] gap-[10px]">
            <div className="w-[84px] font-normal size-[16px] leading-[24px]">Testimonial</div>
          </div>




          <div className="w-[191px] h-[40px] gap-[16px]">
            <div className="w-[80px] rounded-[5px] border-[1px] pt-[8px] pr-[20px] pl-[20px] pb-[8px] gap-[8px] border-[1px solid #000000]">
                <div className="w-[40px] h-[24px] font-normal size-[16px] leading-[24px]">Login </div>  
            </div>
            </div>
          


            <div className="w-[191px] h-[40px] gap-[16px]">
            <div className="w-[95px] h-[40px] rounded-[5px] border-[1px] pt-[8px] pr-[20px] pb-[8px] pl-[20px] gap-[8px] bg-[#000000]">
            <div className="w-[60px] h-[24px] font-normal size-[16px] leading-[24px] text-[#FFFFFF]">Sign Up</div>
            </div>
            </div>

          
  
          </div>
          

        </div>

        </div>
      
    
  )
}

export default Page
