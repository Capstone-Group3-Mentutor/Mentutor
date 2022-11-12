import React, { useState, useEffect } from "react";
import toys2 from "../../assets/toys-2.png";
import hero from "../../assets/hero.png";

import { CardTask } from "../../components/Cards";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import { HiOutlineDocumentText } from "react-icons/hi";
import { apiRequest } from "../../utils/apiRequest";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import CustomInput from "../../components/CustomInput";
import { useTitle } from "../../utils/useTitle";

const HomeMentee = () => {
  useTitle("Home");
  const [datas, setDatas] = useState({});
  const [dataTask, setDataTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies();
  const [images, setImages] = useState(toys2);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [id_task, setIdTask] = useState(0);
  const id_user = cookie.id_user;

  useEffect(() => {
    fetchUser();
    fetchTaskMentor();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    apiRequest(`admin/users/${id_user}`, "get")
      .then((res) => {
        setDatas(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  const fetchTaskMentor = () => {
    setLoading(true);
    apiRequest("mentees/tasks", "get")
      .then((res) => {
        setDataTask(res.data);
      })
      .catch((err) => {
        const { data } = err.response;
        Swal.fire({
          title: "Failed",
          text: data.message,
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
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
        fetchTaskMentor();
      });
  };

  const fullname = `${datas.name}`;
  const first = fullname.split(" ")[0];

  return (
    <Layout>
      <div className="pb-9">
        <div key={datas.id_user} className="flex justify-between ">
          <div className="md:space-y-2">
            <h1 className="text-putih text-lg md:text-3xl font-medium">
              Hello <span>{first}</span>
            </h1>
            <p className="text-abu font-light text-[8px] md:text-sm">
              Welcome back, you are doing great.
            </p>
          </div>
          <div className="flex items-center ">
            <Link to="/profilementee">
              <img
                id="gbr-hero"
                src={images}
                alt="avatar"
                className="h-[1.5rem] w-[1.5rem]  md:h-[3rem] md:w-[3rem] rounded-full "
              />
            </Link>
            <div className="pl-2 md:pl-4 space-y-0">
              <Link to="/profilementee">
                <h1
                  id="name-profile"
                  className="text-putih text-[10px] md:text-base"
                >
                  {datas.name}
                </h1>
              </Link>

              <p className="text-abu font-light text-[8px] md:text-xs">
                Mentee
              </p>
            </div>
          </div>
        </div>
        <div className="w-[18rem] h-[8rem] md:w-[32rem] md:h-[12rem] lg:w-[52rem] lg:h-[15rem] gradient-home rounded-2xl md:rounded-[30px] mt-[4rem] ">
          <div className=" flex">
            <div className=" pl-5 pt-5 md:pl-9 md:pt-9">
              <h1 className="text-putih text-sm md:text-lg lg:text-2xl font-medium">
                When nothing goes right, go left
              </h1>
              <p className="text-abu text-[6px] md:text-xs font-light mt-2  lg:mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="relative bottom-9">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
        <div className="mt-[3rem] md:mt-[5rem]">
          <h1 className="text-putih text-lg font-medium mb-6">Your Task</h1>
          <div className="flex justify-end text-putih hover:text-button font-normal cursor-pointer mb-2 text-xs mr-3 ">
            <Link to="/task">
              <p id="view-task">View All Task</p>
            </Link>
          </div>
          <div className="space-y-6">
            {dataTask
              ?.sort((a, b) => b.id_task - a.id_task)
              .slice(0, 2)
              .map((item) => (
                <CardTask
                  key={item.id_task}
                  file={item.file}
                  images={item.images}
                  score={item.score}
                  status={item.status}
                  due_date={item.due_date}
                  title={item.title}
                  description={item.description}
                  onClickSubmit={() => {
                    setIdTask(item.id_task);
                    setTitle(item.title);
                  }}
                />
              ))}
          </div>
          {/* modal submit */}
          <input
            type="checkbox"
            id="modal-submit-task"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box  bg-card">
              <label
                htmlFor="modal-submit-task"
                className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
              >
                ✕
              </label>
              <form
                onSubmit={submitTask}
                className="flex flex-col md:p-9 lg:p-9 "
              >
                <h3 className="font-medium text-lg text-putih mb-1">
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
        </div>
      </div>
    </Layout>
  );
};

export default HomeMentee;
