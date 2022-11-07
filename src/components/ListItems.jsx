import React from 'react'

import toys3 from '../assets/toys-3.png'
import toys1 from '../assets/toys-1.png'
import { SlOptionsVertical } from 'react-icons/sl'
import { AiFillEdit } from 'react-icons/ai'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'



const ListMembers = () => {
  return (
    <div className='flex flex-row text-[5px] items-center md:text-[10px] lg:text-[15px] text-putih px-3 md:px-7 py-1 space-x-2 mb-1'>
      <p className='w-[10%] text-center'>1</p>
      <div className='flex flex-row space-x-3 items-center justify-center w-[30%]'>
        <img src={toys3} className="h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] rounded-full " />
        <p>Jamaluddin Kam</p>
      </div>  
      <p className='w-[35%] text-center'>jamaluddin@gmail.com</p>  
      <p className='w-[15%] text-center'>Mentee</p>  
      <p className='w-[25%] text-center'>Front-End</p>  
      {/* option */}
      <div className="dropdown dropdown-end ">
        <label
          id="icon-options"
          tabIndex={0}
          className="cursor-pointer text-putih"
        >
          <SlOptionsVertical size={13} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-1 shadow-md bg-card rounded-[10px] w-[6rem] text-sm text-abu"
        >
          <label
            htmlFor="modal-edit-user"
            className="hover:text-button px-4 pt-2 text-sm text-abu cursor-pointer"
          >
            Edit
          </label>
          <li id="delete-click" className=" text-[#CC5D5D]">
            <a>Delete</a>
          </li>
        </ul>
      </div>
      {/* end option */}
      {/* ---modal--- */}
      <input type="checkbox" id="modal-edit-user" className="modal-toggle" />
      <div className="modal  ">
        <div className="modal-box w-11/12 max-w-3xl bg-card">
          <label
            htmlFor="modal-edit-user"
            className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
          >
            ✕
          </label>
          <form className="flex flex-col md:p-9 lg:p-9 gap-5">
            <h3 className="font-medium text-lg text-putih mb-2">
              Edit Profile
            </h3>
            <div className="flex flex-row  items-center justify-between">
              <div className=" flex flex-col justify-center items-center gap-3 space-y-3">
                <img
                  src={toys1}
                  alt="avatar"
                  className="h-[5rem] w-[5rem] md:h-[12rem] md:w-[12rem] rounded-full "
                />

                <CustomButton
                  id="btn-uploadFoto"
                  label="Upload"
                  color="Primary"
                />
              </div>

              <div className="flex flex-col gap-4 ">
                <CustomInput
                  id="input-fullname"
                  placeholder="your name"
                  category="Submit"
                  type="text"
                />
                <CustomInput
                  id="input-email"
                  placeholder="contoh@gmail.com"
                  category="Submit"
                  type="text"
                />
                <CustomInput
                  id="input-password"
                  placeholder="Password"
                  category="Submit"
                  type="password"
                />
                <div className="flex flex-row space-x-4">
                  <div className="flex flex-col space-y-2 ">
                    <label htmlFor="dropdown-class" className="sr-only"></label>
                    <select id="dropdown-class" className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem] p-2">
                        <option className='text-abu' value="Class">Class</option>
                        <option value="Front-end-end" id="Mentor">Front-end</option>
                        <option value="Back-end" id="Mentee">Back-end</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-2 ">
                    <label for="dropdown-role" className="sr-only"></label>
                    <select id="dropdown-role" className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem] p-2">
                        <option className='text-abu' value="Role">Role</option>
                        <option value="Mentor" id="Mentor">Mentor</option>
                        <option value="Mentee" id="Mentee">Mentee</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <CustomButton
                id="btn-submitAdmin"
                label="Submit"
                color="Primary"
              />
            </div>
          </form>
        </div>
      </div>
      {/* end modal */}
    </div>
  )
}

