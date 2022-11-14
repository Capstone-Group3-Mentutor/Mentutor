import React from "react";
import { useTitle } from "../utils/useTitle";
import Layout from "../components/Layout";
useTitle;

const NotFound = () => {
  useTitle("Not Found 404");
  return (
    <Layout>
      <p className="text-white font-bold text-5xl mt-40">
        404 - Looks like you’re lost.
      </p>
      <p className="text-merah mt-8 text-md font-medium">
        Maybe this page used to exist or you just spelled something wrong.
        <br />
        Chances are you Spelled something wrong, so you can double check the
        URL?
      </p>
    </Layout>
  );
};

export default NotFound;
