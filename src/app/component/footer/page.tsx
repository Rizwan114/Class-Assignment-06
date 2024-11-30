import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div  id="footer-1" className="flex  w-[1280px] h-[228]  mt-[1038] ml-[100] pt-[80px] pr-[64px] pb-[80px] pl-[64px] gap-[64px] bg-[#F7F7F7]">
      <div className="w-[320px] h-[68px] font-bold size-[24px] leading-[33.6px] text-[#000000]">
        <h2>Trusted by 2000+ companies worldwide.</h2>
      </div>

      <div  className=" flex w-[880px] h-[56px] pt-[8.74px] pb-[8.74px] gap-[19.12px] ">
        <div >
          <Image
            src={"/logoipsum.png"}
            alt="LOGOIPSUM"
            width={123.8}
            height={38.52}
          ></Image>
        </div>

        <div>
          <Image
            src={"/Logo.png"}
            width={123.8}
            height={38.52}
            alt="LOGO"
          ></Image>
        </div>

        <div>
          <Image
            src={"/Airbnb Logo-1.svg"}
            width={123.8}
            height={38.52}
            alt="Airbnb Logo"
          ></Image>
        </div>

        <div>
          <Image
            src={"/Airbnb Logo-4.svg"}
            width={123.8}
            height={32.52}
            alt="Airbnb Logo-4.svg"
          ></Image>
        </div>

        <div>
          <Image
            src={"/Airbnb Logo-5.png"}
            width={123.8}
            height={32.52}
            alt="Airbnb Logo-5.png"
          ></Image>
        </div>

        <div>
          <Image
            src={"/Airbnb Logo-6.svg"}
            width={123.8}
            height={32.52}
            alt="Airbnb Logo-6.svg"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Page;
