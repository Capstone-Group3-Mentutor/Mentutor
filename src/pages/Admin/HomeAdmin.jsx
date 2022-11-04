import React from 'react'

import Layout from '../../components/Layout'
import toys3 from '../../assets/toys-3.png'
import {ListMembers} from '../../components/ListItems'


const HomeAdmin = () => {

  return (
    <Layout>
      <div className="flex justify-between ">
        <div className="md:space-y-2">
          <h1 className="text-putih text-lg md:text-3xl font-medium">
            Hello <span>Eel Naa !</span>
          </h1>
          <p className="text-abu font-light text-[8px] md:text-sm">
            Welcome back, you are doing great.
          </p>
        </div>
        <div className="flex items-center ">
          <img
            src={toys3}
            alt="avatar"
            className="h-[1.5rem] w-[1.5rem]  md:h-[3rem] md:w-[3rem] rounded-full "
          />
          <div className="pl-2 md:pl-4 space-y-0">
            <h1 className="text-putih text-[10px] md:text-base">Eel Naa</h1>
            <p className="text-abu font-light text-[8px] md:text-xs">Admin</p>
          </div>
        </div>
      </div>
      <h1 className="text-putih text-lg md:text-3xl font-normal mt-10 mb-3">
        List Mentor / Mentee
      </h1>
      <div className='w-full h-[30rem] md:h-[27rem] bg-card rounded-[30px] text-xs md:text-lg overflow-auto mb-5'>
        <div className='flex flex-row text-putih px-3 md:px-7 py-2 space-x-2 sticky top-0 z-10 bg-card border-b border-abu'>
          <p className='w-[10%] text-center'>No</p>  
          <p className='w-[30%] text-center'>Name</p>  
          <p className='w-[35%] text-center'>Email</p>  
          <p className='w-[15%] text-center'>Role</p>  
          <p className='w-[25%] text-center'>Class</p>  
          <p className='w-[2%] text-center'></p>
        </div>
        <ListMembers/>
        <ListMembers/>
        <ListMembers/>
        <ListMembers/>
        <ListMembers/>
        <ListMembers/>
        <ListMembers/>
        <ListMembers/>
      </div>
    </Layout>
  )
}

export default HomeAdmin