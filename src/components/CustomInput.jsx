import React from "react";

const CustomInput = ({ id, placeholder, type, value, category, onChange }) => {
  const inputLibrary = {
    Login: "w-[300px] lg:w-96 md:w-80 pl-3 h-[3.4rem] bg-white rounded-[10px]",
    Submit: "w-[300px] lg:w-96 md:w-80 pl-3 h-[2.8rem] rounded-[10px] bg-card",
    Class: "w-[100px] lg:w-40 md:w-28 pl-3 h-[2.8rem] rounded-[10px] bg-card",
    Status:
      "w-[250px] lg:w-[40rem] lg:h-[3.3rem] md:w-[400px] pl-3 h-[2.8rem] bg-card rounded-[10px] ",
    Comment:
      "w-[250px] lg:w-[500px] md:w-[400px] pl-3 h-[2.8rem] bg-card rounded-[10px] ",
  };

  const widthClassName = inputLibrary[category];

  return (
    <input
      className={
        "border placeholder:text-abu text-xs text-putih focus:outline-none focus:border-putih border-abu font-light" +
        `${widthClassName}`
      }
      type={type}
      defaultValue={value}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
