import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle); // Toggle the current value of toggle
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-center bg-black">
      <div className="bg-black h-20 text-[#D1D6DA] flex items-center justify-evenly space-x-20">
        <div className="flex relative rounded-xl m-4 items-center">
          <input 
            type="text" 
            className="px-6 my-2 h-10 w-64 rounded-md text-black PX-8" 
            value={value}
            onChange={handleChange}
          />

          
          <CiSearch className="flex text-black text-2xl absolute"/>
        </div>
        <h1 className=" hidden md:block">Categories</h1>
              <h1  className=" hidden md:block">Website Builders</h1>
              <h1  className=" hidden md:block">Today's deals</h1>







        <div className=" md:hidden lg:hidden">
          {toggle ? (
          
            <RxCross1 onClick={handleToggle} className="  float-right mr-10 " size={30}/>
          ) : (
        
            <GiHamburgerMenu onClick={handleToggle} size={30} />

          )}

          {toggle && (
            <div className=" absolute top-20 bg-black right-4 flex flex-col justify-center items-center p-8 rounded-b-lg space-y-6">
              <h1>Categories</h1>
              <h1>Website Builders</h1>
              <h1 className="">Today's deals</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
