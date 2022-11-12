import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { CardTask } from "../../components/Cards";
import CustomButton from "../../components/CustomButton";
import { HiOutlineDocumentText } from "react-icons/hi";
import { apiRequest } from "../../utils/apiRequest";
import Swal from "sweetalert2";
import CustomInput from "../../components/CustomInput";
import { useTitle } from "../../utils/useTitle";

const Task = () => {
  useTitle("My Tasks");
  const [myTasks, setMyTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [id_task, setIdTask] = useState(0);

  useEffect(() => {
    getMyTask();
  }, []);

  const getMyTask = async () => {
    apiRequest("mentees/tasks", "get")
      .then((res) => {
        const results = res.data;
        setMyTasks(results);
      })
      .catch((err) => {
        const { data } = err.response;
        Swal.fire({
          icon: "error",
          text: data.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const submitTask = async (e) => {
    e.preventDefault();
    const body = {
      title,
      file,
    };

    apiRequest(
      `mentees/submission/${id_task}`,
      "post",
      body,
      "multipart/form-data"
    )
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success Submitted",
          showConfirmButton: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Invalid Input From Client",
          showConfirmButton: true,
        });
      })
      .finally(() => {
        getMyTask();
      });
  };

  return (
    <Layout>
      <div className="pb-9">
        <h1 className="text-putih text-lg lg:text-2xl font-medium ">
          Your Task
        </h1>
        <p className="text-abu text-xs font-light mb-8">
          Don't forget to submit your assignment!
        </p>

        {myTasks
          ?.sort((a, b) => b.id_task - a.id_task)
          .map((item) => (
            <CardTask
              key={item?.id_task}
              title={item?.title}
              description={item?.description}
              images={item?.images}
              file={item?.file}
              score={item?.score}
              due_date={item?.due_date}
              onClickSubmit={() => {
                setIdTask(item?.id_task);
                setTitle(item?.title);
              }}
            />
          ))}
      </div>
      {/* modal submit task */}
      <input type="checkbox" id="modal-submit-task" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  bg-card">
          <label
            htmlFor="modal-submit-task"
            className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
          >
            ✕
          </label>
          <form onSubmit={submitTask} className="flex flex-col md:p-9 lg:p-9 ">
            <h3 className="font-medium text-lg text-putih mb-3">
              Submit your task
            </h3>
            <CustomInput
              id="input-title"
              placeholder="Title"
              category="Submit"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex flex-col space-y-2 my-2">
              <input
                hidden
                id="upload-btn"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                defaultValue={file}
              />
              <label
                className="bg-[#38486A] w-40 lg:w-40 md:w-28 flex items-center h-[2.8rem] rounded-[10px] text-xs text-abu p-3 cursor-pointer"
                htmlFor="upload-btn"
              >
                <HiOutlineDocumentText className="text-xl mr-2" />
                Choose a File
              </label>
              <div className="text-right">
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
    </Layout>
  );
};

export default Task;
