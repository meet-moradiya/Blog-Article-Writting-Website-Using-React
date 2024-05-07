import React from "react";
import "./contact.css";
import Button from "../../Components/Button";

function Contact() {
  return (
    <div className="p-[30px] ">
      <div className="contain border-2 overflow-hidden rounded-[15px]">
        <div className="wrapper">
          <div className="form">
            <h4 className="text-[18px] font-[600] my-[10px]">GET IN TOUCH</h4>
            <h2 className="uline text-[22px] font-[700] my-[15px]">Send us a message</h2>
            <form id="submit-form" action="">
              <p>
                <input id="name" className="form-input" type="text" placeholder="Your Name*" />
                <small className="name-error"></small>
              </p>
              <p>
                <input id="email" className="form-input" type="email" placeholder="Your Email*" />
                <small className="name-error"></small>
              </p>
              <p className="full-width">
                <input id="company-name" className="form-input" type="text" placeholder="Title*" required />
                <small></small>
              </p>
              <p className="full-width">
                <textarea minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
                <small></small>
              </p>
              <p className="full-width text-[12px]">
                By clicking submit button, you are agree to receive communications by call / email about Company's services.
              </p>
              <div className="buttons">
                <Button>Submit</Button>
                <Button>Reset</Button>
              </div>
            </form>
          </div>

          <div className="contacts contact-wrapper">
            <ul>
              <li className="text-[18px] font-Poppins">
                We're here to assist you! If you have any questions or need assistance, please feel free to reach out to us.
                <br />
                <br />
                You can also email us.
              </li>
              <span className="hightlight-contact-info">
                <li className="email-info">
                  <i className="fa fa-envelope" aria-hidden="true"></i> contact@iblog.com
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text">+91 99 9999 9999</span>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
