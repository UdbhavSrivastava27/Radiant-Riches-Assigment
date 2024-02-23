import React from "react";
import pc from "../Assest/pc.png";
import { IoDiamondOutline } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

const BodyBoxes2 = () => {

  const starCount = [1,2,3,4]
  return (
    <div className=" mt-14 ">
     


       



      <div className="relative flex flex-row items-center bg-white -mt-4 border-2 border-gray-100 p-4 rounded-xl">

      <div className="p-2 absolute -top-5 left-0 flex flex-row items-center bg-[#FF7724] w-fit rounded-r-lg text-white  ">
        <IoDiamondOutline />
        <p className=" mx-2">Best Value</p>
      </div>
      <span className=" absolute top-8 rounded-full bg-white px-4 py-2 border-2 -left-5">2</span>

      <div className=" flex flex-col items-center justify-center">
        <img src={pc} alt="pc img" className=" h-28 items-center m-6 mb-2 mt-12" />
        <p>Builder</p>
</div>
        <div className="m-4  w-[483px] ">
           
            <p className=" "> <span className=" font-semibold ">SiteCraft 68-Inch Ultimate Web Design Studio-</span> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</p>
       <h1 className=" font-semibold m-1">Main highlights</h1>
            <p className="m-2 ml-6 ">[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</p>

            <h1 className=" text-blue-600 underline ">Show more </h1>
        </div>


              <div className=" flex flex-col">
                     
                <div className=" flex flex-col items-center justify-center  p-2 bg-[#F3F9FF] rounded-b-md -mt-10 m-6">
                 <h1 className=" text-4xl m-2 mb-6 font-semibold">9.5</h1>

                 <p className="  mx-4">Excellent</p>
                 <p className=" mx-4 px-2 text-sm my-1 text-[#FFB80F] flex flex-row">

      {starCount.map((_, index) => (
          <IoStar key={index}/>
      ))}
              
                
                 <IoStarHalf/>
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

export default BodyBoxes2;
