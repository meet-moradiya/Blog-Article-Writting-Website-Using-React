import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

function Footer() {
  return (
    <div className="main leading-normal box-border m-0 p-0">
      <footer className="footer bg-[#3eb489] px-0 py-[70px]">
        <div className="max-w-[1170px] m-auto">
          <div className="change row flex flex-wrap">
            <div className="footer-col w-3/12 px-[15px] py-0">
              <h4 className="text-[22px] text-white capitalize font-semibold relative mb-[35px] before:content-[''] before:absolute before:bg-[#ffd7ba] before:h-0.5 before:box-border before:w-[50px] before:left-0 before:-bottom-2.5">
                company
              </h4>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    our services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col w-3/12 px-[15px] py-0">
              <h4 className="text-[22px] text-white capitalize font-semibold relative mb-[35px] before:content-[''] before:absolute before:bg-[#ffd7ba] before:h-0.5 before:box-border before:w-[50px] before:left-0 before:-bottom-2.5">
                get help
              </h4>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tutorial"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    payment options
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col w-3/12 px-[15px] py-0">
              <h4 className="text-[22px] text-white capitalize font-semibold relative mb-[35px] before:content-[''] before:absolute before:bg-[#ffd7ba] before:h-0.5 before:box-border before:w-[50px] before:left-0 before:-bottom-2.5">
                online shop
              </h4>
              <ul>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    Browse Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    Special Offers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[15px] capitalize text-white no-underline my-[15px] font-normal block transition-all duration-[0.3s] ease-[ease] hover:text-[#ffd7ba] hover:pl-2"
                  >
                    My Account
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col w-3/12 px-[15px] py-0">
              <h4 className="text-[22px] text-white capitalize font-semibold relative mb-[35px] before:content-[''] before:absolute before:bg-[#ffd7ba] before:h-0.5 before:box-border before:w-[50px] before:left-0 before:-bottom-2.5">
                follow us
              </h4>
              <div className="social-links">
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  className="p-[12px] inline-block h-[50px] w-[50px] bg-[rgba(255,255,255,0.2)] text-center leading-10 text-white transition-all duration-[0.5s] ease-[ease] mx-[7px] my-[5px] rounded-[50%] hover:text-[#24262b] hover:bg-[#ffd7ba]"
                >
                  <i className="fab fa-facebook-f text-[25px]"></i>
                </Link>
                <Link
                  to="https://twitter.com/"
                  target="_blank"
                  className="p-[12px] inline-block h-[50px] w-[50px] bg-[rgba(255,255,255,0.2)] text-center leading-10 text-white transition-all duration-[0.5s] ease-[ease] mx-[7px] my-[5px] rounded-[50%] hover:text-[#24262b] hover:bg-[#ffd7ba]"
                >
                  <i class="fa-brands fa-x-twitter text-[25px]"></i>
                </Link>
                <Link
                  to="https://www.instagram.com/mdmoradiya_04/"
                  target="_blank"
                  className="p-[12px] inline-block h-[50px] w-[50px] bg-[rgba(255,255,255,0.2)] text-center leading-10 text-white transition-all duration-[0.5s] ease-[ease] mx-[7px] my-[5px] rounded-[50%] hover:text-[#24262b] hover:bg-[#ffd7ba]"
                >
                  <i className="fab fa-instagram text-[25px]"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/meet-moradiya/"
                  target="_blank"
                  className="p-[12px] inline-block h-[50px] w-[50px] bg-[rgba(255,255,255,0.2)] text-center leading-10 text-white transition-all duration-[0.5s] ease-[ease] mx-[7px] my-[5px] rounded-[50%] hover:text-[#24262b] hover:bg-[#ffd7ba]"
                >
                  <i className="fab fa-linkedin-in text-[25px]"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
