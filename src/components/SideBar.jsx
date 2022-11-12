import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BiTask, BiLogOut } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useCookies } from "react-cookie";
import { handleAuth } from "../utils/reducers/reducer";
import Swal from "sweetalert2";
import Logo from "../assets/Logo.svg";

const SideBar = () => {
  const [cookies, , removeCookie] = useCookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roles = cookies.role;

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        removeCookie("token");
        removeCookie("role");
        removeCookie("id_user");
        dispatch(handleAuth(false));
        Swal.fire({
          title: "Successfully",
          text: "You have successfully logged out!",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.value) {
            navigate("/");
          }
        });
      } else if (result.isDismissed == "cancel") {
      }
    });
  };

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#854aea" : "#A7A7A7",
    };
  };
  return (
    <div className="flex flex-col w-[50px] md:w-[200px] lg:w-[320px] h-screen bg-sidebar left-0 fixed px-3 md:px-8 lg:px-12 py-5 md:pt-[3rem] md:pb-5 z-10 ">
      <div className="flex flex-row items-end space-x-2 mb-[3rem]">
        <img
          src={Logo}
          alt="logo"
          className=" w-[4rem] h-[4rem] lg:w-[4rem] lg:h-[4rem] md:h-[3.3rem] md:w-[3.3rem] "
        />
        <p className="text-transparent md:text-[20px] lg:text-[28px] font-semibold bg-clip-text bg-gradient-to-r from-[#854AEA] to-[#D441B9] hidden md:block lg:block">
          Mentutor
        </p>
      </div>

      <div className="text-abu flex flex-col space-y-8 h-full font-light">
        {roles === "admin" ? (
          <NavLink to="/homeadmin" style={navLinkStyle}>
            <div
              id="nav-home"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <AiFillHome size={25} />
              <h3 className="hidden md:block">Home</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "admin" ? (
          <NavLink to="/inputclass" style={navLinkStyle}>
            <div
              id="nav-input"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <BiTask size={25} />
              <h3 className="hidden md:block">Input Class</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "admin" ? (
          <NavLink to="/inputmember" style={navLinkStyle}>
            <div
              id="nav-member"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <IoIosPeople size={25} />
              <h3 className="hidden md:block">Input Member</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "mentor" ? (
          <NavLink to="/homementor" style={navLinkStyle}>
            <div
              id="nav-homemntor"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <AiFillHome size={25} />
              <h3 className="hidden md:block">Home</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "mentor" ? (
          <NavLink to="/inputtask" style={navLinkStyle}>
            <div
              id="nav-inputtask"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button  hover:text-button cursor-pointer"
            >
              <BiTask size={25} />
              <h3 className="hidden md:block">Task</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "mentor" ? (
          <NavLink to="/forummentor" style={navLinkStyle}>
            <div
              id="nav-forummentor"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <IoIosPeople size={25} />
              <h3 className="hidden md:block">Forum</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "mentor" ? (
          <NavLink to="/profilementor" style={navLinkStyle}>
            <div
              id="nav-profile"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <CgProfile size={25} />
              <h3 className="hidden md:block">Profile</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "mentee" ? (
          <NavLink to="/homementee" style={navLinkStyle}>
            <div
              id="nav-homementee"
              className="flex flex-row space-x-0 md:space-x-8 items-center  active:text-button hover:text-button cursor-pointer"
            >
              <AiFillHome size={25} />
              <h3 className="hidden md:block">Home</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "mentee" ? (
          <NavLink to="/task" style={navLinkStyle}>
            <div
              id="nav-taskmentee"
              className="flex flex-row space-x-0 md:space-x-8 items-center  active:text-button  hover:text-button cursor-pointer"
            >
              <BiTask size={25} />
              <h3 className="hidden md:block"> Task</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "mentee" ? (
          <NavLink to="/forummentee" style={navLinkStyle}>
            <div
              id="nav-forummentee"
              className="flex flex-row space-x-0 md:space-x-8 items-center  active:text-button  hover:text-button cursor-pointer"
            >
              <IoIosPeople size={25} />
              <h3 className="hidden md:block">Forum</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
        {roles === "mentee" ? (
          <NavLink to="/profilementee" style={navLinkStyle}>
            <div
              id="nav-profile"
              className="flex flex-row space-x-0 md:space-x-8 items-center  active:text-button hover:text-button cursor-pointer"
            >
              <CgProfile size={25} />
              <h3 className="hidden md:block">Profile</h3>
            </div>
          </NavLink>
        ) : (
          ""
        )}
      </div>
      <div
        id="btn-logout"
        onClick={() => (cookies ? handleLogout() : navigate("/"))}
        className="text-abu flex flex-row space-x-0 md:space-x-8 items-center hover:text-merah cursor-pointer"
      >
        <BiLogOut size={25} />
        <h3 className="hidden md:block">Logout</h3>
      </div>
    </div>
  );
};

export default SideBar;
