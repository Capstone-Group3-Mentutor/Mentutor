import React from 'react'
import Layout from '../../components/Layout'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { ListClass } from '../../components/ListItems'

const InputClass = () => {
  return (
    <Layout>
      <div className="md:space-y-2 mb-3">
          <h1 className="text-putih text-lg md:text-3xl font-medium">
            Add Class
          </h1>
          <p className="text-abu font-light text-[8px] md:text-sm ">
            Join the class to learn with each others.
          </p>
      </div>
      <form className='w-full h-[10rem] md:h-[13rem] bg-card rounded-[30px] text-xs md:text-lg mb-5 px-3 md:px-7 py-3 '>
        <div className='flex flex-col space-y-2 w-1/2'>
          <p1 className="text-putih text-md md:text-lg">Class</p1>
          <CustomInput
          id="input-class"
          category="Class"
          type="text"
          placeholder="Class Name"
          />
        </div>
        <div className='text-start mt-7'>
          <CustomButton
          id="btn-addClass"
          color="Primary"
          label="Add"
          />
        </div>
      </form>
      <div className='w-full h-[26rem] md:h-[18rem] bg-card rounded-[30px] text-xs md:text-lg overflow-auto mb-7'>
        <div className='flex flex-row text-putih px-3 md:px-7 py-2 space-x-2 sticky top-0 z-10 bg-card border-abu border-opacity-50 border-b'>
          <p className='w-[10%] text-center'>No</p>  
          <p className='w-[30%] text-center'>Class Name</p>  
          <p className='w-[30%] text-center'>Number of Mentess</p>  
          <p className='w-[25%] text-center'>Mentor</p>  
          <p className='w-[20%] text-center'>Status</p>  
          <p className='w-[2%] text-center'></p>  
        </div>
        <hr className='text-abu mx-3 border-abu border-opacity-50' />
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
        <ListClass/>
      </div>
    </Layout>
  )
}

export default InputClass