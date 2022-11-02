import React from "react";

const CustomButton = ({ id, label, onClick, color }) => {
  const btn_color = {
    Primary: "bg-button py-2 px-9",
    Secondary: "bg-purple ",
    Biru: "bg-task py-2 px-4 text-blue-600 text-[10px]",
  };
  const colorClassname = btn_color[color || "Primary"];

  return (
    <button
      className={
        ` text-putih rounded-[5px] font-normal text-sm 
       ` + colorClassname
      }
      id={id}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
