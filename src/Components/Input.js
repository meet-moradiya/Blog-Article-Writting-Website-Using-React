import React, { useId } from "react";

const Input = React.forwardRef(function Input({ label, type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`block w-full rounded text-[15px] mx-0 my-[12px] p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
