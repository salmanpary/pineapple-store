import React from "react";
import "./footer.css";
import logo from "../images/logo1-modified.png";
import { SocialIcon } from "react-social-icons";
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
            <div className="space">
              <SocialIcon url="https://facebook.com/salmanpary" bgColor="	#4267B2" fgColor="white" style={{ height:40, width:40 }}/>
            </div>

            <div className="space">
              <SocialIcon url="https://instagram.com/salmanpary" bgColor="#bc2a8d"  fgColor="white" style={{ height:40, width:40 }}/>
            </div>

            <div className="space">
              <SocialIcon url="https://twitter.com/jaketrent" fgColor="white" style={{ height:40, width:40 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
