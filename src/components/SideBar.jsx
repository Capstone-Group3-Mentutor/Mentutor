import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BiTask, BiLogOut } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);

  return (
    <div className="flex flex-col w-[50px] md:w-[200px] lg:w-[320px] h-screen bg-sidebar left-0 fixed px-3 md:px-8 lg:px-12 py-5 md:pt-16 md:pb-5 z-10 ">
      <Link to="/home">
        <p className="text-transparent md:text-[26px] lg:text-[30px] font-semibold mb-10 bg-clip-text bg-gradient-to-r from-[#D441B9] to-[#854AEA] hidden md:block lg:block">
          Mentutor
        </p>
        <p className="text-transparent text-[30px] font-semibold mb-10 bg-clip-text bg-gradient-to-r from-[#D441B9] to-[#854AEA] md:hidden">
          M
        </p>
      </Link>
      <div className="text-abu flex flex-col space-y-8 h-full font-light">
        <div className="flex flex-row space-x-0 md:space-x-8 items-center hover:text-button cursor-pointer">
          <AiFillHome size={25} />
          <h3 className="hidden md:block">Home</h3>
        </div>
        {isLoggedIn && (
          <div className="flex flex-row space-x-0 md:space-x-8 items-center  hover:text-button cursor-pointer">
            <BiTask size={25} />
            <h3 className="hidden md:block">Create Task</h3>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex flex-row space-x-0 md:space-x-8 items-center  hover:text-button cursor-pointer">
            <IoIosPeople size={25} />
            <h3 className="hidden md:block">Forum</h3>
          </div>
        )}
        {isLoggedIn && (
          <div className="flex flex-row space-x-0 md:space-x-8 items-center hover:text-button cursor-pointer">
            <CgProfile size={25} />
            <h3 className="hidden md:block">Profile</h3>
          </div>
        )}
      </div>
      <div className="text-abu flex flex-row space-x-0 md:space-x-8 items-center cursor-pointer">
        <BiLogOut size={25} />
        <h3 className="hidden md:block">Logout</h3>
      </div>
    </div>
  );
};

export default SideBar;
