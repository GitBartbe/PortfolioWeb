import React from 'react';
import  EmailForm  from '../email-form/Email-form';
import { BsGithub, BsLinkedin,BsFacebook } from "react-icons/bs";
import './footer.css'

function Footer() {
  return (
   
      <div className="footer" id="contact">

        <div className="footer-content">
            <div className="footer-left">
            <h2>You are welcome to meet me on:</h2>
        <div className="logo-container">
          <BsGithub className="footer-logo" size={40} />
          <a> GitHub </a>
        </div>

        <div className="logo-container">
          <BsLinkedin className="footer-logo" size={40} />
          <a> LinkedIn </a>
        </div>

        <div className="logo-container">
          <BsFacebook className="footer-logo" size={40} />
          <a> Facebook </a>
        </div>
            </div> 
            
             <div className="footer-right">
                <EmailForm />
            </div>
        </div>
      </div>
      
   
  )
}

export default Footer;
