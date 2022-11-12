import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import toys2 from "../../assets/toys-2.png";
import Swal from "sweetalert2";
import { BsImageFill } from "react-icons/bs";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useCookies } from "react-cookie";
import { CardProfile } from "../../components/Cards";
import { apiRequest } from "../../utils/apiRequest";
import { useTitle } from "../../utils/useTitle";

const ProfileMentee = () => {
  const [dataProfile, setDataProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [objSubmit, setObjSubmit] = useState({});
  const [cookie, setCookie] = useCookies();
  const [images, setImages] = useState("");
  const id_user = cookie.id_user;
  useTitle(`Mentee - ${dataProfile.name}`);

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = () => {
    setLoading(true);
    apiRequest(`admin/users/${id_user}`, "get")
      .then((res) => {
        setDataProfile(res.data);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => setLoading(false));
  };

  const handleEditUser = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest("users", "put", objSubmit, "multipart/form-data")
      .then((res) => {
        const { message } = res;
        Swal.fire({
          icon: "success",
          title: message,
          showConfirmButton: true,
        });
      })
      .catch((err) => {
        const data = err.response;
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed Updated",
          text: data.message,
          showConfirmButton: true,
        });
      })
      .finally(() => fetchUser());
  };
  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };
  return (
    <Layout>
      <h1 className="text-putih text-lg lg:text-2xl font-medium mb-2">
        My Profile
      </h1>
      <p className="text-abu font-light text-[8px] md:text-sm">
        Update your personal information
      </p>
      <div className="mt-[3rem]">
        <CardProfile
          name={dataProfile.name}
          class={dataProfile.class_name}
          role={dataProfile.role}
          images={toys2}
          onClickEdit={() => {
            setObjSubmit({
              name: dataProfile.name,
              email: dataProfile.email,
              password: dataProfile.password,
            });
          }}
        />
      </div>

      {/* ---modal--- */}
      <input type="checkbox" id="modal-edit-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-3xl bg-card">
          <label
            htmlFor="modal-edit-profile"
            className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
          >
            ✕
          </label>
          <form
            onSubmit={(e) => handleEditUser(e)}
            className="flex flex-col md:p-9 lg:p-9 gap-5"
          >
            <h3 className="font-medium text-lg text-putih mb-2">
              Edit Profile
            </h3>
            <div className="flex flex-row  items-center justify-between">
              <div className=" flex flex-col justify-center items-center gap-3 space-y-3git ">
                <img
                  src={toys2}
                  alt="avatar"
                  className="h-[5rem] w-[5rem] md:h-[12rem] md:w-[12rem] rounded-full "
                />
                <label
                  id="btn-upload-gbr"
                  className="cursor-pointer flex h-[2.3rem] w-[8rem] text-putih text-sm bg-button  items-center justify-center rounded-[5px]"
                  for="btn-gbr"
                >
                  <BsImageFill className="text-putih pr-2 text-xl" /> Upload
                  <input
                    onChange={(e) => {
                      setImages(URL.createObjectURL(e.target.files[0]));
                      handleChange(e.target.files[0], "images");
                    }}
                    accept="image/png,image/jpg"
                    type="file"
                    id="btn-gbr"
                    className="text-card placeholder:none hidden "
                  />
                </label>
              </div>
              <div className="flex flex-col justify-end items-center gap-4">
                <CustomInput
                  id="input-fullname"
                  placeholder="your name"
                  category="Submit"
                  type="text"
                  value={objSubmit.name}
                  onChange={(e) =>
                    setObjSubmit({ ...objSubmit, name: e.target.value })
                  }
                />
                <CustomInput
                  id="input-email"
                  placeholder="contoh@gmail.com"
                  category="Submit"
                  type="email"
                  value={objSubmit.email}
                  onChange={(e) =>
                    setObjSubmit({ ...objSubmit, email: e.target.value })
                  }
                />
                <CustomInput
                  id="input-password"
                  placeholder="Password"
                  category="Submit"
                  type="password"
                  value={objSubmit.password}
                  onChange={(e) =>
                    setObjSubmit({ ...objSubmit, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex justify-end">
              <CustomButton
                id="btn-submitMentee"
                label="Submit"
                color="Primary"
              />
            </div>
          </form>
        </div>
      </div>
      {/* end modal */}
    </Layout>
  );
};

export default ProfileMentee;
