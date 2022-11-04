import React from "react";
import Layout from "../../components/Layout";
import toys1 from "../../assets/toys-1.png";
import { CardProfile } from "../../components/Cards";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const ProfileMentor = () => {
  return (
    <Layout>
      <h1 className="text-putih text-lg lg:text-2xl font-medium mb-2">
        Profile
      </h1>
      <p className="text-abu font-light text-[8px] md:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-[3rem]">
        <CardProfile />
      </div>

      {/* ---modal--- */}
      <input type="checkbox" id="modal-edit-profile" className="modal-toggle" />
      <div className="modal  ">
        <div className="modal-box w-11/12 max-w-3xl bg-card">
          <label
            htmlFor="modal-edit-profile"
            className="cursor-pointer btn-sm  absolute right-2 top-2 text-putih border-white"
          >
            ✕
          </label>
          <form className="flex flex-col md:p-9 lg:p-9 gap-5">
            <h3 className="font-medium text-lg text-putih mb-2">
              Edit Profile
            </h3>
            <div className="flex flex-row  items-center justify-between">
              <div className=" flex flex-col justify-center items-center gap-3 space-y-3">
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
              </div>

              <div className="flex flex-col justify-end items-center gap-4">
                <CustomInput
                  id="input-fullname"
                  placeholder="your name"
                  category="Submit"
                />
                <CustomInput
                  id="input-email"
                  placeholder="contoh@gmail.com"
                  category="Submit"
                />
                <CustomInput
                  id="input-password"
                  placeholder="Password"
                  category="Submit"
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

export default ProfileMentor;
