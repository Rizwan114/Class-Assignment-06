import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoDribbble } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";

const Page = () => {
  return (
  <section id='h5'>
    <div className='w-[1280px] h-[995px] pt-[112px] pr-[64px] pb-[112px] pl-[64] bg-[#F7F7F7]'>

      <div className='w-[768px] h-[109px] gap-[16px] ml-[180px] mb-8'>
           <h1 className='w-[768px] h-[58px]  font-bold size-[48px] leading-[57.6px] text-center text-4xl'>Our team</h1>

           <p className='w-[768px] h-[27px] font-normal size-[18px] leading-[27px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>

                                 {/* footer picture */}
      

      <div className='w-[1280px] h-[273px] gap-[96px] ml-16 flex'>

                       {/* picture 01 */}
      
      <div className='w-[94.67px] h-[209px] gap-[24px] '>
      
        <Image src={"/footer-image-01.svg"} width={80} height={80} alt='footer-image'></Image>
       
          <div className='w-[394.67px] h-[57px] gap-[16px] mt-5'> 
           <h3 className='w-[394.67px] h-[30px] font-semibold size-[20px] leading-[30px] '>James Nduku</h3>
           <p className='w-[394.67px] h-[27px] font-normal size-[18px] leading-[27px]'>Marketing Coordinator</p>
          </div>

        <div className='w-[100x] h-[24px] gap-[14px] flex justify-center  mt-14'>
        <FaLinkedin />
        <TiSocialTwitter />
        <IoLogoDribbble />
        </div>

      </div>



                            {/* picture 02 */}
      
      <div className='w-[94.67px] h-[209px] gap-[24px] ml-80 '>
      
      <Image src={"/footer-image-02.svg"} width={80} height={80} alt='footer-image'></Image>
     
        <div className='w-[394.67px] h-[57px] gap-[16px] mt-5'> 
         <h3 className='w-[394.67px] h-[30px] font-semibold size-[20px] leading-[30px] '>Joseph Munyambu</h3>
         <p className='w-[394.67px] h-[27px] font-normal size-[18px] leading-[27px]'>Nursing Assistant</p>
        </div>

      <div className='w-[100x] h-[24px] gap-[14px] flex justify-center  mt-14'>
      <FaLinkedin />
      <TiSocialTwitter />
      <IoLogoDribbble />
      </div>

    </div>





                             {/* picture 03 */}
      
     <div className='w-[94.67px] h-[209px] gap-[24px] ml-80 '>
      
      <Image src={"/footer-image-03.svg"} width={80} height={80} alt='footer-image'></Image>
     
        <div className='w-[394.67px] h-[57px] gap-[16px] mt-5'> 
         <h3 className='w-[394.67px] h-[30px] font-semibold size-[20px] leading-[30px] '>Joseph Ngumbau</h3>
         <p className='w-[394.67px] h-[27px] font-normal size-[18px] leading-[27px]'>Medical Assistant</p>
        </div>

      <div className='w-[100x] h-[24px] gap-[14px] flex justify-center  mt-14'>
      <FaLinkedin />
      <TiSocialTwitter />
      <IoLogoDribbble />
      </div>

    </div>

    </div>

                    {/* //////////////////////////////////////////////////////////////////// */}

        <div className='w-[1280px] h-[273px] gap-[96px] mt-20 flex'>

                               {/* picture 04 */}

        <div className='w-[94.67px] h-[209px] ml-16 gap-[24px]  '>
      
      <Image src={"/footer-image-04.svg"} width={80} height={80} alt='footer-image'></Image>
     
        <div className='w-[394.67px] h-[57px] gap-[16px] mt-5'> 
         <h3 className='w-[394.67px] h-[30px] font-semibold size-[20px] leading-[30px] '>Erick Kipkemboi</h3>
         <p className='w-[394.67px] h-[27px] font-normal size-[18px] leading-[27px]'>Web Designer</p>
        </div>


        <div className='w-[100x] h-[24px] gap-[14px] flex justify-center  mt-14'>
      <FaLinkedin />
      <TiSocialTwitter />
      <IoLogoDribbble />
      </div>

    </div>




                         {/* picture 05 */}
      
    <div className='w-[94.67px] h-[209px] gap-[24px] ml-80 '>
      
      <Image src={"/footer-image-05.svg"} width={80} height={80} alt='footer-image'></Image>
     
        <div className='w-[394.67px] h-[57px] gap-[16px] mt-5'> 
         <h3 className='w-[394.67px] h-[30px] font-semibold size-[20px] leading-[30px] '>Stephen Kerubo</h3>
         <p className='w-[394.67px] h-[27px] font-normal size-[18px] leading-[27px]'>President of Sales</p>
        </div>


        <div className='w-[100x] h-[24px] gap-[14px] flex justify-center  mt-14'>
      <FaLinkedin />
      <TiSocialTwitter />
      <IoLogoDribbble />
      </div>
    

    </div>




                          {/* picture 06 */}
     <div className='w-[94.67px] h-[209px] gap-[24px] ml-80 '>
      
      <Image src={"/footer-image-06.svg"} width={80} height={80} alt='footer-image'></Image>
     
        <div className='w-[394.67px] h-[57px] gap-[16px] mt-5'> 
         <h3 className='w-[394.67px] h-[30px] font-semibold size-[20px] leading-[30px] '>John Leboo</h3>
         <p className='w-[394.67px] h-[27px] font-normal size-[18px] leading-[27px]'>Dog Trainer</p>
        </div>


        <div className='w-[100x] h-[24px] gap-[14px] flex justify-center  mt-14'>
      <FaLinkedin />
      <TiSocialTwitter />
      <IoLogoDribbble />
      </div>

  
    </div>



        </div>

                                    {/* next footer */}
                  {/* main div start */}
            <div className='w-[1280px] h-[610px]  mt-28  bg-[#F7F7F7]'>

              <div className='w-[560px] h-[109px] ml-14 gap-[24px] '>

                <h1 className='w-[560px] h-[58px] font-bold size-[48px] leading-[57.6px]  text-black text-[40px]'>Customer testimonials</h1>
                  <p className='w-[560px] h-[27px] font-normal size-[18px] leading-[27px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

                              {/* picture div start */}
                  
              <div className='w-[1152px] h-[417px] gap-[48px] flex '>

                <div className='w-[362.67px] h-[321.89px] rounded-[1px] p-[32px] gap-[24px] '>
                  {/* icon div */}
                  <div className='w-[116px] h-[18.89px] gap-[4px] flex'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  </div>

                  <p className='w-[298.67px] h-[135px] font-normal size-[18px] leading-[27px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                  <div className='w-[35px] h-[56px] gap-[20px] '>
                    <div className='flex'>
                    <Image src={"/Avatar Image-01.svg"} width={56} height={56} alt='Avatar Image'></Image>
                    {/* </div><div className='w-[178px] h-[48px]'> */}
                    <span><h6 className='w-[110px] h-[24px] font-semibold size-[16px] leading-[24px] ml-5 '>James Nduku</h6>
                    <p className='w-[150px] h-[24px] font-normal size-[16px] leading-[24px] ml-5'>Software Developer</p></span>
                      </div>
                  </div>


                </div>


                                                          {/* picture-02 */}
                


                  <div className='w-[362.67px] h-[321.89px] rounded-[1px] p-[32px] gap-[24px] '>
                  {/* icon div */}
                  <div className='w-[116px] h-[18.89px] gap-[4px] flex'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  </div>

                  <p className='w-[298.67px] h-[135px] font-normal size-[18px] leading-[27px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                  <div className='w-[35px] h-[56px] gap-[20px] '>
                    <div className='flex'>
                    <Image src={"/Avatar Image-02.svg"} width={56} height={56} alt='Avatar Image'></Image>
                    {/* </div><div className='w-[178px] h-[48px]'> */}
                    <span><h6 className='w-[127px] h-[24px] font-semibold size-[16px] leading-[24px] ml-5 '>Erick Kipkemboi</h6>
                    <p className='w-[150px] h-[24px] font-normal size-[16px] leading-[24px] ml-5'>Scrum Master</p></span>
                      </div>
                  </div>


                </div>




                                                        {/* picture 03 */}
                

                                                        <div className='w-[362.67px] h-[321.89px] rounded-[1px] p-[32px] gap-[24px] '>
                  {/* icon div */}
                  <div className='w-[116px] h-[18.89px] gap-[4px] flex'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  </div>

                  <p className='w-[298.67px] h-[135px] font-normal size-[18px] leading-[27px] '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>

                  <div className='w-[35px] h-[56px] gap-[20px] '>
                    <div className='flex'>
                    <Image src={"/Avatar Image-03.svg"} width={56} height={56} alt='Avatar Image'></Image>
                    {/* </div><div className='w-[178px] h-[48px]'> */}
                    <span><h6 className='w-[127px] h-[24px] font-semibold size-[16px] leading-[24px] ml-5 '>Stephen Kerubo</h6>
                    <p className='w-[150px] h-[24px] font-normal size-[16px] leading-[24px] ml-5'>UI/UX Designer</p></span>
                      </div>
                  </div>


                </div>


              </div>

              {/* picture  div end */}


                    <div className='w-[1200px] h-[48px] justify space-between '>
                      <Image src={"/Content-footer.svg"} width={1172} height={72} alt='/Content'></Image>

                    </div>

            </div>
            {/* main div end */}


    </div>
  </section>
  )
}

export default Page
