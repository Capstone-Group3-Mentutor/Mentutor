import React from "react";
import { LayoutMentor } from "../../components/Layout";
import { ListTask } from "../../components/ListItems";

const DetailTask = () => {
  return (
    <LayoutMentor>
      <h1 className="text-putih text-lg lg:text-2xl font-medium mb-1">
        Detail Task
      </h1>
      {/* -------bgian task---- */}
      <div className=" w-full h-auto bg-card p-5 md:py-3 md:px-5 lg:py-4 mt-5 rounded-[10px]">
        <div className="flex justify-between items-center ">
          <h1 className="text-putih text-sm md:text-2xl font-semibold">
            Machine learning part 2
          </h1>
          <div className="flex gap-5">
            <p className="text-button text-[6px] md:text-xs ">
              Due date 20 May
            </p>
          </div>
        </div>
        <p className=" text-[10px] md:text-sm text-abu mt-3 font-light">
          buatlah sesuatu menggunakan data dibawah ini dengan menggunakan metode
          Naive bayes dan KNN
        </p>
        <img
          className="w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-4 rounded-sm object-cover"
          src="https://cdn-image.hipwee.com/wp-content/uploads/2021/05/hipwee-Aesthetic-Paper.jpg"
          alt="foto-tugas"
        />
        <div
          id="submit-click"
          className="flex justify-end mt-5 gap-1 text-abu cursor-pointer"
        ></div>
      </div>

      {/* -------task submitted---- */}
      <div className="w-full h-[26rem] md:h-[17rem] bg-card rounded-[20px] text-xs md:text-lg overflow-auto mt-5">
        <div className="flex flex-row text-putih px-3 md:px-7 py-2 space-x-2 sticky top-0 z-10 bg-card border-b border-abu">
          <p className="w-[10%] text-center">No</p>
          <p className="w-[30%] text-center">Name</p>
          <p className="w-[35%] text-center">File Name</p>
          <p className="w-[15%] text-center">Points</p>
          <p className="w-[2%] text-center"></p>
        </div>
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
        <ListTask />
      </div>
    </LayoutMentor>
  );
};

export default DetailTask;
