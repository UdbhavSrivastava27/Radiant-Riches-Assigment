import React, { useState } from "react";

 import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const [value, setValue] = useState('');


  const handleChange = (event) => {
    setValue(event.target.value);

   



  };
  return (


     <div className=" flex items-center justify-center bg-black">
    <div className=" bg-black h-20 text-[#D1D6DA] flex items-center justify-evenly space-x-20">
    
      <div className="flex relative rounded-xl m-4  items-center">
        <input type="text" className=" px-6  my-2 h-10 w-64 rounded-md text-black PX-8" value={value}
        onChange={handleChange}/>
        <CiSearch className=" flex text-black text-2xl absolute  "/>
      </div>

  
        <h1>Categories</h1>
        <h1>Website Builders</h1>
        <h1 className="">Today's deals</h1>

    </div>
    </div>
  );
};

export default NavBar;
