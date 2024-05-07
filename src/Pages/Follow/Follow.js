import "./follow.css";
import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
function Follow() {
  return (
    <div className="social-media flex flex-wrap justify-center items-center h-[77vh]">
      <Link
        to="https://twitter.com"
        className="text-[#333] no-underline text-2xl transition-[color] duration-[0.3s] ease-[ease] mx-[12px] my-0 hover:text-[#4bb991] p-[15px] border-[3px] min-w-[135px] text-center border-solid border-[#333] rounded-[15px]"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-x-twitter text-[100px]"></i>
      </Link>
      <Link
        to="https://www.instagram.com/mdmoradiya_04/"
        className="text-[#333] no-underline text-2xl transition-[color] duration-[0.3s] ease-[ease] mx-[12px] my-0 hover:text-[#4bb991] p-[15px] border-[3px] min-w-[135px] text-center border-solid border-[#333] rounded-[15px]"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-instagram text-[100px]"></i>
      </Link>
      <Link
        to="https://www.linkedin.com/in/meet-moradiya/"
        className="text-[#333] no-underline text-2xl transition-[color] duration-[0.3s] ease-[ease] mx-[12px] my-0 hover:text-[#4bb991] p-[15px] border-[3px] min-w-[135px] text-center border-solid border-[#333] rounded-[15px]"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-linkedin text-[100px]"></i>
      </Link>
      <Link
        to="https://facebook.com"
        className="text-[#333] no-underline text-2xl transition-[color] duration-[0.3s] ease-[ease] mx-[12px] my-0 hover:text-[#4bb991] p-[15px] border-[3px] min-w-[135px] text-center border-solid border-[#333] rounded-[15px]"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fab fa-facebook text-[100px]"></i>
      </Link>
    </div>
  );
}

export default Follow;
