import React from "react";
import "./footer.css";
import logo from "../images/logo1-modified.png";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer mt-5 container-fluid">
        <div className="image ms-3 pt-3">
          <img src={logo} alt="" width="70" height="70" className="bor" />
        </div>

        <div className="things">
          <ul>
            <li>
              <a href="https://www.w3schools.com/"> Home</a>
            </li>
            <li>
              <a href="https://www.w3schools.com/">About us</a>
            </li>
            <li>
              <a href="https://www.w3schools.com/">Careers</a>
            </li>
            <li>
              <a href="https://www.w3schools.com/">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.w3schools.com/">
                Terms and Conditions of Use
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="foo">
          <ul>
            <li>Name</li>
          </ul>
          <div className="socials">
            <a href="https://www.w3schools.com/">
              <AiOutlineFacebook />
            </a>

            <a href="https://www.w3schools.com/">
              <AiOutlineInstagram />
            </a>
            <a href="https://www.w3schools.com/">
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
