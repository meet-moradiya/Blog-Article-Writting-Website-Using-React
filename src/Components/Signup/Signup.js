// import "./signup.css";
// import React, { useState } from "react";
// import authService from "../../Appwrite/Auth";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../Store/authSlice";
// import { useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";

// function Signup() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [error, setError] = useState("");
//   const { register, handleSubmit } = useForm();

//   const createAccount = async (data) => {
//     setError("");
//     try {
//       const accountData = await authService.createAccount(data);
//       if (accountData) {
//         const userData = await authService.getCurrentUser();
//         if (userData) dispatch(login(userData));
//         navigate("/");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="main flex justify-center items-center h-screen bg-[#f2f2f2] m-0 ">
//       <div className="max-w-[400px] bg-white rounded shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] p-[30px]">
//         <h1 className="text-[30px] font-semibold mx-0 my-[30px] leading-tight">Sign Up now and dive into a World of Inspiring Blogs!</h1>
//         <form onSubmit={handleSubmit(createAccount)} className="flex flex-col">
//           <input
//             type="text"
//             placeholder="Your Good Name"
//             required
//             className="block w-full rounded text-[14px] mx-0 my-2.5 p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none"
//             {...register("name")}
//           />
//           <input
//             type="email"
//             placeholder="Email Address"
//             required
//             className="block w-full rounded text-[14px] mx-0 my-2.5 p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none"
//             {...register("email", {
//               validate: {
//                 matchPattern: (value) => {
//                   return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "email address is not valid";
//                 },
//               },
//             })}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="block w-full rounded text-[14px] mx-0 my-2.5 p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none"
//             {...register("password")}
//           />
//           {error && <p className="error-message text-center text-[14px] text-red-600 ">{error}</p>}
//           <p className="pInsideForm text-center text-[12px] text-[#333] mx-0 my-5 tracking-wider [word-spacing:0.5px]">
//             By clicking the "Create iBlog Account" button, you are creating an iBlog account, and you agree to iBlog's
//             <br />
//             <a href="terms-of-use.html" className="text-[#3eb489] no-underline">
//               Terms of Use
//             </a>
//             &nbsp;and&nbsp;
//             <a href="privacy-policy.html" className="text-[#3eb489] no-underline">
//               Privacy Policy
//             </a>
//           </p>
//           <button
//             type="submit"
//             className="bg-[#3eb489] text-white rounded text-[16px] leading-none font-bold cursor-pointer self-end transition-[border-radius] duration-[0.2s] ease-[ease-in-out] mx-0 my-[15px] px-5 py-[15px] border-[none] hover:rounded-[20px]"
//           >
//             Create iBlog Account
//           </button>
//         </form>
//         <p className="pOutsideForm text-center text-[14px] text-[#333] font-bold mx-0 my-2.5">
//           Already have an account?&nbsp;
//           <Link
//             to="/login"
//             className="text-[#3eb489] no-underline hover:text-[#28936c] hover:border-b-[1.5px] hover:border-b-[#28936c] hover:border-solid"
//           >
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

// #####################################################################

import "./signup.css";
import React, { useState } from "react";
import authService from "../../Appwrite/Auth";
import { Link, useNavigate } from "react-router-dom";
import { login as storeLogin } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setUserData } from "../../Pages/Account/userData";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createAccount = async (data) => {
    setError("");
    try {
      const accountData = await authService.createAccount(data);
      if (accountData) {
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
    <div className="main flex justify-center items-center h-screen bg-[#f2f2f2] m-0 ">
      <div className="max-w-[400px] bg-white rounded shadow-[rgba(0,0,0,0.16)_0px_3px_6px,rgba(0,0,0,0.23)_0px_3px_6px] p-[30px]">
        <h1 className="text-[30px] font-semibold mx-0 my-[30px] leading-tight">Sign Up now and dive into a World of Inspiring Blogs!</h1>
        <form onSubmit={handleSubmit(createAccount)} className="flex flex-col">
          <input
            type="text"
            placeholder="Your Good Name"
            required
            className="block w-full rounded text-[14px] mx-0 my-2.5 p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className={`block w-full rounded text-[14px] mx-0 my-2.5 p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo|icloud|aol)\.com$/,
                message: "Invalid address",
              },
            })}
          />
          {errors.email && <p className="error-message text-center text-[14px] text-red-600">{errors.email.message}</p>}
          <input
            type="password"
            placeholder="Password"
            required
            className="block w-full rounded text-[14px] mx-0 my-2.5 p-2.5 border-[1.5px] border-solid border-[#ccc] focus:border-2 focus:border-solid focus:border-[#42bd99] focus:outline-none"
            {...register("password")}
          />
          {error && <p className="error-message text-center text-[14px] text-red-600 ">{error}</p>}
          <p className="pInsideForm text-center text-[12px] text-[#333] mx-0 my-5 tracking-wider [word-spacing:0.5px]">
            By clicking the "Create iBlog Account" button, you are creating an iBlog account, and you agree to iBlog's
            <br />
            <a href="terms-of-use.html" className="text-[#3eb489] no-underline">
              Terms of Use
            </a>
            &nbsp;and&nbsp;
            <a href="privacy-policy.html" className="text-[#3eb489] no-underline">
              Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            className="bg-[#3eb489] text-white rounded text-[16px] leading-none font-bold cursor-pointer self-end transition-[border-radius] duration-[0.2s] ease-[ease-in-out] mx-0 my-[15px] px-5 py-[15px] border-[none] hover:rounded-[20px]"
          >
            Create iBlog Account
          </button>
        </form>
        <p className="pOutsideForm text-center text-[14px] text-[#333] font-bold mx-0 my-2.5">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="text-[#3eb489] no-underline hover:text-[#28936c] hover:border-b-[1.5px] hover:border-b-[#28936c] hover:border-solid"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
