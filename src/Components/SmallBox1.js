import React from 'react'

import pc from '../Assest/pc.png'

const SmallBox1 = () => {
  return (
    <div className=' bg-[#FFFFFF] md:w-fit rounded-lg mt-6 px-2 '>

         <div className=' flex items-center justify-center m-4'>

            <img src={pc} alt=' pc img' className=' my-6'/>
         </div>

         <span className=' ml-4  rounded-md p-1 font-semibold text-[#074786] bg-[#F2F4F7]'>20% Off</span>
         <span className=' rounded-md font-semibold mx-1 p-1 text-[#074786] bg-[#F2F4F7]'>Limited time</span>

         <div className=' flex flex-col items-center'>
            <h1 className=' m-2 text-[#626E79] font-bold text-xl'>Webbuilder 1</h1>
            <p className='text-[#626E79] px-4 p-2'>Computer  Modern clasic with wix support</p>
         </div>
  

            
         <div className=' px-4 flex flex-row items-center space-x-5'>  
         <span className=' text-xl'>$39.96</span>

         <span className=' text-sm text-[#9FA9B3]'>
            $49.96
         </span>

         <span className=' text-xs text-[#EF4C5D]'>
            (20% Off)
         </span>

         </div> 

         <div className=' bg-[#1B88F4] rounded-lg m-4 '>
            <h1 className=' text-white text-center p-2 text-xl'>View</h1>
         </div>
    </div>

    
  )
}

export default SmallBox1