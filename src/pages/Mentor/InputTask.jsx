import CustomInput from "../../components/CustomInput";
import React from "react";
import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";
import { FiArrowRight } from "react-icons/fi";
const InputTask = () => {
  return (
    <Layout>
      <div className="lg:px-[3rem]">
        <h1 className="text-putih text-lg lg:text-2xl font-medium mb-1">
          Create Task
        </h1>
        <p className="text-abu text-xs">Give the task to mentee</p>
        <form className="w-[18rem] md:w-[32rem] lg:w-[45rem] h-auto p-5 lg:p-9 bg-card mt-7 rounded-[10px] ">
          <div className="flex flex-col">
            <div className="space-y-2">
              <p className="text-putih font-normal text-base">Tittle</p>
              <CustomInput
                id="input-tittle"
                placeholder="task tittle"
                category="Status"
              />
            </div>
            <div className="space-y-2 mt-6">
              <p className="text-putih font-normal text-base">Description</p>
              <CustomInput
                id="input-desc"
                placeholder="task description"
                category="Status"
              />
            </div>
            <div className="flex flex-col lg:flex-row space-x-6">
              <div className="lg:space-y-2 mt-6">
                <p className="text-putih font-normal text-base">Due Date</p>
                <CustomInput
                  id="input-date"
                  placeholder="date"
                  category="Class"
                />
              </div>
              <div className="lg:space-y-2 mt-6">
                <p className="text-putih font-normal text-base">Attachment</p>
                <button
                  id="Upload File"
                  className="bg-[#38486A]  w-40 lg:w-40 md:w-28 flex items-center h-[2.8rem] rounded-[10px] text-xs text-abu pl-3 "
                >
                  <HiOutlineDocumentText className="text-xl mr-2" /> Upload File
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <CustomButton id="input-file" label="Add" color="Primary" />
          </div>
        </form>

        {/* -------bgian task---- */}
        <div className=" w-[18rem] md:w-[32rem] lg:w-[45rem] h-auto bg-card p-5 md:py-5 md:px-8 lg:p-10 mt-8 rounded-[10px]">
          <div className="flex justify-between items-center ">
            <h1 className="text-putih text-sm md:text-2xl font-semibold">
              Machine learning part 2
            </h1>
            <div className="flex gap-5">
              <p className="text-button text-[6px] md:text-xs ">
                Due date 20 May
              </p>
              {/* ---kebab menu--- */}
              <div className="dropdown dropdown-bottom dropdown-end">
                <label
                  id="icon-options"
                  tabIndex={0}
                  className="cursor-pointer  text-putih"
                >
                  <SlOptionsVertical />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-1 shadow-md bg-card rounded-[10px] w-[6rem] text-sm  text-abu"
                >
                  <label
                    htmlFor="modal-edit-task"
                    className="hover:text-button px-4 pt-2 text-sm text-abu"
                  >
                    Edit
                  </label>
                  <li id="delete-click" className=" text-[#CC5D5D]">
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
              {/*  end kebab menu */}
            </div>
          </div>

          {/* ---modal--- */}
          <input
            type="checkbox"
            id="modal-edit-task"
            className="modal-toggle"
          />
          <div className="modal ">
            <div className="modal-box bg-card ">
              <label
                htmlFor="modal-edit-task"
                className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
              >
                ✕
              </label>
              <form className="flex flex-col p-9 gap-5">
                <h3 className="font-medium text-lg text-putih mb-2">
                  Edit Your Task
                </h3>
                <CustomInput
                  id="input-judul"
                  placeholder="Judul"
                  category="Submit"
                />
                <CustomInput
                  id="input-judul"
                  placeholder="Description"
                  category="Submit"
                />
                <div className="flex justify-between items-center">
                  <button
                    id="Upload File"
                    className="bg-[#38486A] w-[100px] lg:w-40 md:w-28 flex items-center h-[2.8rem] rounded-[10px] text-[9px] lg:text-xs text-abu pl-3 "
                  >
                    <HiOutlineDocumentText className="text-xl mr-2" /> Upload
                    File
                  </button>
                  <div className="">
                    <CustomButton
                      id="btn-submitTask"
                      label="Submit"
                      color="Primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* end modal */}

          <p className=" text-[10px] md:text-sm text-abu mt-3 font-light">
            buatlah sesuatu menggunakan data dibawah ini dengan menggunakan
            metode Naive bayes dan KNN
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
            <CustomButton
              label="Submit your task"
              id="btn-submitTask"
              color="Biru"
            />
          </div>
          <div
            id="submit-click"
            className="flex justify-end mt-5 gap-1 text-abu cursor-pointer"
          >
            <p className=" text-xs font-medium ">
              See the Submitted Task by Mentees
            </p>
            <FiArrowRight />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InputTask;
