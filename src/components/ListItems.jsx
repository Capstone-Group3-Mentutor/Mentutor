import React from "react";
import toys3 from "../assets/toys-3.png";

import { SlOptionsVertical } from "react-icons/sl";
import { AiFillEdit } from "react-icons/ai";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import PDF from "../assets/PDF.svg";
import EXCEL from "../assets/EXCEL.svg";

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
              id="edit-click"
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

const ListTask = ({ score, name, file, index, onClickEdit }) => {
  return (
    <>
      <div className="flex flex-row text-[7px] items-center md:text-[10px] lg:text-[15px] text-putih px-3 md:px-7 py-2 space-x-2 mb-1">
        <p className="w-[10%] text-center">{index + 1}</p>
        <p className="w-[30%] text-center">{name}</p>
        <div className="flex flex-row space-x-3 items-center justify-center w-[35%]">
          <a
            href={file}
            id="file-name"
            className=" hover:underline h-[2rem] text-[8px] md:text-xs flex items-center rounded-sm space-x-2 text-abu my-3"
          >
            {file.substring(file.lastIndexOf(".") + 1) == "pdf" ? (
              <img src={PDF} className="w-6 h-6" />
            ) : file.substring(file.lastIndexOf(".") + 1) == "xlsx" ? (
              <img src={EXCEL} className="w-6 h-6" />
            ) : (
              ""
            )}
            {file.substring(file.lastIndexOf("/") + 1)}
          </a>
        </div>
        <p
          className={`w-[15%] text-center ${
            70 > score ? "text-[#CC5D5D]" : "text-[#4ad43d]"
          }  `}
        >
          {score}
        </p>
        {/* option */}
        <label
          htmlFor="modal-edit-points"
          className="hover:text-button px-4 text-sm text-abu cursor-pointer"
          onClick={onClickEdit}
        >
          <AiFillEdit />
        </label>
        {/* end option */}
      </div>
      <hr className="text-abu mx-3 border-abu border-opacity-50" />
    </>
  );
};

export { ListClass, ListTask };
