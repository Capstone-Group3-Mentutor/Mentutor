import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { CardTaskMentor } from "../../components/Cards";
import hero from "../../assets/hero.png";
import toys3 from "../../assets/toys-3.png";
import { Link } from "react-router-dom";
import { apiRequest } from "../../utils/apiRequest";
import { useCookies } from "react-cookie";
import { WithRouter } from "../../utils/navigation";
import Swal from "sweetalert2";
import { useTitle } from "../../utils/useTitle";

const HomeMentor = (props) => {
  useTitle("Home");
  const [datas, setDatas] = useState({});
  const [dataTask, setDataTask] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie] = useCookies();
  const [images, setImages] = useState("");
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
    apiRequest("mentors/tasks", "get")
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
  const fullname = `${datas.name}`;
  const first = fullname.split(" ")[0];

  return (
    <Layout>
      <div className="pb-9 flex flex-col items-center">
        <div className="flex justify-between w-[18rem] md:w-[32rem] lg:w-[52rem] ">
          <div className="md:space-y-2">
            <h1 className="text-putih text-lg md:text-3xl font-medium">
              Hello <span>{first}</span>
            </h1>
            <p className="text-abu font-light text-[8px] md:text-sm">
              Welcome back, you are doing great.
            </p>
          </div>
          <div className="flex items-center text-right ">
            <Link to="/profilementor">
              <img
                id="gbr-profile"
                src={toys3}
                alt="avatar"
                className="h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] rounded-full "
              />
            </Link>
            <div className="pl-2 md:pl-4 space-y-0">
              <Link to="/profilementor">
                <h1
                  id="profile-name"
                  className="text-putih text-[10px] md:text-base"
                >
                  {datas.name}
                </h1>
              </Link>
              <p className="text-abu font-light text-[8px] md:text-xs">
                Mentor
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
                Let's create a ways to bring out the best your students with
                special needs.
              </p>
            </div>
            <div className="relative bottom-9">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
        <div className="mt-[3rem] md:mt-[5rem]">
          <h1 className="text-putih text-lg font-medium mb-6">
            Your Created Task
          </h1>
          <div className="w-[18rem] md:w-[32rem] lg:w-[52rem] flex justify-end text-putih hover:text-button font-normal cursor-pointer mb-2 text-xs mr-3 ">
            <Link to="/inputtask">
              <p id="view-task">View All Task</p>
            </Link>
          </div>

          <div className="space-y-6">
            {loading ? (
              <p>Loading..</p>
            ) : (
              dataTask
                .sort((a, b) => b.id_task - a.id_task)
                .slice(0, 2)
                .map((item) => (
                  <CardTaskMentor
                    key={item.id_task}
                    id_task={item.id_task}
                    title={item?.title}
                    description={item.description}
                    images={item.images}
                    file={item.file}
                    due_date={item.due_date}
                  />
                ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WithRouter(HomeMentor);
