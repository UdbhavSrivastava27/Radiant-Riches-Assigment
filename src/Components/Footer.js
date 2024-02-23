import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'


const Footer = () => {
  return (
    <div className=' h-[400px] bg-black text-[#B6BDC4] p-10 '>

      <div className=' flex flex-row items-center justify-evenly mt-16'>

        <div className=' flex flex-col   space-y-2 '>
         <h1 className=' text-[#FFFFFF] text-2xl'>CATEGORIES</h1>
        <h1> Web Builder</h1>
        <h1> Hosting</h1>
        <h1> Data Center</h1>
        <h1>Robotic-Automation </h1>
      

         </div>

         <div className=' flex flex-col  space-y-2 '>

          <h1 className=' text-[#FFFFFF] text-2xl'>CONTACT </h1>
          <h1> Contact</h1>
          <h1>Privacy Policy </h1>
          <h1>Terms Of Service </h1>
          <h1> Categories</h1>
          <h1>About </h1>
         </div>


         <div className=' flex flex-row items-center justify-center'>
          <h1 className=' mx-2'>United States</h1>
          <IoIosArrowDown />
         </div>
      </div>
    </div>
  )
}

export default Footer