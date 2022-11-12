import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import { SlOptionsVertical } from "react-icons/sl";
import { apiRequest } from "../../utils/apiRequest";
import Swal from "sweetalert2";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { handleAuth } from "../../utils/reducers/reducer";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../utils/useTitle";

const HomeAdmin = () => {
  useTitle("Home");
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataClass, setDataClass] = useState([]);
  const [objSubmit, setObjSubmit] = useState({});

  useEffect(() => {
    fetchUser();
    fetchClass();
  }, []);

  const fetchUser = () => {
    setLoading(true);
    apiRequest("admin/users", "get")
      .then((res) => {
        setDataUser(res.data);
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
  const fetchClass = () => {
    setLoading(true);
    apiRequest("admin/classes", "get")
      .then((res) => {
        setDataClass(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleDelete = async (id_user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are You Sure to Delete Member?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonText: `cancel`,
      confirmButtonText: "Yes, delete!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          apiRequest(`admin/users/${id_user}`, "delete");
          Swal.fire({
            text: "Member Success Deleted",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
          });
        } else if (result.isDismissed == `cancel`) {
          alert("cancel button clicked");
        }
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => fetchUser());
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    const body = {
      name: objSubmit.name,
      email: objSubmit.email,
      password: objSubmit.password,
      role: objSubmit.role,
      class_name: objSubmit.class_name,
      id_class: parseFloat(objSubmit.id_class),
    };
    apiRequest(`admin/users/${objSubmit.id_user}`, "put", body)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success Update",
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
      .finally(() => fetchUser());
  };

  return (
    <>
      <Layout>
        <div className="pb-12">
          <div className="flex justify-between ">
            <div className="md:space-y-1">
              <h1 className="text-putih text-lg md:text-xl font-medium">
                Hello <span>Admin !</span>
              </h1>
              <p className="text-abu font-light text-[8px] md:text-sm">
                Welcome back, you are doing great.
              </p>
            </div>
          </div>
          <h1 className="text-putih text-lg md:text-2xl font-normal mt-[3rem] mb-[1.4rem]">
            List Mentor & Mentee
          </h1>
          <div className="w-full h-[30rem] md:h-[21rem] bg-card rounded-xl md:rounded-[20px]  text-xs md:text-base overflow-auto mb-5">
            <div className="flex flex-row text-putih px-3 md:px-7 py-2 space-x-2 sticky top-0 z-10 bg-card border-b border-abu mb-4">
              <p className="w-[10%] text-center">No</p>
              <p className="w-[30%] text-center">Name</p>
              <p className="w-[35%] text-center">Email</p>
              <p className="w-[15%] text-center">Role</p>
              <p className="w-[25%] text-center">Class</p>
              <p className="w-[2%] text-center"></p>
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              dataUser
                ?.sort((a, b) => b.id_user - a.id_user)
                .map((item, index) => (
                  <div
                    key={item?.id_user}
                    index={index}
                    className="flex flex-row text-[8px] items-center md:text-[10px] lg:text-[15px] text-abu px-3 md:px-7 py-1 space-x-2 mb-5"
                  >
                    <p className="w-[10%] text-center text-putih">
                      {index + 1}
                    </p>
                    <div className="flex flex-row space-x-3 items-center justify-between w-[30%] ">
                      <p className="text-left capitalize">{item?.name}</p>
                    </div>
                    <p className="w-[35%] text-center break-words">
                      {item?.email}
                    </p>
                    <p
                      className={`w-[15%] text-center capitalize ${
                        item?.role === "mentee"
                          ? "text-button"
                          : "text-[#D441B9]"
                      }`}
                    >
                      {item?.role}
                    </p>
                    <p className="w-[25%] text-center break-words capitalize">
                      {item?.class_name}
                    </p>
                    {/* option */}
                    <div className="dropdown dropdown-end ">
                      <label
                        id="icon-options"
                        tabIndex={0}
                        className="cursor-pointer text-putih"
                      >
                        <SlOptionsVertical size={13} />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-1 shadow-md bg-card rounded-[10px] w-[6rem] text-sm text-abu"
                      >
                        <label
                          htmlFor="modal-edit-user"
                          className="hover:text-button px-4 pt-2 text-sm text-putih cursor-pointer"
                          onClick={() => {
                            setObjSubmit({
                              id_user: item?.id_user,
                              class_name: item?.class_name,
                              id_class: item?.id_class,
                              name: item?.name,
                              password: item?.password,
                              role: item?.role,
                              email: item?.email,
                            });
                          }}
                        >
                          Edit
                        </label>
                        <li
                          id="delete-click"
                          className=" text-merah"
                          onClick={() => handleDelete(item?.id_user)}
                        >
                          <a>Delete</a>
                        </li>
                      </ul>
                    </div>
                    {/* end option */}
                  </div>
                ))
            )}
            ;
          </div>
        </div>
        {/* ---modal--- */}
        <input type="checkbox" id="modal-edit-user" className="modal-toggle" />
        <div className="modal  ">
          <div className="modal-box w-11/12 max-w-xl bg-main shadow-md">
            <label
              htmlFor="modal-edit-user"
              className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
            >
              ✕
            </label>
            <form
              className="flex flex-col md:p-9 lg:p-9 gap-4 "
              onSubmit={handleEditUser}
            >
              <h3 className="font-medium text-lg text-putih mb-2 pl-8">
                Edit Profile User
              </h3>
              <div className="flex flex-row  items-center justify-between pl-8 ">
                <div className="flex flex-col gap-3 ">
                  <CustomInput
                    id="input-fullname"
                    placeholder="your name"
                    category="Submit"
                    type="text"
                    onChange={(e) =>
                      setObjSubmit({ ...objSubmit, name: e.target.value })
                    }
                    value={objSubmit.name}
                  />
                  <CustomInput
                    id="input-email"
                    placeholder="contoh@gmail.com"
                    category="Submit"
                    type="text"
                    onChange={(e) =>
                      setObjSubmit({ ...objSubmit, email: e.target.value })
                    }
                    value={objSubmit.email}
                  />
                  <CustomInput
                    id="input-password"
                    placeholder="Password"
                    category="Submit"
                    type="password"
                    onChange={(e) =>
                      setObjSubmit({ ...objSubmit, password: e.target.value })
                    }
                    value={objSubmit.password}
                  />
                  <div className="flex flex-row space-x-4">
                    <div className="dropdown flex flex-col space-y-2 ">
                      <label
                        htmlFor="dropdown-class"
                        className="sr-only"
                      ></label>

                      <select
                        onChange={(e) =>
                          setObjSubmit({
                            ...objSubmit,
                            id_class: e.target.value,
                          })
                        }
                        value={objSubmit?.id_class}
                        id="dropdown-class"
                        className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem] p-2"
                      >
                        <option className="text-abu" disabled>
                          Class
                        </option>
                        {dataClass?.map((items) => (
                          <option value={items?.id_class} key={items?.id_class}>
                            {items?.class_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <CustomButton
                      id="btn-submitAdmin"
                      label="Submit"
                      color="Primary"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* end modal */}
      </Layout>
    </>
  );
};

export default HomeAdmin;
