import React from "react";
import toys1 from "../assets/toys-1.png";
import toys3 from "../assets/toys-3.png";
import toys4 from "../assets/toys-4.png";
import { FiPaperclip, FiSend } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import CustomButton from "./CustomButton";

const CardTask = () => {
  return (
    <div className="w-[50rem] h-auto bg-card py-5 px-8 rounded-[10px]">
      <div className="flex justify-between  ">
        <h1 className="text-putih text-2xl font-semibold">
          Machine learning part 2
        </h1>
        <p className="text-button text-xs ">Due date 20 May</p>
      </div>
      <p className="text-sm text-abu mt-3 font-light">
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
        <p className="text-sm text-button ">Point: 0</p>

        <CustomButton
          label="Submit your task"
          id="btn-submitTask"
          color="Biru"
        />
      </div>
    </div>
  );
};

const CardUpload = () => {
  return (
    <div className="w-[50rem] h-auto bg-card  py-8 px-9 rounded-[10px]">
      <div className="flex space-x-9 items-center">
        <img
          src={toys1}
          alt="avatar"
          className="h-[4rem] w-[4rem] rounded-full mr-9"
        />
        {/* reusable input */}
        <input
          className=" w-[40rem] pl-3 h-[3.4rem] bg-card border  placeholder:text-abu focus:outline-none focus:border-putih  border-abu  font-light rounded-[5px] text-sm  "
          id="input-status"
          placeholder="share something....."
        />
      </div>
      <div className="flex mt-9 justify-between">
        <button
          id="btn-iconClip"
          className="h-10 w-10 bg-button text-putih flex items-center justify-center rounded-[5px]"
        >
          <FiPaperclip />
        </button>
        {/* <button
          id="btn-send"
          className="w-[9rem] h-[2.5rem] text-putih rounded-[5px] font-normal bg-button"
        >
          Send
        </button> */}
        <CustomButton id="btn-send" label="Send" color="Primary" />
      </div>
    </div>
  );
};

const CardForum = () => {
  return (
    <div className="w-[50rem] h-auto bg-card  py-8 px-8 rounded-[10px]">
      <div className="flex items-center mb-6">
        <img src={toys3} className="h-[4rem] w-[4rem] rounded-full" />
        <div className="pl-6 space-y-1">
          <h1 className="text-putih font-medium text-xl">Park Seo Joon</h1>
          <p className="text-abu font-light text-xs">Mentee</p>
        </div>
      </div>

      <p className="text-abu text-sm">
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
      <div className="mt-9 flex justify-between">
        {/* reusable input */}
        <input
          className=" w-[40rem] h-[3.5rem] bg-card border placeholder:text-abu focus:outline-none focus:border-putih  border-abu rounded-[10px] font-light text-sm pl-3 "
          id="Input-comment"
          placeholder="Comment here..."
        />
        <button
          id="btn-sendComment"
          className="w-[3.6rem] h-[3.6rem] bg-purple rounded-full text-3xl text-abu flex items-center justify-center "
        >
          <FiSend />
        </button>
      </div>
      {/* -----------comment------------ */}
      <div className="px-9 mt-8">
        <div className="flex items-center mb-3">
          <img src={toys4} className="h-[3rem] w-[3rem] rounded-full" />
          <div className="pl-4 space-y-0">
            <h1 className="text-putih text-base">Lee min ho</h1>
            <p className="text-abu font-light text-xs">Mentor</p>
          </div>
        </div>
        <p className="text-sm font-light text-abu pl-[4rem]">
          Mungkin kurang ; aja
        </p>
      </div>
    </div>
  );
};
const CardProfile = () => {
  return (
    <div className="flex ">
      <img
        src={toys1}
        alt="avatar"
        className="h-[12rem] w-[12rem] rounded-full mr-9"
      />
      <div className="w-[40rem] h-auto bg-card  py-5 px-8 rounded-[10px]">
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
              <li className="hover:text-button">
                <a>Edit</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-lg text-button font-medium space-y-3">
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
