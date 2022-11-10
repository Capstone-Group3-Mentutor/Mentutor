import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { BiTask, BiLogOut } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useCookies } from "react-cookie";
import { handleAuth } from "../utils/reducers/reducer";
import Swal from "sweetalert2";

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

  return (
    <div className="flex flex-col w-[50px] md:w-[200px] lg:w-[320px] h-screen bg-sidebar left-0 fixed px-3 md:px-8 lg:px-12 py-5 md:pt-16 md:pb-5 z-10 ">
      <p className="text-transparent md:text-[26px] lg:text-[30px] font-semibold mb-10 bg-clip-text bg-gradient-to-r from-[#D441B9] to-[#854AEA] hidden md:block lg:block">
        Mentutor
      </p>
      <p className="text-transparent text-[30px] font-semibold mb-10 bg-clip-text bg-gradient-to-r from-[#D441B9] to-[#854AEA] md:hidden">
        M
      </p>

      <div className="text-abu flex flex-col space-y-8 h-full font-light">
        {roles === "admin" ? (
          <Link to="/homeadmin">
            <div
              id="nav-home"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <AiFillHome size={25} />
              <h3 className="hidden md:block">Home</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "admin" ? (
          <Link to="/inputclass">
            <div
              id="nav-input"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <BiTask size={25} />
              <h3 className="hidden md:block">Input Class</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "admin" ? (
          <Link to="/inputmember">
            <div
              id="nav-member"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <IoIosPeople size={25} />
              <h3 className="hidden md:block">Input Member</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "mentor" ? (
          <Link to="/homementor">
            <div
              id="nav-homemntor"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <AiFillHome size={25} />
              <h3 className="hidden md:block">Home</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "mentor" ? (
          <Link to="/inputtask">
            <div
              id="nav-inputtask"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button  hover:text-button cursor-pointer"
            >
              <BiTask size={25} />
              <h3 className="hidden md:block">Task</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "mentor" ? (
          <Link to="/forummentor">
            <div
              id="nav-forummentor"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <IoIosPeople size={25} />
              <h3 className="hidden md:block">Forum</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "mentor" ? (
          <Link to="/profilementor">
            <div
              id="nav-profile"
              className="flex flex-row space-x-0 md:space-x-8 items-center active:text-button hover:text-button cursor-pointer"
            >
              <CgProfile size={25} />
              <h3 className="hidden md:block">Profile</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "mentee" ? (
          <Link to="/homementee">
            <div
              id="nav-homementee"
              className="flex flex-row space-x-0 md:space-x-8 items-center  active:text-button hover:text-button cursor-pointer"
            >
              <AiFillHome size={25} />
              <h3 className="hidden md:block">Home</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "mentee" ? (
          <Link to="/task">
            <div
              id="nav-taskmentee"
              className="flex flex-row space-x-0 md:space-x-8 items-center  active:text-button  hover:text-button cursor-pointer"
            >
              <BiTask size={25} />
              <h3 className="hidden md:block"> Task</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "mentee" ? (
          <Link to="/forummentee">
            <div
              id="nav-forummentee"
              className="flex flex-row space-x-0 md:space-x-8 items-center  active:text-button  hover:text-button cursor-pointer"
            >
              <IoIosPeople size={25} />
              <h3 className="hidden md:block">Forum</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
        {roles === "mentee" ? (
          <Link to="/profilementee">
            <div
              id="nav-profile"
              className="flex flex-row space-x-0 md:space-x-8 items-center  active:text-button hover:text-button cursor-pointer"
            >
              <CgProfile size={25} />
              <h3 className="hidden md:block">Profile</h3>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
      <div
        id="btn-logout"
        onClick={() => (cookies ? handleLogout() : navigate("/"))}
        className="text-abu flex flex-row space-x-0 md:space-x-8 items-center hover:text-button cursor-pointer"
      >
        <BiLogOut size={25} />
        <h3 className="hidden md:block">Logout</h3>
      </div>
    </div>
  );
};

export default SideBar;
