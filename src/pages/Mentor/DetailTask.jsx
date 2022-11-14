import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { apiRequest } from "../../utils/apiRequest";
import { WithRouter } from "../../utils/navigation";
import { ListTask } from "../../components/ListItems";
import Swal from "sweetalert2";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import PDF from "../../assets/PDF.svg";
import EXCEL from "../../assets/EXCEL.svg";
import { useTitle } from "../../utils/useTitle";
import { handleAuth } from "../../utils/reducers/reducer";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const DetailTask = (props) => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const [detailTask, setDetailTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [objSubmit, setObjSubmit] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useTitle(`Task - ${detailTask.title}`);

  useEffect(() => {
    getDetailTasks();
  }, []);

  const getDetailTasks = () => {
    const { id_tasks } = props.params;
    apiRequest(`mentors/tasks/${id_tasks}`, "get")
      .then((res) => {
        const results = res.data;
        setDetailTask(results);
        console.log(results);
      })
      .catch((err) => {
        const { data } = err.response;
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

  const submitScoreTask = async (e) => {
    e.preventDefault();
    if (objSubmit.score <= -1 || objSubmit.score > 101) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Point must be between 1 and 100",
        showConfirmButton: true,
      });
      return;
    }

    const body = {
      score: parseInt(objSubmit.score),
      id_task: parseInt(objSubmit.id_task),
    };
    apiRequest(`mentors/submission/${objSubmit.id_submission}`, "post", body)
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
        getDetailTasks();
      });
  };

  const currentDate = new Date();
  let detailDate =
    currentDate.getFullYear() +
    "-" +
    currentDate.getMonth() +
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
      <h1 className="text-putih text-lg lg:text-2xl font-medium mb-1">
        Detail Task
      </h1>
      {/* -------bgian task---- */}
      <div className=" w-full h-auto bg-card p-5 md:py-3 md:px-5 lg:py-4 mt-5 rounded-[10px]">
        <div className="flex justify-between items-center ">
          <h1 className="text-putih text-sm md:text-2xl font-semibold">
            {detailTask.title}
          </h1>
          <div className="flex gap-5">
            <p className="text-button text-[6px] md:text-xs ">
              Due date{" "}
              <span
                className={`${
                  detailDate > detailTask.due_date
                    ? "text-[#CC5D5D]"
                    : "text-button"
                }  `}
              >
                {detailTask.due_date}
              </span>
            </p>
          </div>
        </div>
        <p className=" text-[10px] md:text-sm text-abu mt-3 font-light">
          {detailTask.description}
        </p>
        {detailTask.file ? (
          <a
            href={detailTask.file}
            id="file-name"
            className=" hover:underline h-[2rem] text-[8px] md:text-xs flex items-center rounded-sm space-x-2 text-abu my-3"
          >
            {detailTask.file.substring(detailTask.file.lastIndexOf(".") + 1) ==
            "pdf" ? (
              <img src={PDF} className="w-6 h-6" />
            ) : detailTask.file.substring(
                detailTask.file.lastIndexOf(".") + 1
              ) == "xlsx" ? (
              <img src={EXCEL} className="w-6 h-6" />
            ) : (
              "e"
            )}
            {detailTask.file.substring(detailTask.file.lastIndexOf("/") + 1)}
          </a>
        ) : (
          ""
        )}
        {detailTask.images ? (
          <img
            className="w-[4.5rem] h-[4.5rem] md:w-[12rem] md:h-[7rem] mt-4 rounded-sm object-cover"
            src={detailTask.images}
          />
        ) : (
          ""
        )}
      </div>

      {/* -------task submitted---- */}
      <div className="w-full h-[26rem] md:h-[17rem] bg-card rounded-[20px] text-xs md:text-lg overflow-auto mt-5">
        <div className="flex flex-row text-putih px-3 md:px-7 py-2 space-x-2 sticky top-0 z-10 bg-card border-b border-abu">
          <p className="w-[10%] text-center">No</p>
          <p className="w-[30%] text-center">Name</p>
          <p className="w-[35%] text-center">File Name</p>
          <p className="w-[15%] text-center">Points</p>
          <p className="w-[2%] text-center"></p>
        </div>
        {!detailTask.submission ? (
          <div className="text-gray-400 mt-3 text-center">No Submission </div>
        ) : (
          detailTask.submission
            ?.sort((a, b) => b.id_submission - a.id_submission)
            .map((item, index) => (
              <ListTask
                index={index}
                key={item.id_submission}
                file={item.file}
                name={item.name}
                score={item.score}
                onClickEdit={() => {
                  setObjSubmit({
                    id_submission: item.id_submission,
                    score: item.score,
                    id_task: detailTask.id_task,
                  });
                }}
              />
            ))
        )}
      </div>
      <input type="checkbox" id="modal-edit-points" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box w-1/2 bg-card p-14">
          <div className="flex flex-row justify-between">
            <h1 className="text-putih text-lg md:text-3xl font-medium">
              Edit Points
            </h1>
            <label
              id="btn-close"
              htmlFor="modal-edit-points"
              className="cursor-pointer btn-sm text-putih border-white"
            >
              ✕
            </label>
          </div>
          <form className="flex flex-col" onSubmit={submitScoreTask}>
            <div className="flex flex-col space-y-2 my-5">
              <CustomInput
                id="input-score"
                placeholder="Score"
                category="Class"
                onChange={(e) =>
                  setObjSubmit({ ...objSubmit, score: e.target.value })
                }
                value={objSubmit.score}
              />
            </div>
            <div className="flex justify-start">
              <CustomButton
                id="btn-submitEditScore"
                label="Submit"
                color="Primary"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default WithRouter(DetailTask);
