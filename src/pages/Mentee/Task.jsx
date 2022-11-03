import React from "react";
import Layout from "../../components/Layout";
import { CardTask } from "../../components/Cards";
const Task = () => {
  return (
    <Layout>
      <h1 className="text-putih text-lg lg:text-2xl font-medium mb-6">
        Your Task
      </h1>
      <CardTask />
    </Layout>
  );
};

export default Task;
