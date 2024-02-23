import React from "react";
import pc from "../Assest/pc.png";
import { MdDone  } from "react-icons/md";
import { IoStar, IoStarOutline } from "react-icons/io5";

const BodyBoxes4 = () => {

  const starCount = [1,2,3,4];
  return (
    <div className=" mt-14 ">
      <div className="relative flex flex-row items-center bg-white -mt-4  p-4 rounded-xl">
        <span className=" absolute top-8 rounded-full bg-white border-2  px-4 py-2  -left-5">
          4
        </span>

        <div className=" flex flex-col items-center justify-center">
          <img
            src={pc}
            alt="pc img"
            className=" h-28 items-center m-6 mb-2 mt-12"
          />
          <p>CDK</p>
        </div>
        <div className="m-4  w-[483px] ">
          <p className=" ">
            {" "}
            <span className=" font-semibold ">
            CDK Resposive Builder:
            </span>{" "}
            An extensive library of widgets and apps, and detailed step-by-step guides
          </p>

           <span className=" bg-[#F2F4F7] p-1 rounded-md  text-[#074786]  ">26% Off</span>
          <h1 className=" font-semibold m-1">Main highlights</h1>

          <div className="mx-6 rounded-xl flex flex-col m-2 bg-[#FFF4ED] p-2  ">
            <div className=" flex flex-row items-center mt-1">
              {" "}
              <span className=" bg-white rounded-md p-1  text-blue-600 ">9.9</span>
              <p className="m-2">Building Responsive</p>
            </div>

            <div className=" flex flex-row items-center mt-1">
              {" "}
              <span className=" bg-white rounded-md p-1  text-blue-600">8.9</span>
              <p className="m-2   ">Cool</p>
            </div>


            <div className=" flex flex-row items-center mt-1">
              {" "}
              <span className=" bg-white rounded-md p-1  text-blue-600">8.9</span>
              <p className="m-2   ">Docs</p>
            </div>
          </div>
            



          <div className=" mt-4">

            <h1>Why we love it </h1>

            <div className=" flex flex-col">
               
               <span className=" flex flex-row items-center mt-2 ">
                <MdDone  className=" bg-[#EBF5FF] rounded-full text-lg text-[#0855A1] mr-2 p-[1px]"/>
                <p>Documentation</p>
               </span>


               <span className=" flex flex-row items-center mt-2 ">
                <MdDone  className=" bg-[#EBF5FF] rounded-full text-lg text-[#0855A1] mr-2 p-[1px]"/>
                <p>Easy Use</p>
               </span>



               <span className=" flex flex-row items-center mt-2 ">
                <MdDone  className=" bg-[#EBF5FF] rounded-full text-lg text-[#0855A1] mr-2 p-[1px]"/>
                <p>Out of box</p>
               </span>

             
            </div>
          </div>



          <h1 className=" text-blue-600 underline mt-4 ">Show more </h1>
        </div>
         

        <div className=" flex flex-col ">
          <div className=" flex flex-col items-center justify-center  p-2 bg-[#F3F9FF] rounded-b-md -mt-10  mx-6">
            <h1 className=" text-4xl m-2 mb-6 font-semibold">9.1</h1>

            <p className="  mx-4">Very Good</p>
            <p className=" mx-4 px-2 text-sm mb-2 text-[#FFB80F] flex flex-row">

{starCount.map((_, index) => (
    <IoStar key={index}/>
))}
        
          
        <IoStarOutline />
           </p>
          </div>

          <div className=" bg-[#1B88F4] rounded-md  mt-64 ">
            <h1 className=" text-white text-center m-2">View</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyBoxes4;
