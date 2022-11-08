import React from "react";
import Layout from "../../components/Layout";
import { CardTask } from "../../components/Cards";
import CustomButton from "../../components/CustomButton";
import { HiOutlineDocumentText } from "react-icons/hi";
const Task = () => {
  return (
    <Layout>
      <h1 className="text-putih text-lg lg:text-2xl font-medium mb-6">
        Your Task
      </h1>
      <CardTask />
      <input type="checkbox" id="modal-submit-task" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  bg-card">
          <label
            htmlFor="modal-submit-task"
            className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
          >
            ✕
          </label>
          <form className="flex flex-col md:p-9 lg:p-9 ">
            <h3 className="font-medium text-lg text-putih mb-1">
              Submit your task
            </h3>
            <div className="w-[15rem] h-[3rem] bg-abu mt-4 text-xs flex items-center rounded-sm px-2">
              untuk file
            </div>
            <div className="flex justify-between mt-[2rem]">
              <span id="Upload-file" className="cursor-pointer text-putih">
                <HiOutlineDocumentText className="text-2xl" />
              </span>
              <CustomButton
                id="btn-submitMentee"
                label="Submit"
                color="Primary"
              />
            </div>
          </form>
        </div>
      </div>
      {/* end modal */}
    </Layout>
  );
};

export default Task;
