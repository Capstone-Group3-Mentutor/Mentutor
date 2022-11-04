import React from 'react'

import toys3 from '../assets/toys-3.png'
import {MdOutlineMoreVert, MdExpandMore} from 'react-icons/md'
import {TiDeleteOutline} from 'react-icons/ti'

const ListMembers = () => {
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
      <button id="icon-kebab">
        <MdOutlineMoreVert/>
      </button>
    </div>
  )
}

const ListClass = () => {
  return (
    <>
    <div className='flex flex-row text-[7px] items-center md:text-[10px] lg:text-[15px] text-putih px-3 md:px-7 py-0.5 space-x-2 mb-1'>
      <p className='w-[10%] text-center'>1</p>
      <p className='w-[30%] text-center'>A</p>  
      <p className='w-[30%] text-center'>40</p>  
      <p className='w-[25%] text-center'>Vincent Sars</p>  
      <div className='w-[17%] text-center flex flex-row justify-center space-x-2'>
        <p >Active</p>
        <button id="icon-option">
          <MdExpandMore size={20} />
        </button>  
      </div>
      <button id="icon-kebab">
        <TiDeleteOutline size={20} color="red"/>
      </button>
    </div>
    <hr className='text-abu mx-3 border-abu border-opacity-50' />
    </>
  )
}

export { ListMembers, ListClass }