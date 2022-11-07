import React from "react";
import toys3 from "../assets/toys-3.png";

import { SlOptionsVertical } from "react-icons/sl";
import { AiFillEdit } from "react-icons/ai";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

const ListClass = ({
  index,
  student,
  name,
  status,
  onClickDelete,
  onClickEdit,
}) => {
  return (
    <>
      <div className="flex flex-row text-[7px] items-center md:text-[10px] lg:text-[15px] text-putih px-3 md:px-7 py-0.5 space-x-2 mb-1">
        <p className="w-[10%] text-center">{index + 1}</p>
        <p className="w-[30%] text-center">{name}</p>
        <p className="w-[30%] text-center">{student}</p>
        <p
          className={`w-[17%] text-center ${
            status === "active" ? "text-[#23EF11]" : "text-[#E41E1E]"
          }`}
        >
          {status}
        </p>
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
              onClick={onClickEdit}
            >
              Edit
            </label>
            <li
              id="delete-click"
              className=" text-[#CC5D5D]"
              onClick={onClickDelete}
            >
              <a>Delete</a>
            </li>
          </ul>
        </div>
        {/* end option */}

        <hr className="text-abu mx-3 border-abu border-opacity-50" />
      </div>
    </>
  );
};

const ListTask = () => {
  return (
    <>
      <div className="flex flex-row text-[7px] items-center md:text-[10px] lg:text-[15px] text-putih px-3 md:px-7 py-2 space-x-2 mb-1">
        <p className="w-[10%] text-center">1</p>
        <p className="w-[30%] text-center">Jamaludin Kam</p>
        <div className="flex flex-row space-x-3 items-center justify-center w-[35%]">
          <img
            src={toys3}
            className="h-[1rem] w-[1rem] md:h-[2rem] md:w-[2rem] "
          />
          <p>Jamaluddin Kam</p>
        </div>
        <p className="w-[15%] text-center">70</p>
        {/* option */}
        <label
          htmlFor="modal-edit-points"
          className="hover:text-button px-4 text-sm text-abu cursor-pointer"
        >
          <AiFillEdit />
        </label>
        {/* end option */}
        <input
          type="checkbox"
          id="modal-edit-points"
          className="modal-toggle"
        />
        <div className="modal ">
          <div className="modal-box w-1/2 bg-card p-14">
            <div className="flex flex-row justify-between">
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
      <hr className="text-abu mx-3 border-abu border-opacity-50" />
    </>
  );
};

export { ListClass, ListTask };
