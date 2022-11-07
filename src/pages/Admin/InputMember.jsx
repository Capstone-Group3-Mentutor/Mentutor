import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LayoutAdmin } from "../../components/Layout";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { apiRequest } from "../../utils/apiRequest";
import Swal from "sweetalert2";

const InputMember = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Role");
  const [className, setClassName] = useState(0);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (fullName && email && role && className && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fullName, email, role, className, password]);

  const handleSubmit = async (e) => {
    // setLoading(false)
    e.preventDefault();

    if (
      fullName.length == 0 ||
      email.length == 0 ||
      role == "Role" ||
      className == 0 ||
      password.length == 0
    ) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Data cannot be empty !",
        showConfirmButton: true,
      });
      return;
    }

    const body = {
      name: fullName,
      email,
      role,
      id_class: className,
      password,
    };
    apiRequest("admin/users", "post", body)
      .then((res) => {
        if (res?.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Register Succes",
            showConfirmButton: true,
          });
        }
        navigate("/homeadmin");
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Invalid Input From Client",
            showConfirmButton: true,
          });
        } else if (err.response?.status === 500) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something Error In Server",
            showConfirmButton: true,
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <LayoutAdmin>
      <div className="md:space-y-2 mb-3">
        <h1 className="text-putih text-lg md:text-3xl font-medium">
          Add Member
        </h1>
        <p className="text-abu font-light text-[8px] md:text-sm ">
          Join the class to learn with each others.
        </p>
      </div>
      <form
        className="w-full lg:w-[35rem] h-[35rem] md:h-[35rem] lg:h-[32rem] bg-card rounded-[20px] text-xs md:text-lg px-5 md:px-10 py-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2 w-full">
            <p className="text-putih text-md md:text-lg">Name</p>
            <CustomInput
              id="input-fullname"
              category="Class"
              type="text"
              placeholder="Full name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <h1 className="text-putih text-md md:text-lg">Email</h1>
            <CustomInput
              id="input-email"
              category="Class"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-row space-x-4">
            <div className="w-1/2 flex flex-col space-y-2 ">
              <h1 className="text-putih text-md md:text-lg">Role</h1>
              <label htmlFor="dropdown-role" className="sr-only"></label>
              <select
                id="dropdown-role"
                className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem]"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <option value="Role">Choose A Role</option>
                <option value="mentor" id="Mentor">
                  Mentor
                </option>
                <option value="mentee" id="Mentee">
                  Mentee
                </option>
              </select>
            </div>
            <div className="w-1/2 flex flex-col space-y-2 ">
              <p className="text-putih text-md md:text-lg">Class</p>
              <label htmlFor="dropdown-class" className="sr-only"></label>
              <select
                id="dropdown-class"
                className="border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light rounded-[10px] bg-card w-full pl-3 h-[3.4rem]"
                onChange={(e) => setClassName(e.target.value)}
                value={className}
              >
                <option className="text-abu" value={0}>
                  Choose A Class
                </option>
                <option value={1} id="FE">
                  Front-end
                </option>
                <option value={2} id="BE">
                  Back-end
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <p className="text-putih text-md md:text-lg">Password</p>
            <CustomInput
              id="input-password"
              category="Class"
              type="password"
              placeholder="***********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <div className="text-end mt-5">
          <CustomButton
            id="btn-addClass"
            color="Primary"
            label="Add"
            // loading={disabled || loading}
          />
        </div>
      </form>
    </LayoutAdmin>
  );
};

export default InputMember;
