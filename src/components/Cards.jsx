import React, { useState } from "react";
import toys3 from "../assets/toys-3.png";
import toys4 from "../assets/toys-4.png";
import { FiSend } from "react-icons/fi";
import toys2 from "../assets/toys-2.png";
import { AiFillEdit } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import CustomInput from "./CustomInput";
import PDF from "../assets/PDF.svg";
import EXCEL from "../assets/EXCEL.svg";
import { useNavigate } from "react-router-dom";

const currentDate = new Date();
let detailDate =
  currentDate.getFullYear() +
  "-" +
  (currentDate.getMonth() < 12 ? currentDate.getMonth() + 1 : 1) +
  "-" +
  currentDate.getDate() +
  " " +
  currentDate.getHours() +
  ":" +
  currentDate.getMinutes() +
  " " +
  "UTC";

const CardTask = (props) => {
  return (
    <div className=" w-[18rem] md:w-[32rem] lg:w-[52rem] h-auto  bg-card p-5 md:py-5 md:px-8 lg:p-10 rounded-[10px] mb-8">
      <div className="flex justify-between items-start  ">
        <h1 className="text-putih text-xs md:text-2xl font-semibold capitalize break-words w-1/2">
          {props.title}
        </h1>
        <p className="text-button text-[6px] md:text-xs ">
          Due date{" "}
          <span
            className={`${
              detailDate > props.due_date ? "text-[#CC5D5D]" : "text-button"
            }  `}
          >
            {props.due_date}
          </span>
        </p>
      </div>
      <p className=" text-[10px] md:text-sm text-abu mt-3 font-light break-words">
        {props.description}
      </p>
      {props.file ? (
        <a
          href={props.file}
          id="file-name"
          className=" hover:underline h-[2rem] w-[15rem] md:w-[18rem] lg:w-[20rem] md:mt-8 text-[6px] lg:text-[10px] md:text-[8px] flex items-center rounded-sm space-x-2 text-gray-400 my-3 break-words"
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
        <p className="text-xs md:text-sm text-button ">
          Point:{" "}
          <span
            className={`${
              70 > props.score ? "text-[#CC5D5D]" : "text-[#4ad43d]"
            }  `}
          >
            {props.score}
          </span>
        </p>

        {props.status == "" && props.due_date > detailDate ? (
          <label
            id="btn-submitTask"
            htmlFor="modal-submit-task"
            className="bg-task rounded-[5px]  py-1 px-3 md:py-2 md:px-4 text-blue-600 text-[8px] md:text-[10px] cursor-pointer"
            onClick={props.onClickSubmit}
          >
            Submit your task
          </label>
        ) : props.due_date < detailDate ? (
          <label className="bg-[#969696] rounded-[5px] text-black  py-1 px-3 md:py-2 md:px-4 text-[8px] md:text-[10px]">
            Submit your task
          </label>
        ) : (
          <label className="bg-[#60C577] rounded-[5px] text-white  py-1 px-3 md:py-2 md:px-4 text-[8px] md:text-[10px]">
            Done
          </label>
        )}
      </div>
    </div>
  );
};

const CardTaskMentor = (props) => {
  const navigate = useNavigate();
  return (
    <div className=" w-[18rem] md:w-[32rem] lg:w-[52rem] h-auto bg-card p-5 md:py-5 md:px-8 lg:p-10 rounded-[10px] overflow-x-hidden">
      <div className="flex justify-between items-start break-words ">
        <div className="w-[65%]">
          <h1
            id="click-title"
            onClick={() => navigate(`/detailtask/${props.id_task}`)}
            className="text-putih text-sm md:text-2xl font-semibold cursor-pointer hover:text-button break-words"
          >
            {props.title}
          </h1>
        </div>
        <div className=" w-[35%] text-right">
          <p className="text-button text-[6px] md:text-xs ">
            Due date{" "}
            <span
              className={`${
                detailDate > props.due_date ? "text-[#CC5D5D]" : "text-button"
              }  `}
            >
              {props.due_date}
            </span>
          </p>
        </div>
      </div>
      <p className=" text-[10px] md:text-sm text-abu mt-5 font-light break-words">
        {props.description}
      </p>

      {props.file ? (
        <a
          href={props.file}
          id="file-name"
          className=" hover:underline h-[2rem] w-[23rem] mt-8 text-[8px] md:text-xs flex items-center rounded-sm space-x-2 text-gray-400 my-3 break-words"
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
      <div className="text-right mt-7 items-center">
        <div className="flex flex-row justify-end space-x-1 cursor-pointer hover:underline ">
          <p
            id="click-submittedtask"
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
  const [visible, setVisible] = useState(2);
  const toggleShowMore = () => {
    setVisible((prevValue) => prevValue + 2);
  };
  const toggleHideComment = () => {
    setVisible((prevValue) => prevValue - 2);
  };
  return (
    <div className="w-[18rem] md:w-[32rem] lg:w-[52rem]  h-auto bg-card p-5 md:p-9 rounded-[10px]">
      <div className="flex items-center mb-6">
        <img
          src={toys2}
          className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] rounded-full"
        />
        <div className="pl-4 md:space-y-1">
          <h1 className="text-putih font-medium text-lg md:text-xl">
            {props.names}
          </h1>
          <p className="text-abu font-normal text-xs">Mentee</p>
        </div>
      </div>

      <p className="text-abu text-[10px] md:text-sm break-words">
        {props.captions}
      </p>
      {props.img ? (
        <img
          className="cursor-pointer w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-4 rounded-sm object-cover"
          src={props.img}
          alt="foto-tugas"
        />
      ) : null}
      <form onSubmit={props.onSubmitComment} className="mt-9 flex space-x-3">
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
          className="w-[3rem] h-[2.8rem] md:w-[3.6rem] md:h-[3.6rem] bg-purple rounded-full text-lg md:text-3xl text-abu flex items-center justify-center "
        >
          <FiSend />
        </button>
      </form>

      {/* -----------comment------------ */}
      {props.comments
        ?.slice(0, visible)
        .sort((a, b) => b.id_comment - a.id_comment)
        .map((item) => (
          <div key={item.id_comment} className="px-5 md:px-9 mt-6 mb-5">
            <div className="flex items-center mb-3">
              {item.role === "mentee" ? (
                <img
                  src={toys2}
                  className="h-[2.2rem] w-[2.2rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full"
                />
              ) : (
                <img
                  src={toys3}
                  className="h-[2.2rem] w-[2.2rem] md:h-[2.5rem] md:w-[2.5rem] rounded-full"
                />
              )}
              <div className="pl-4 space-y-0">
                <h1 className="text-putih text-base">{item.name}</h1>
                <p className="text-abu capitalize font-normal text-xs">
                  {item.role}
                </p>
              </div>
            </div>
            <p className="text-sm font-light break-words text-gray-400 pl-[2.5rem] md:pl-[3.5rem]">
              {item.caption}
            </p>
            <hr className="w-[13rem] md:w-[20rem] lg:w-[30rem] border-[#40456E] mt-3" />
          </div>
        ))}
      <div className="flex justify-between w-[13rem] md:w-[20rem] lg:w-[30rem] mt-3 ">
        <p
          onClick={toggleShowMore}
          className=" text-xs font-normal text-button capitalize cursor-pointer px-5 md:px-9"
        >
          Load More Comments
        </p>
        <p
          onClick={toggleHideComment}
          className="text-xs font-normal text-gray-500 capitalize cursor-pointer "
        >
          Hide
        </p>
      </div>
      {/* -----------comment------------ */}
    </div>
  );
};
const CardProfile = (props) => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center sm:flex-auto">
      {props.role === "mentee" ? (
        <img
          src={props.images}
          className="h-[8rem] w-[8rem] md:h-[12rem] md:w-[12rem] rounded-full mr-9"
        />
      ) : (
        <img
          src={props.images}
          className="h-[8rem] w-[8rem] md:h-[12rem] md:w-[12rem] rounded-full mr-9"
        />
      )}

      <div className="w-[18rem] md:w-[30rem] lg:w-[40rem] h-auto bg-card  mt-8 py-5 px-8 rounded-[10px]">
        <div className="flex justify-between">
          <div className="text-lg text-button font-medium space-y-3 ">
            <h3>
              Name :
              <span className="text-abu font-light capitalize">
                {props.name}
              </span>
            </h3>
            <h3>
              Role :
              <span className="text-abu font-light pl-2 capitalize">
                {props.role}
              </span>
            </h3>
            <h3>
              Class :
              <span className="text-abu font-light pl-1 capitalize">
                {props.class}
              </span>
            </h3>
          </div>
          <label
            htmlFor="modal-edit-profile"
            className="h-8 w-8 md:h-10 md:w-10 bg-card shadow-md text-putih flex items-center justify-center rounded-[5px] cursor-pointer"
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
