import React from 'react';
import Image from 'next/image';

function Page() {
  return (
        

        <section  id='sec-1' className="flex ">        {/*flex-col flex justify-center*/}



  <div  className=" w-[640] h-[300] pr-[60px] pl-[80px] gap-[24px] mb-[141px] mt-[]">{/* w-[640] h-[300] pr-[60px] pl-[80px] gap-[24px] mb-[141px] mt-[]*/ }
<div  className=" w-[500px] h-[212px] ga-[24px] pr-[60px] pl-[80px] mb-[24px] mt-56  ">

    <h1 className="w-[500px] h-[134px] font-bold size-[56px] leading-[67.2px] text-[#000000] text-5xl "> Learn new skills online with ease</h1>

    <p className="w-[500px] h-[54px] font-normal size-[18px] leading-[27px] text-[#000000] text-lg ">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>            

    

    <div  className="w-[358px] h-[64px] pt-[16px] gap-[16px] flex  ">       {/*  justify-normal items-center*/ }

<div className="w-[178px] h-[48px] rounded-[5px] border-[1px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] bg-[#000000]" >
<button  className="w-[130px] h-[24px] font-normal size-[16px] leading-[24px] text-[#FFFFFF]">Start learning now</button>
</div>


<div className="w-[164px] h-[48px] rounded-[5px] border-[1px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px]">
<button className="w-[116px] h-[24px] font-normal size-[16px] leading-[24px]">ExploreCourses</button>
</div>
 
</div>
</div>
</div>


        <Image src={"/lady.png"} alt='photo' width={640} height={900}></Image>


        



        </section>
    
  )
}

export default Page
