import CustomInput from "../../components/CustomInput";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import CustomButton from "../../components/CustomButton";
import { HiOutlineDocumentText } from "react-icons/hi";
import { SlOptionsVertical } from "react-icons/sl";
import { FiArrowRight } from "react-icons/fi";
import { apiRequest } from "../../utils/apiRequest";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { WithRouter } from "../../utils/navigation";
import PDF from "../../assets/PDF.svg";
import EXCEL from "../../assets/EXCEL.svg";
import { useTitle } from "../../utils/useTitle";

const InputTask = (props) => {
  useTitle("My Tasks");
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [file, setFile] = useState("");
  const [due_date, setDue_date] = useState("");
  const [id_task, setIdTask] = useState(0);
  const [objSubmit, setObjSubmit] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    apiRequest("mentors/tasks", "get")
      .then((res) => {
        const results = res.data;
        setTasks(results);
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

  const handleEditTasks = async (e) => {
    e.preventDefault();

    const body = {
      title,
      description,
      images,
      file,
      due_date,
      id_task,
    };

    apiRequest(`mentors/tasks/${id_task}`, "put", body, "multipart/form-data")
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Succes Updated",
          showConfirmButton: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed Updated",
          showConfirmButton: true,
        });
      })
      .finally(() => {
        getAllTasks();
      });
  };

  const createTask = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("mentors/tasks", "post", objSubmit, "multipart/form-data")
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task Created",
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
        getAllTasks();
      });
  };

  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  const deleteTask = async (id_task) => {
    setLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to Delete This Task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonText: `cancel`,
      confirmButtonText: "Yes, delete!",
    })
      .then((res) => {
        if (res.isConfirmed) {
          apiRequest(`mentors/tasks/${id_task}`, "delete");
          Swal.fire({
            text: "Task Succesfully Deleted",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
          });
        } else if (res.isDismissed == `cancel`) {
          alert("cancel button clicked");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          text: "There is problem on server.",
        });
      })
      .finally(() => {
        getAllTasks();
      });
  };

  const currentDate = new Date();
  let detailDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() < 12 ? currentDate.getMonth() + 1 : 1) +
    "-" +
    currentDate.getDate() +
    " " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    " " +
    "UTC";

  return (
    <Layout>
      <div className="mb-9">
        <h1 className="text-putih text-lg lg:text-2xl font-medium mb-1">
          Create Task
        </h1>
        <p className="text-abu text-xs">Give the task to mentee</p>
        <form
          className="w-[18rem] md:w-[32rem] lg:w-[45rem] h-auto p-5 lg:p-9 bg-card mt-7 rounded-[10px] "
          onSubmit={(e) => createTask(e)}
        >
          <div className="flex flex-col">
            <div className="space-y-2 w-full">
              <p className="text-putih font-normal text-base break-words">
                Title
              </p>
              <CustomInput
                id="input-title"
                placeholder="task title"
                category="Status"
                onChange={(e) => {
                  handleChange(e.target.value + id_user, `title`);
                }}
              />
            </div>
            <div className="space-y-2 mt-6">
              <p className="text-putih font-normal text-base">Description</p>
              <textarea
                id="input-desc"
                placeholder="task description"
                onChange={(e) => {
                  handleChange(e.target.value, "description");
                }}
                rows="1"
                className="p-2.5 text-sm w-[250px] lg:w-[40rem] lg:h-[3.4rem] md:w-[400px] pl-3 h-[2.8rem] bg-card rounded-[10px] border placeholder:text-gray-500 text-putih focus:outline-none focus:border-putih border-abu font-light"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
              <div className="lg:space-y-2 mt-6">
                <p className="text-putih font-normal text-base">Due Date</p>
                <CustomInput
                  id="input-date"
                  placeholder="2022-12-24"
                  category="Class"
                  onChange={(e) => {
                    handleChange(e.target.value, "due_date");
                  }}
                />
              </div>
              <div className="lg:space-y-2 mt-6">
                <p className="text-putih font-normal text-base">Attachment</p>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="uploadfile-btn"
                />
                <input
                  className="block p-2.5 text-sm lg:h-[3.4rem] w-full md:w-1/2 lg:w-full h-[2.8rem] bg-card rounded-[10px] border placeholder:text-gray-500 text-putih focus:outline-none focus:border-putih border-abu font-light"
                  id="uploadfile-btn"
                  type="file"
                  accept="application/pdf, application/vnd.ms-excel, application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword "
                  onChange={(e) => {
                    handleChange(e.target.files[0], "file");
                  }}
                />
              </div>
            </div>
            <div className="lg:space-y-2 mt-6">
              <p className="text-putih font-normal text-base">Images</p>
              <label
                className="block mb-2 text-sm font-medium text-gray-900"
                htmlFor="uploadimage-btn"
              />
              <input
                className="block p-2.5 text-sm lg:h-[3.3rem] w-full md:w-1/2  pl-3 h-[2.8rem] bg-card rounded-[10px] border placeholder:text-gray-500 text-putih focus:outline-none focus:border-putih border-abu font-light"
                id="uploadimage-btn"
                type="file"
                accept="image/png, image/jpg"
                onChange={(e) => {
                  setImages(URL.createObjectURL(e.target.files[0]));
                  handleChange(e.target.files[0], "images");
                }}
              />
              {images ? (
                <img
                  className="w-[4rem] h-[4rem] md:w-[10rem] mt-4  md:h-[10rem] rounded-sm object-cover"
                  src={images}
                  alt="img"
                />
              ) : null}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <CustomButton id="input-file" label="Add" color="Primary" />
          </div>
        </form>
      </div>

      {/* -------bgian task---- */}
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        tasks
          ?.sort((a, b) => b.id_task - a.id_task)
          .map((item) => (
            <form
              className=" w-[18rem] md:w-[32rem] lg:w-[45rem] h-auto bg-card p-5 md:py-5 md:px-8 lg:p-10 mt-8 rounded-[10px] pb-9"
              key={item.id_task}
            >
              <div className="flex justify-between items-start break-words ">
                <div className="w-[65%]">
                  <h1
                    id="click-title"
                    onClick={() => navigate(`/detailtask/${item.id_task}`)}
                    className="text-putih text-sm md:text-2xl font-semibold cursor-pointer hover:text-button break-words"
                  >
                    {item.title}
                  </h1>
                </div>
                <div className="flex justify-between w-[35%]">
                  <p className="text-button text-[6px] md:text-xs ">
                    Due date{" "}
                    <span
                      className={`${
                        detailDate > item.due_date
                          ? "text-[#CC5D5D]"
                          : "text-button"
                      }  `}
                    >
                      {item.due_date}
                    </span>
                  </p>
                  {/* ---kebab menu--- */}
                  <div className="dropdown dropdown-bottom dropdown-end">
                    <label
                      id="icon-options"
                      tabIndex={0}
                      className="cursor-pointer  text-putih"
                    >
                      <SlOptionsVertical />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-1 shadow-md bg-card rounded-[10px] w-[6rem] text-sm  text-abu"
                    >
                      <label
                        htmlFor="modal-edit-task"
                        className="hover:text-button px-4 pt-2 text-sm text-abu cursor-pointer"
                        onClick={() => {
                          setIdTask(item.id_task);
                          setTitle(item.title);
                          setDescription(item.description);
                          setDue_date(item.due_date.slice(0, 10));
                          setFile(item.file);
                          setImages(item.images);
                        }}
                      >
                        Edit
                      </label>
                      <li
                        id="delete-click"
                        className=" text-[#CC5D5D]"
                        onClick={() => deleteTask(item?.id_task)}
                      >
                        <a>Delete</a>
                      </li>
                    </ul>
                  </div>
                  {/*  end kebab menu */}
                </div>
              </div>
              <p className=" text-[10px] md:text-sm text-abu mt-3 font-light break-words">
                {item.description}
              </p>
              {item.file ? (
                <a
                  href={item.file}
                  id="file-name"
                  className="hover:underline h-[2rem] w-full mt-8 text-[8px] md:text-xs flex items-center rounded-sm space-x-2 text-abu my-3 break-words"
                >
                  {item.file.substring(item.file.lastIndexOf(".") + 1) ==
                  "pdf" ? (
                    <img src={PDF} className="w-6 h-6" />
                  ) : item.file.substring(item.file.lastIndexOf(".") + 1) ==
                    "xlsx" ? (
                    <img src={EXCEL} className="w-6 h-6" />
                  ) : (
                    ""
                  )}
                  <p className="break-words">
                    {item.file.substring(item.file.lastIndexOf("/") + 1)}
                  </p>
                </a>
              ) : (
                ""
              )}
              {item.images ? (
                <a href={item.images} id="images-name" className=" w-10">
                  <img
                    className="w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-2 text-gray-400 rounded-sm object-cover cursor-pointer"
                    src={item.images}
                  />
                </a>
              ) : (
                ""
              )}
              <div className=" flex justify-end mt-5 gap-1 text-putih ">
                <p
                  id="submit-click"
                  onClick={() => navigate(`/detailtask/${item.id_task}`)}
                  className="text-[7px] md:text-xs font-medium cursor-pointer hover:underline flex flex-row items-center space-x-2"
                >
                  See the Submitted Task by Mentees
                  <FiArrowRight />
                </p>
              </div>
            </form>
          ))
      )}

      {/* ---modal--- */}
      <input type="checkbox" id="modal-edit-task" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box bg-card ">
          <label
            htmlFor="modal-edit-task"
            className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
          >
            ✕
          </label>
          <form
            className="flex flex-col p-9 gap-3"
            onSubmit={(e) => handleEditTasks(e)}
          >
            <h3 className="font-medium text-lg text-putih mb-2">
              Edit Your Task
            </h3>
            <CustomInput
              id="input-title"
              placeholder="Title"
              category="Submit"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <CustomInput
              id="input-description"
              placeholder="Description"
              category="Submit"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <CustomInput
              id="input-due_date"
              placeholder="Due_date"
              category="Submit"
              onChange={(e) => setDue_date(e.target.value)}
              value={due_date}
            />
            <div className="flex justify-between items-center">
              <input
                hidden
                id="upload-btn"
                type="file"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                defaultValue={file}
              />
              <label
                className="bg-[#38486A]  w-40 lg:w-40 md:w-28 flex items-center h-[2.8rem] rounded-[10px] text-xs text-abu p-3 cursor-pointer"
                htmlFor="upload-btn"
              >
                <HiOutlineDocumentText className="text-xl mr-2" />
                Choose a File
              </label>
              <div>
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

export default WithRouter(InputTask);
