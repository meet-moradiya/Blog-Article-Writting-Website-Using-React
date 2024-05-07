import "./header.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const currentStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      url: "/",
      active: currentStatus,
    },
    {
      name: "Explore",
      url: "/explore",
      active: currentStatus,
    },
    {
      name: "Create Blog",
      url: "/add-post",
      active: currentStatus,
    },
    {
      name: "About",
      url: "/about",
      active: currentStatus,
    },
    {
      name: "Contact Us",
      url: "/contact",
      active: currentStatus,
    },
    {
      name: "Account",
      url: "/account",
      active: currentStatus,
    },
    {
      name: "Login",
      url: "/login",
      active: !currentStatus,
    },
    {
      name: "Sign Up",
      url: "/signup",
      active: !currentStatus,
    },
    {
      name: "About",
      url: "/about",
      active: !currentStatus,
    },
    {
      name: "Contact Us",
      url: "/contact",
      active: !currentStatus,
    },
    {
      name: "Follow Us",
      url: "/social-media",
      active: !currentStatus,
    },
  ];
  return (
    <header className="header">
      <div className="main-navbar">
        <div className="container max-w-[1400px] w-[95%] px-[100px] m-auto flex flex-wrap justify-between shadow-[rgba(0,0,0,0.35)_0px_10px_15px] bg-[#3eb489ee] rounded-bl-[25px] rounded-br-[25px] border-b-[3px] border-solid border-[#264653]">
          <div className="main-logo">
            {/* <h1 className="logo text-white text-[4rem] tracking-wider font-bold cursor-pointer">iBlog</h1> */}
            <Link to="/" className="logo text-white text-[4rem] tracking-wider font-bold cursor-pointer">
              iBlog
            </Link>
          </div>
          <div className="navbar mx-0 my-auto">
            <input type="checkbox" className="hidden" />
            <div className="lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="ul-box flex flex-nowrap justify-between py-2">
              <ul className="nav-items flex flex-wrap justify-around list-none">
                {navItems.map((item) =>
                  item.active ? (
                    <li
                      key={item.name}
                      className="nav-item px-4 cursor-pointer text-[16px] capitalize text-white no-underline mx-[10px] block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:text-[24px] "
                    >
                      <Link to={item.url} className=" border-b-[2px] transition-[border] duration-[0.2s] hover:border-none">
                        {item.name}
                      </Link>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
