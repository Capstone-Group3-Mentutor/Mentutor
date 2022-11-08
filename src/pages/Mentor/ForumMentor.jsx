import { CardForum, CardUpload } from "../../components/Cards";
import React from "react";
import Layout from "../../components/Layout";
const ForumMentor = () => {
  return (
    <Layout>
      <div className="pb-9">
        <h1 className="text-putih text-lg lg:text-2xl font-medium mb-2">
          Forum Class
        </h1>
        <p className="text-abu font-light text-[8px] md:text-sm">
          Lorem ipsum dolor sit amet
        </p>
        <div className="mt-[3rem] mb-[2rem]">
          <CardForum />
        </div>
        <CardForum />
      </div>
    </Layout>
  );
};

export default ForumMentor;
