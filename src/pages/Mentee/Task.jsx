import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { CardTask } from "../../components/Cards";
import CustomButton from "../../components/CustomButton";
import { HiOutlineDocumentText } from "react-icons/hi";
import { apiRequest } from "../../utils/apiRequest";
import Swal from "sweetalert2";
import CustomInput from "../../components/CustomInput";
import { useTitle } from "../../utils/useTitle";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAuth } from "../../utils/reducers/reducer";
import { useCookies } from "react-cookie";
const Task = () => {
  useTitle("My Tasks");
  const [myTasks, setMyTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [id_task, setIdTask] = useState(0);
  const [cookie, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
        const data = err.response;
        if (err.response?.status === 401) {
          removeCookie("token");
          dispatch(handleAuth(false));
          navigate("/");
        }
        alert("Please re-login !");
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
              status={item.status}
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
            id="btn-close"
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
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="uploadfile-btn"
              />
              <input
                className="block p-2.5 text-sm lg:h-[3.4rem] w-full md:w-1/2 lg:w-full h-[2.8rem] bg-card rounded-[10px] border placeholder:text-gray-500 text-putih focus:outline-none focus:border-putih border-abu font-light"
                id="uploadfile-btn"
                type="file"
                accept="application/pdf, application/vnd.ms-excel, application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword "
                onChange={(e) => setFile(e.target.files[0])}
                defaultValue={file}
              />
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
