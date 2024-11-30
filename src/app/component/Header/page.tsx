import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";



export default function Home() {
  return (

    <div id="" className="flex  gap-10  py-5 w-[1280px] h-[54px]  ml-[100] mt-[100] pl-[62px] pr-[64px] border-b-2 border-black  bg-[#F7F7F7]">
   
  


 
    
      <p className="  leading-[21px] w-[240px] h-[21px] font-normal size-3.5 text-[#000000] rounded-[1] ml-[100px]  ">Phone Number: 956 742 455 678</p>

      <p className="w-149px h-[21px] text-[#000000] rounded-[1px]" >Email:info@ddsgnr.com</p>

      

    
    
    
        <div className="ml-96"><FaFacebookF/>   </div>   
             
        

          <div> <FaInstagram/>  </div>


          <div> <FaTwitter/></div>
         
          
              
     
          <div><FaLinkedin/></div>
         
          


         
      </div> 
      
    

     


    



  );
}
