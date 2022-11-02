import React from "react";
import Layout from "../components/Layout";
import {
  CardForum,
  CardProfile,
  CardTask,
  CardUpload,
} from "../components/Cards";
import CustomInput from "../components/CustomInput";



const Profile = () => {
  return (
    <Layout>
      <CardTask />
      <div className="mt-7">
        <CardUpload />
      </div>
      <div className="mt-7">
        <CardForum />
      </div>
      <div className="mt-7">
        <CardProfile />
      </div>
      <CustomInput
      category="Login"
      id="1"
      placeholder="hai"/>
      <CustomInput
      category="Submit"
      id="2"
      placeholder="hallo"/>
    </Layout>
  );
};

export default Profile;
