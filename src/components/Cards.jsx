import React from "react";
import toys1 from "../assets/toys-1.png";
import toys3 from "../assets/toys-3.png";
import toys4 from "../assets/toys-4.png";
import { FiPaperclip, FiSend } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const CardTask = () => {
  return (
    <div className=" w-[18rem] md:w-[32rem] lg:w-[52rem] h-auto bg-card p-5 md:py-5 md:px-8 lg:p-10 rounded-[10px]">
      <div className="flex justify-between items-center ">
        <h1 className="text-putih text-sm md:text-2xl font-semibold">
          Machine learning part 2
        </h1>
        <p className="text-button text-[6px] md:text-xs ">Due date 20 May</p>
      </div>
      <p className=" text-[10px] md:text-sm text-abu mt-3 font-light">
        buatlah sesuatu menggunakan data dibawah ini dengan menggunakan metode
        Naive bayes dan KNN
      </p>
      {/* <div className="w-[10rem] h-[2rem] bg-abu mt-4 text-xs flex items-center rounded-sm px-2">
        untuk file
      </div> */}
      <img
        className="w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-4 rounded-sm object-cover"
        src="https://cdn-image.hipwee.com/wp-content/uploads/2021/05/hipwee-Aesthetic-Paper.jpg"
        alt="foto-tugas"
      />
      <div className="flex justify-between mt-4  items-center">
        <p className="text-xs md:text-sm text-button ">Point: 0</p>
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

const CardUpload = () => {
  return (
    <div className=" w-[18rem] md:w-[32rem] lg:w-[52rem] h-auto bg-card py-4 px-4  lg:p-10 rounded-[10px]">
      <div className="flex space-x-2 md:space-x-9 items-center">
        <img
          src={toys1}
          alt="avatar"
          className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] rounded-full mr-9"
        />

        <CustomInput
          id="input-status"
          type="text"
          placeholder="share something....."
          category="Status"
        />
      </div>
      <div className="flex mt-9 justify-between">
        <button
          id="btn-iconClip"
          className="h-8 w-8 md:h-10 md:w-10 bg-button text-putih flex items-center justify-center rounded-[5px]"
        >
          <FiPaperclip />
        </button>

        <CustomButton id="btn-send" label="Send" color="Primary" />
      </div>
    </div>
  );
};

const CardForum = () => {
  return (
    <div className="w-[18rem] md:w-[32rem] lg:w-[52rem]  h-auto bg-card p-5 md:p-8 rounded-[10px]">
      <div className="flex items-center mb-6">
        <img
          src={toys3}
          className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] rounded-full"
        />
        <div className="pl-6 md:space-y-1">
          <h1 className="text-putih font-medium text-lg md:text-xl">
            Park Seo Joon
          </h1>
          <p className="text-abu font-light text-xs">Mentee</p>
        </div>
      </div>

      <p className="text-abu text-[10px] md:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet orci
        pellentesque facilisis lacus sodales. Volutpat mauris ut maecenas arcu
        urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet orci
        pellentesque facilisis lacus sodales. Volutpat mauris ut maecenas arcu
        urna.??? help me plis :”
      </p>
      <img
        className="w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-4 rounded-sm object-cover"
        src="https://cdn-image.hipwee.com/wp-content/uploads/2021/05/hipwee-Aesthetic-Paper.jpg"
        alt="foto-tugas"
      />
      <div className="mt-9 flex space-x-6">
        <CustomInput
          id="Input-comment"
          type="text"
          category="Comment"
          placeholder="Comment here..."
        />
        <button
          id="btn-sendComment"
          className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] bg-purple rounded-full text-xl md:text-3xl text-abu flex items-center justify-center "
        >
          <FiSend />
        </button>
      </div>
      {/* -----------comment------------ */}
      <div className="px-5 md:px-9 mt-8">
        <div className="flex items-center mb-3">
          <img
            src={toys4}
            className="h-[2.2rem] w-[2.2rem] md:h-[3rem] md:w-[3rem] rounded-full"
          />
          <div className="pl-4 space-y-0">
            <h1 className="text-putih text-base">Lee min ho</h1>
            <p className="text-abu font-light text-xs">Mentor</p>
          </div>
        </div>
        <p className="text-sm font-light text-abu pl-[3rem] md:pl-[4rem]">
          Mungkin kurang ; aja
        </p>
      </div>
    </div>
  );
};
const CardProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center sm:flex-auto">
      <img
        src={toys1}
        alt="avatar"
        className="h-[8rem] w-[8rem] md:h-[12rem] md:w-[12rem] rounded-full mr-9"
      />
      <div className="w-[18rem] md:w-[30rem] lg:w-[40rem] h-auto bg-card  mt-8 py-5 px-8 rounded-[10px]">
        {/* option atau dot */}
        <div className="flex justify-end items-end">
          <div className="dropdown ">
            <label
              id="icon-options"
              tabIndex={0}
              className="cursor-pointer  text-putih"
            >
              <SlOptionsVertical />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-1 shadow-md bg-card rounded-[10px] w-[6rem] text-sm text-abu"
            >
              <label
                htmlFor="modal-edit-profile"
                className="hover:text-button p-4 text-sm text-abu"
              >
                Edit
              </label>
            </ul>
          </div>
        </div>

        <div className="text-lg text-button font-medium space-y-3 ">
          <h3>
            Name : <span className="text-abu font-light">Lee min ho</span>
          </h3>
          <h3>
            Role : <span className="text-abu font-light pl-2">Mentee</span>
          </h3>
          <h3>
            Class :
            <span className="text-abu font-light pl-1">Machine Learning</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export { CardTask, CardUpload, CardForum, CardProfile };
