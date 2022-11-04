import React from 'react'
import Layout from '../../components/Layout'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const InputMember = () => {
  return (
    <Layout>
      <div className="md:space-y-2 mb-3">
        <h1 className="text-putih text-lg md:text-3xl font-medium">
           Add Member
        </h1>
         <p className="text-abu font-light text-[8px] md:text-sm ">
            Join the class to learn with each others.
        </p>
      </div>
      <form className='w-full lg:w-[35rem] h-[35rem] md:h-[35rem] lg:h-[32rem] bg-card rounded-[30px] text-xs md:text-lg px-5 md:px-10 py-2 '>
        <div className='flex flex-col space-y-4'>
          <div className='flex flex-col space-y-2 w-full'>
            <p1 className="text-putih text-md md:text-lg">Name</p1>
            <CustomInput
            id="input-fullname"
            category="Class"
            type="text"
            placeholder="Full name"
            />
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <p1 className="text-putih text-md md:text-lg">Email</p1>
            <CustomInput
            id="input-email"
            category="Class"
            type="text"
            placeholder="Email"
            />
          </div>
          <div className="flex flex-row space-x-4">
            <div className="w-1/2 flex flex-col space-y-2 ">
              <p1 className="text-putih text-md md:text-lg">Role</p1>
              <label for="dropdown-role" className="sr-only"></label>
              <select id="dropdown-role" className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem]">
                  <option selected>Choose A Role</option>
                  <option id="Mentor">Mentor</option>
                  <option id="Mentee">Mentee</option>
              </select>
            </div>
            <div className="w-1/2 flex flex-col space-y-2 ">
              <p1 className="text-putih text-md md:text-lg">Class</p1>
              <label for="dropdown-role" className="sr-only"></label>
              <select id="dropdown-role" className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem]">
                  <option className='text-abu' selected>Choose A Class</option>
                  <option id="Mentor">Front-end</option>
                  <option id="Mentee">Back-end</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col space-y-2 w-full'>
            <p1 className="text-putih text-md md:text-lg">Password</p1>
            <CustomInput
            id="input-password"
            category="Class"
            type="password"
            placeholder="***********"
            />
          </div>
        </div>
        <div className='text-end mt-5'>
          <CustomButton
          id="btn-addClass"
          color="Primary"
          label="Add"
          />
        </div>
      </form>
    </Layout>
  )
}

export default InputMember