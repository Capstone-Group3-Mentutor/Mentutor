import React from "react";

const CustomButton = ({ id, label, onClick, color, disabled }) => {
  const btn_color = {
    Primary:
      "bg-button py-1 px-5 md:py-2 md:px-9 lg:py-2 lg:px-9 hover:bg-gradient-to-r from-[#854AEA] to-[#DA54C1]",
    Secondary: "bg-purple ",
    Biru: "bg-task py-1 px-3 md:py-2 md:px-4 text-blue-600 text-[8px] md:text-[10px]",
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
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
