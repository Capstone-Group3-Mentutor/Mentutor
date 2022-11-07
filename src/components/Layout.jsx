import React from "react";
import {
  SideBarAdmin,
  SideBarMentee,
  SideBarMentor,
} from "../components/SideBar";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="w-full h-screen bg-main overflow-auto">
      <SideBarAdmin />
      <div className="h-screen ml-[50px] md:ml-[200px] lg:ml-[320px] relative p-6 md:px-14 md:pt-10 md:pb-10 ">
        {children}
      </div>
    </div>
  );
};
const LayoutMentee = ({ children }) => {
  return (
    <div className="w-full h-screen bg-main overflow-auto">
      <SideBarMentee />
      <div className="h-screen ml-[50px] md:ml-[200px] lg:ml-[320px] relative p-6 md:px-14 md:pt-10 md:pb-10 ">
        {children}
      </div>
    </div>
  );
};
const LayoutMentor = ({ children }) => {
  return (
    <div className="w-full h-screen bg-main overflow-auto">
      <SideBarMentor />
      <div className="h-screen ml-[50px] md:ml-[200px] lg:ml-[320px] relative p-6 md:px-14 md:pt-10 md:pb-10 ">
        {children}
      </div>
    </div>
  );
};

export { LayoutAdmin, LayoutMentee, LayoutMentor };
