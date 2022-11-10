import React from "react";
import toys1 from "../assets/toys-1.png";
import toys3 from "../assets/toys-3.png";
import toys4 from "../assets/toys-4.png";
import { FiPaperclip, FiSend } from "react-icons/fi";
import { AiFillEdit } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import PDF from "../assets/PDF.svg";
import EXCEL from "../assets/EXCEL.svg";
import { useNavigate } from "react-router-dom";
const CardTask = (props) => {
  return (
    <div className=" w-[18rem] md:w-[32rem] lg:w-[52rem] h-auto bg-card p-5 md:py-5 md:px-8 lg:p-10 rounded-[10px]">
      <div className="flex justify-between items-center ">
        <h1 className="text-putih text-sm md:text-2xl font-semibold">
          {props.title}
        </h1>
        <p className="text-button text-[6px] md:text-xs ">
          Due date {props.due_date}
        </p>
      </div>
      <p className=" text-[10px] md:text-sm text-abu mt-3 font-light">
        {props.description}
      </p>
      {props.file ? (
        <a
          href={props.file}
          id="file-name"
          className=" hover:underline h-[2rem] w-[23rem] mt-8 text-[8px] md:text-xs flex items-center rounded-sm space-x-2 text-gray-400 my-3"
        >
          {props.file.substring(props.file.lastIndexOf(".") + 1) == "pdf" ? (
            <img src={PDF} className="w-6 h-6" />
          ) : props.file.substring(props.file.lastIndexOf(".") + 1) ==
            "xlsx" ? (
            <img src={EXCEL} className="w-6 h-6" />
          ) : (
            ""
          )}
          <p>{props.file.substring(props.file.lastIndexOf("/") + 1)}</p>
        </a>
      ) : (
        ""
      )}
      {props.images ? (
        <img
          className="w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-2 rounded-sm object-cover"
          src={props.images}
        />
      ) : (
        ""
      )}
      <div className="flex justify-between mt-4  items-center">
        <p className="text-xs md:text-sm text-button ">Point: {props.score}</p>
        <label
          htmlFor="modal-submit-task"
          className="bg-task rounded-[5px]  py-1 px-3 md:py-2 md:px-4 text-blue-600 text-[8px] md:text-[10px] cursor-pointer"
        >
          Submit your task
        </label>
      </div>
    </div>
  );
};

const CardTaskMentor = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" w-[18rem] md:w-[32rem] lg:w-[52rem] h-auto bg-card p-5 md:py-5 md:px-8 lg:p-10 rounded-[10px]">
      <div className="flex justify-between items-center ">
        <h1 className="text-putih text-sm md:text-2xl font-semibold">
          {props.title}
        </h1>
        <p className="text-button text-[6px] md:text-xs ">
          Due date {props.due_date}
        </p>
      </div>
      <p className=" text-[10px] md:text-sm text-abu mt-5 font-light">
        {props.description}
      </p>

      {props.file ? (
        <a
          href={props.file}
          id="file-name"
          className=" hover:underline h-[2rem] w-[23rem] mt-8 text-[8px] md:text-xs flex items-center rounded-sm space-x-2 text-gray-400 my-3"
        >
          {props.file.substring(props.file.lastIndexOf(".") + 1) == "pdf" ? (
            <img src={PDF} className="w-6 h-6" />
          ) : props.file.substring(props.file.lastIndexOf(".") + 1) ==
            "xlsx" ? (
            <img src={EXCEL} className="w-6 h-6" />
          ) : (
            ""
          )}
          <p>{props.file.substring(props.file.lastIndexOf("/") + 1)}</p>
        </a>
      ) : (
        ""
      )}
      {props.images ? (
        <img
          className="w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-2 rounded-sm object-cover"
          src={props.images}
        />
      ) : (
        ""
      )}
      <div className="flex justify-between mt-7 items-center">
        <p className="text-xs md:text-sm text-button ">Point: 0</p>
        <div className="flex flex-row space-x-1 cursor-pointer hover:underline ">
          <p
            onClick={() => navigate(`/detailtask/${props.id_task}`)}
            className="text-[7px] md:text-sm text-putih "
          >
            See the Submitted Task by Mentees
          </p>
          <BiRightArrowAlt color="white" size={20} />
        </div>
      </div>
    </div>
  );
};

const CardForum = (props) => {
  return (
    <div className="w-[18rem] md:w-[32rem] lg:w-[52rem]  h-auto bg-card p-5 md:p-8 rounded-[10px]">
      <div className="flex items-center mb-6">
        <img
          src={toys3}
          className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] rounded-full"
        />
        <div className="pl-6 md:space-y-1">
          <h1 className="text-putih font-medium text-lg md:text-xl">
            {props.names}
          </h1>
          <p className="text-abu font-light text-xs">Mentee</p>
        </div>
      </div>

      <p className="text-abu text-[10px] md:text-sm">{props.captions}</p>
      <img
        className="cursor-pointer w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-4 rounded-sm object-cover"
        src={props.img}
        alt="foto-tugas"
      />

      <form onSubmit={props.onSubmitComment} className="mt-9 flex space-x-6">
        <CustomInput
          id="Input-comment"
          type="text"
          category="Comment"
          placeholder="Comment here..."
          value={props.valueComment}
          onChange={props.onChangeComment}
        />
        <button
          onClick={props.onClickComment}
          id="btn-sendComment"
          className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] bg-purple rounded-full text-xl md:text-3xl text-abu flex items-center justify-center "
        >
          <FiSend />
        </button>
      </form>
      {/* -----------comment------------ */}
      {props.comment?.map((item) => (
        <div key={item.id_comment} className="px-5 md:px-9 mt-8">
          <div className="flex items-center mb-3">
            <img
              src={toys4}
              className="h-[2.2rem] w-[2.2rem] md:h-[3rem] md:w-[3rem] rounded-full"
            />
            <div className="pl-4 space-y-0">
              <h1 className="text-putih text-base">{item.nama}</h1>
              <p className="text-abu font-light text-xs">{item.role}</p>
            </div>
          </div>
          <p className="text-sm font-light text-abu pl-[3rem] md:pl-[4rem]">
            {item.caption}
          </p>
        </div>
      ))}
      {/* -----------comment------------ */}
    </div>
  );
};
const CardProfile = (props) => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center sm:flex-auto">
      <img
        src={props.images}
        alt="avatar"
        className="h-[8rem] w-[8rem] md:h-[12rem] md:w-[12rem] rounded-full mr-9"
      />
      <div className="w-[18rem] md:w-[30rem] lg:w-[40rem] h-auto bg-card  mt-8 py-5 px-8 rounded-[10px]">
        <div className="flex justify-between">
          <div className="text-lg text-button font-medium space-y-3 ">
            <h3>
              Name : <span className="text-abu font-light">{props.name}</span>
            </h3>
            <h3>
              Role :
              <span className="text-abu font-light pl-2">{props.role}</span>
            </h3>
            <h3>
              Class :
              <span className="text-abu font-light pl-1">{props.class}</span>
            </h3>
          </div>
          <label
            htmlFor="modal-edit-profile"
            className="h-8 w-8 md:h-10 md:w-10 bg-card shadow-md text-putih flex items-center justify-center rounded-[5px]"
            onClick={props.onClickEdit}
          >
            <AiFillEdit />
          </label>
        </div>
      </div>
    </div>
  );
};

export { CardTask, CardTaskMentor, CardForum, CardProfile };
