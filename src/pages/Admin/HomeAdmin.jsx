import React, { useState, useEffect } from "react";

import { LayoutAdmin } from "../../components/Layout";
import { SlOptionsVertical } from "react-icons/sl";
import { apiRequest } from "../../utils/apiRequest";
import Swal from "sweetalert2";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const HomeAdmin = () => {
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataClass, setDataClass] = useState([]);
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

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
    apiRequest(`admin/users/${id_user}`, "delete")
      .then((res) => {
        Swal.fire({
          title: "Success Delete!",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
        });
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => fetchUser());
  };

  // const handleEdit = async (id_user, e) => {
  //   setLoading(true);
  //   e.preventDefault();
  //   apiRequest(`admin/users/${id_user}`, "put")
  //     .then((res) => {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Succes Update",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .catch(() => {
  //       alert(err.toString());
  //     })
  //     .finally(() => fetchUser());
  // };

  return (
    <>
      <LayoutAdmin>
        <div className="flex justify-between ">
          <div className="md:space-y-2">
            <h1 className="text-putih text-lg md:text-2xl font-medium">
              Hello <span>Admin !</span>
            </h1>
            <p className="text-abu font-light text-[8px] md:text-sm">
              Welcome back, you are doing great.
            </p>
          </div>
        </div>
        <h1 className="text-putih text-lg md:text-3xl font-normal mt-[4rem] mb-[2rem]">
          List Mentor / Mentee
        </h1>
        <div className="w-full h-[30rem] md:h-[27rem] bg-card rounded-[30px] text-xs md:text-lg overflow-auto mb-5">
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
            dataUser?.map((item) => (
              <div className="flex flex-row text-[5px] items-center md:text-[10px] text-xs lg:text-[15px] text-abu px-3 md:px-7 py-1 space-x-2 mb-5">
                <p className="w-[10%] text-center">1</p>
                <div className="flex flex-row space-x-3 items-center justify-between w-[30%] ">
                  {/* <img
          src={toys3}
          className="h-[1.5rem] w-[1.5rem] md:h-[3rem] md:w-[3rem] rounded-full  "
        /> */}
                  <p className="text-left">{item?.name}</p>
                </div>
                <p className="w-[35%] text-center">{item?.email}</p>
                <p
                  className={`w-[15%] text-center ${
                    item?.role === "mentee" ? "text-button" : "text-[#D441B9]"
                  }`}
                >
                  {item?.role}
                </p>
                <p className="w-[25%] text-center">{item?.class_name}</p>
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
                    >
                      Edit
                    </label>
                    <li
                      id="delete-click"
                      className=" text-[#CC5D5D]"
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

        {/* ---modal--- */}
        <input type="checkbox" id="modal-edit-user" className="modal-toggle" />
        <div className="modal  ">
          <div className="modal-box w-11/12 max-w-2xl bg-main shadow-md">
            <label
              htmlFor="modal-edit-user"
              className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
            >
              ✕
            </label>
            <form
              className="flex flex-col md:p-9 lg:p-9 gap-4"
              // onSubmit={(e) => handleEdit(e)}
            >
              <h3 className="font-medium text-lg text-putih mb-2">
                Edit Profile User
              </h3>
              <div className="flex flex-row  items-center justify-between">
                {/* <div className=" flex flex-col justify-center items-center gap-3 space-y-3">
                  <img
                    src={toys1}
                    alt="avatar"
                    className="h-[5rem] w-[5rem] md:h-[12rem] md:w-[12rem] rounded-full "
                  />

                  <CustomButton
                    id="btn-uploadFoto"
                    label="Upload"
                    color="Primary"
                  />
                </div> */}

                <div className="flex flex-col gap-3 ">
                  <CustomInput
                    id="input-fullname"
                    placeholder="your name"
                    category="Submit"
                    type="text"
                    // value={fullname}
                    // onChange={(e) => setFullname(e.target.value, "fullname")}
                  />
                  <CustomInput
                    id="input-email"
                    placeholder="contoh@gmail.com"
                    category="Submit"
                    type="text"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value, "email")}
                  />
                  <CustomInput
                    id="input-password"
                    placeholder="Password"
                    category="Submit"
                    type="password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value, "password")}
                  />
                  <div className="flex flex-row space-x-4">
                    <div className="dropdown flex flex-col space-y-2 ">
                      <label
                        htmlFor="dropdown-class"
                        className="sr-only"
                      ></label>

                      <select
                        id="dropdown-class"
                        className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem] p-2"
                      >
                        <option className="text-abu" value="Class">
                          Class
                        </option>
                        {dataClass?.map((items) => (
                          <option value="Front-end-end" id="Mentor">
                            {items?.class_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col space-y-2 ">
                      <label for="dropdown-role" className="sr-only"></label>
                      <select
                        id="dropdown-role"
                        className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem] p-2"
                      >
                        <option className="text-abu" value="Role">
                          Role
                        </option>
                        <option value="Mentor" id="Mentor">
                          Mentor
                        </option>
                        <option value="Mentee" id="Mentee">
                          Mentee
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-3">
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
      </LayoutAdmin>
    </>
  );
};

export default HomeAdmin;
