import "./login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as storeLogin } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../Appwrite/Auth";
import { useForm } from "react-hook-form";
import { setUserData } from "../../Pages/Account/userData";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          setUserData(userData);
          dispatch(storeLogin(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="main flex justify-center items-center h-screen bg-[#f2f2f2] m-0">
      <div className="max-w-[400px] bg-white rounded shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] p-[30px]">
        <h1 className="text-[22px] font-semibold mx-0 my-[30px] leading-tight">
          🔐 Returning explorer? Welcome back to our realm of inspiration and insights! Log in to rediscover the wonders that await. Your next
          adventure is just a login away! 🌐
        </h1>
        <form onSubmit={handleSubmit(login)} className="flex flex-col">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="block w-full rounded text-[15px] mx-0 my-[12px] p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none"
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="block w-full rounded text-[15px] mx-0 my-[12px] p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none"
            {...register("password")}
          />
          {error && <p className="error-message text-center text-[14px] text-red-600 ">{error}</p>}
          <button
            type="submit"
            className="bg-[#3eb489] text-white rounded text-[16px] leading-none font-bold cursor-pointer transition-[border-radius] duration-[0.2s] ease-[ease-in-out] mx-0 my-[20px] py-[13px] border-[none] hover:rounded-[20px]"
          >
            Rejoin iBlog
          </button>
        </form>
        <p className="pOutsideForm text-center text-[14px] text-[#333] font-bold mx-0 my-2.5">
          Don't have account yet?
          <br />
          <Link
            to="/signup"
            className="text-[#3eb489] no-underline hover:text-[#28936c] hover:border-b-[1.5px] hover:border-b-[#28936c] hover:border-solid"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
