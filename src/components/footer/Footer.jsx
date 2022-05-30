import React from 'react';
import EmailForm from '../email-form/Email-form';
import { BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <div className='footer-content'>
        <div className='footer-left'>
          <h2>You are welcome to meet me on:</h2>

          <div className='logo-container'>
            <BsGithub className='footer-logo' size={40} />
            <a href='https://github.com/GitBartbe'> GitHub </a>
          </div>

          <div className='logo-container'>
            <BsLinkedin className='footer-logo' size={40} />
            <a href='https://www.linkedin.com/in/bednarski-bartosz-front-end/'>
              LinkedIn
            </a>
          </div>
        </div>

        <div className='footer-right'>
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default Footer;
