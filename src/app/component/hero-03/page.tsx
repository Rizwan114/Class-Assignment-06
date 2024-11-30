import React from "react";

const HeroSec = () => {
  return (
    <section id="h2" className="w-[1280px] h-[488px] mt-[2272] ml-[100px] pt-[112] pr-[64px] pb-[112px] pl-[64px] gap-[80px] bg-white ">
      <div  className="w-[1152px] h-[58px] font-bold size-[48px] leading-[57.6px] text-center text-black text-4xl">
        Our Achivements
      </div>
      <div  className="w-[1000px] h-[54px] font-normal size-[18px] leading-[27px] text-center text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </div>

      <div className="ww-[1256px] h-[96px] gap-[24px] flex mt-[25px] ">

        {/* 1 */}

        <div className="w-[296px] h-[80px] gap-[8px]">
                <div className="w-[91px] h-[48px] font-bold size-[40px] leading-[48px] text-black text-3xl">+200</div>
                <div className="w-[59px] h-[24px] font-thin size-[16px] leading-[24px]">Courses</div>
        </div>


             {/* 2 */}

        <div className="w-[296px] h-[80px] gap-[8px]">
                <div className="w-[72pxpx] h-[48px] font-bold size-[40px] leading-[48px] text-black text-3xl">50K</div>
                <div className="w-[60px] h-[24px] font-thin size-[16px] leading-[24px]">Mentors</div>
        </div>



              {/* 3 */}

              <div className="w-[296px] h-[80px] gap-[8px]">
                <div className="w-[91pxpx] h-[48px] font-bold size-[40px] leading-[48px] text-black text-3xl">370k</div>
                <div className="w-[64px] h-[24px] font-thin size-[16px] leading-[24px]">Students</div>
        </div>


              {/* 4 */}

              <div className="w-[296px] h-[80px] gap-[8px]">
                <div className="w-[91pxpx] h-[48px] font-bold size-[40px] leading-[48px] text-black text-3xl">100+</div>
                <div className="w-[85px] h-[24px] font-thin size-[16px] leading-[24px]">Recognition</div>
        </div>



      </div>
    </section>
  );
};

export default HeroSec;
