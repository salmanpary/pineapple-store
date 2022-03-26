import React from "react";
import './footer.css'
import logo from '../images/logo1-modified.png'
import { AiOutlineFacebook } from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <div className="footer mt-5">
      <div className="image ms-3">
      <img src={logo} alt="" width="70" height="70" className="bor"/>
      </div>
    
  
  <div className="things">
    <ul>
      <li><a href="#"> Home</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms and Conditions of Use</a></li>
    </ul>

  </div>
  <hr />
    <div className="foo">
      <ul>
        <li>
          Name
        </li>
      </ul>
      <div className="socials">
        <a href="#"><AiOutlineFacebook /></a>
      
        <a href="#"><AiOutlineInstagram/></a>
        <a href="#"><AiOutlineLinkedin/></a>
      
      </div>

    </div>
    </div>
    </>
  
  );
};
export default Footer;
