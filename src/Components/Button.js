import React from "react";

export default function Button({ children, type = "button", className = "", ...props }) {
  return (
    <button
      type={type}
      className={`bg-[rgb(62,180,137)] text-white rounded-[8px] text-[16px] leading-none font-bold cursor-pointer transition-[border-radius] duration-[0.2s] ease-[ease-in-out] mx-0 my-[15px] py-[13px] px-[20px] border-[none] hover:rounded-[20px] active:scale-[0.96] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
