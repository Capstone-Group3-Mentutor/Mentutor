import React from "react";
import Layout from "../components/Layout";
import {
  CardForum,
  CardProfile,
  CardTask,
  CardUpload,
} from "../components/Cards";
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
    </Layout>
  );
};

export default Profile;
