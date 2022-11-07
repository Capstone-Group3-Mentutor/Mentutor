import { CardForum, CardUpload } from "../../components/Cards";
import React from "react";
import { LayoutMentee } from "../../components/Layout";
const ForumMentee = () => {
  return (
    <LayoutMentee>
      <div className="pb-9">
        <h1 className="text-putih text-lg lg:text-2xl font-medium mb-2">
          Discuss with your classmate
        </h1>
        <p className="text-abu font-light text-[8px] md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-[3rem] mb-[2rem]">
          <CardUpload />
        </div>

        <CardForum />
      </div>
    </LayoutMentee>
  );
};

export default ForumMentee;
