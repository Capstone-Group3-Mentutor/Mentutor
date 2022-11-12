import React from "react";
import { useTitle } from "../utils/useTitle";
import Layout from "../components/Layout";
useTitle;

const NotFound = () => {
  useTitle("Not Found 404");
  return <Layout></Layout>;
};

export default NotFound;