const ListClass = ({index, student, name, status, onSubmit, className, onClick, setStatus, setClassName}) => {
  return (
    <>
    <div className='flex flex-row text-[7px] items-center md:text-[10px] lg:text-[15px] text-putih px-3 md:px-7 py-0.5 space-x-2 mb-1'>
      <p className='w-[10%] text-center'>{index + 1}</p>
      <p className='w-[30%] text-center'>{name}</p>  
      <p className='w-[30%] text-center'>{student}</p>   
      <p className={`w-[17%] text-center ${status === "active" ? "text-[#23EF11]" : "text-[#E41E1E]"}`}>{status}</p>  
      {/* option */}
      <div className="dropdown dropdown-end ">
        <label
          id="icon-options"
          tabIndex={0}
          className="cursor-pointer text-putih"
        >
          <SlOptionsVertical size={13} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-1 shadow-md bg-card rounded-[10px] w-[6rem] text-sm text-abu"
        >
          <label
            htmlFor="modal-edit-class"
            className="hover:text-button px-4 pt-2 text-sm text-abu cursor-pointer"
            
          >
            Edit
          </label>
          <li id="delete-click" className=" text-[#CC5D5D]" onClick={onClick}>
            <a>Delete</a>
          </li>
        </ul>
      </div>
      {/* end option */}
      <input type="checkbox" id="modal-edit-class" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-1/2 bg-card p-14">
          <div className='flex flex-row justify-between'>
            <h1 className="text-putih text-lg md:text-3xl font-medium"
            >
              Edit Class
            </h1>
            <label
              htmlFor="modal-edit-class"
              className="cursor-pointer btn-sm text-putih border-white"
            >
              ✕
            </label>
          </div>
          <form className="flex flex-col"
          onSubmit={onSubmit}>
            <div className="flex flex-col space-y-2 my-5">
              <CustomInput
                id="input-class"
                placeholder="Class Name"
                category="Class"
                onChange={setClassName}
                value={className}
              />
              <div className="w-1/2 flex flex-col space-y-2 ">
                <label htmlFor="dropdown-status" className="sr-only"></label>
                <select id="dropdown-status" className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem]"
                onChange={setStatus}
                value={status}
                >
                    <option value="active" id="active">active</option>
                    <option value="non active" id="non active">non active</option>
                </select>
              </div>
            </div>
            <div className="flex justify-start">
              <CustomButton
                id="btn-submitEditClass"
                label="Submit"
                color="Primary"
                
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr className='text-abu mx-3 border-abu border-opacity-50' />
    </>
  )
}

const ListTask = () => {
  return (
    <>
    <div className='flex flex-row text-[7px] items-center md:text-[10px] lg:text-[15px] text-putih px-3 md:px-7 py-2 space-x-2 mb-1'>
      <p className='w-[10%] text-center'>1</p>
      <p className='w-[30%] text-center'>Jamaludin Kam</p>  
      <div className='flex flex-row space-x-3 items-center justify-center w-[35%]'>
        <img src={toys3} className="h-[1rem] w-[1rem] md:h-[2rem] md:w-[2rem] " />
        <p>Jamaluddin Kam</p>
      </div>  
      <p className='w-[15%] text-center'>70</p>  
      {/* option */}
      <label
      htmlFor="modal-edit-points"
      className="hover:text-button px-4 text-sm text-abu cursor-pointer"
        >
        <AiFillEdit/>
      </label>
      {/* end option */}
      <input type="checkbox" id="modal-edit-points" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-1/2 bg-card p-14">
          <div className='flex flex-row justify-between'>
            <h1 className="text-putih text-lg md:text-3xl font-medium">
              Edit Points
            </h1>
            <label
              htmlFor="modal-edit-points"
              className="cursor-pointer btn-sm text-putih border-white"
            >
              ✕
            </label>
          </div>
          <form className="flex flex-col">
            <div className="flex flex-col space-y-2 my-5">
              <CustomInput
                id="input-class"
                placeholder="Class Name"
                category="Class"
              />
            </div>
            <div className="flex justify-start">
              <CustomButton
                id="btn-submitEditClass"
                label="Submit"
                color="Primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr className='text-abu mx-3 border-abu border-opacity-50' />
    </>
  )
}

export { ListMembers, ListClass, ListTask }