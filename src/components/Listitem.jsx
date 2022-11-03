import React from 'react'

import toys3 from '../assets/toys-3.png'

const Listitem = () => {
  return (
    <div className='flex flex-row text-[7px] items-center md:text-[10px] lg:text-[15px] text-putih px-3 md:px-7 py-1 space-x-2 mb-1'>
      <p className='w-[10%] text-center'>1</p>
      <div className='flex flex-row space-x-3 items-center w-[30%]'>
        <img src={toys3} className="h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] rounded-full " />
        <p>Jamaluddin Kam</p>
      </div>  
      <p className='w-[35%] text-center'>jamaluddin@gmail.com</p>  
      <p className='w-[15%] text-center'>Mentee</p>  
      <p className='w-[25%] text-center'>Front-End</p>  
    </div>
  )
}

export default Listitem