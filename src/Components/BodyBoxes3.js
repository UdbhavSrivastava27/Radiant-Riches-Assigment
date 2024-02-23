import React from "react";
import pc from "../Assest/pc.png";
import { IoStar } from "react-icons/io5";

const BodyBoxes3 = () => {
   const starCount =[ 1,2,3,4,5]
  return (
    <div className=" mt-14 ">
     


       



      <div className="relative flex flex-row items-center bg-white -mt-4 border-2 border-gray-100 p-4 rounded-xl">

      <span className=" absolute top-8 rounded-full bg-white px-4 py-2 -left-5 border-2">3</span>

      <div className=" flex flex-col items-center justify-center">
        <img src={pc} alt="pc img" className=" h-28 items-center m-6 mb-2 mt-12" />
        <p>Builder</p>
</div>
        <div className="m-4  w-[483px] ">
           
            <p className=" "> <span className=" font-semibold ">WixPro 72-Inch Responsive Website Builder-</span> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</p>
       <h1 className=" font-semibold m-1">Main highlights</h1>
            <p className="m-2 mx-6 ">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>

            <h1 className=" text-blue-600 underline ">Show more </h1>
        </div>


              <div className=" flex flex-col">
                     
                <div className=" flex flex-col items-center justify-center  p-2 bg-[#F3F9FF] rounded-b-md -mt-10 m-6">
                 <h1 className=" text-4xl m-2 mb-6 font-semibold">9.3</h1>

                 <p className="  mx-4">Excepitonal</p>
                 <p className=" mx-4 px-2 text-sm mb-2 mt-1 text-[#FFB80F] flex flex-row">

{starCount.map((_, index) => (
    <IoStar key={index}/>
))}
        </p>
                 </div>

                 <div className=" bg-[#1B88F4] rounded-md  mt-10">
                    <h1 className=" text-white text-center m-2">View</h1>
                 </div>
                 
              </div>

               
      </div>
    </div>
  );
};

export default BodyBoxes3;
