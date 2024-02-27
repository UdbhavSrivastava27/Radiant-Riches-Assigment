import React, { useState } from "react";

import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import BodyBoxes from "./BodyBoxes1";
import BodyBoxes2 from "./BodyBoxes2";
import BodyBoxes3 from "./BodyBoxes3";
import BodyBoxes4 from "./BodyBoxes4";
import SmallBox1 from "./SmallBox1";

const Body = () => {

    const [value, setValue] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setValue(event.target.value);

   



  };
  const numberOfInstances = [1, 2, 3];
  return (
    <div className=" flex flex-col md:items-center justify-center bg-[#f3f3f3]  md:pb-10 ">
      <div className=" w-auto  mt-2 md:mt-10 ">

        <div className=" ">
          <h1 className=" text-4xl md:text-5xl m-2 ">Best Website builders in the US</h1>
        </div>

        <hr className=" border-b-2 border-[#E1E4E6] mt-4"></hr>
          


          <div className=" flex flex-row justify-between ">

         <div className=" hidden md:flex flex-row items-center 
          m-2 space-x-3 p-2 " >
        < IoCheckmarkDoneCircleOutline/>
        <h1>Last Updated</h1>
        <p>-</p>
        <h1>February 22, 2020</h1>

        <CiCircleInfo className="ml-6 "/>
        <h1>Advertising Disclosure</h1>

         </div>


          <div className=" flex flex-row items-center justify-center p-3">
            <h1 className=" mx-2">Top Relevant</h1>
            <IoIosArrowDown/>

          </div>
          </div>
         

         <hr className=" border-b-2 border-[#E1E4E6]"></hr>

            <div className=" mt-4 flex flex-row items-center justify-between overflow-x-auto cursor-pointer whitespace-nowrap no-scrollbar   ">
             <div className=" bg-white w-fit rounded-lg text-black m-2 p-2">
                <h1 className=" text-xs md:text-xl ">Tools</h1>
             </div>

             <div className=" bg-white  rounded-lg  text-black m-2 p-2">
                <h1 className=" text-xs md:text-xl ">AWS Builder</h1>
             </div>

             <div className=" bg-white w-fit rounded-lg text-black m-2 p-2">
                <h1 className=" text-xs md:text-xl ">Start Build</h1>
             </div>


             <div className=" bg-white w-fit rounded-lg text-black m-2 p-2">
                <h1 className=" text-xs md:text-xl ">Build Supplies</h1>
             </div>
             <div className=" bg-white w-fit rounded-lg text-black m-2 p-2">
                <h1 className=" text-xs md:text-xl ">Tooling</h1>
             </div>
             <div className=" bg-white w-fit rounded-lg text-black m-2 p-2">
                <h1 className=" text-xs md:text-xl ">BlueHosting</h1>
             </div>
            </div>

            <div className=" mt-4 flex flex-row items-center">
                <h1 className=" m-2">Home  </h1>

                <p className=" mx-1 font-semibold">{`  >`}</p>

                <h1 className=" m-2">Hosting for all</h1>

                <p className=" mx-1 font-semibold">{`  >`}</p>

                <h1 className=" m-2">Hosting</h1>

                <p className=" mx-1 font-semibold">{`  >`}</p>

                <h1 className=" m-2">Hosting6</h1>

                <p className=" mx-1 font-semibold">{`  >`}</p>

                <h1 className=" m-2">Hosting5</h1>

                <p className=" mx-1 font-semibold">{`  >`}</p>


              
            </div>


                  

      <BodyBoxes/>
      <BodyBoxes2/>
      <BodyBoxes3/>
      <BodyBoxes4/>


    <h1 className=" text-3xl mt-8">Related deals you might like for</h1>
       

      <div className=" flex flex-row items-center justify-between space-x-4 overflow-x-auto cursor-pointer whitespace-nowrap no-scrollbar ">
  
 

       
      {numberOfInstances.map((_, index) => (
        <SmallBox1 key={index} />
      ))}

      
        </div>  


 <div className=" flex flex-col space-y-4 md:flex-row items-center mt-16 justify-between mb-5 ">
<div className=" text-[#5C6874] text-3xl  ">
Sign up and get exclusive special deals
</div>


<div  className="">

    <input type="text"  className=" h-12 w-96 rounded-l-xl px-4 border-2" placeholder="Enter Your Mail" value={value}
        onChange={handleChange}/>

    <button className=" bg-[#1B88F4] h-12 rounded-r-lg p-2">Sign Up</button>
</div>


</div>
      </div>
    </div>
  );
};

export default Body;
