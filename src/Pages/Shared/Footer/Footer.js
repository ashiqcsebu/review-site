import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/bookworm.png';

const Footer = () => {
    return (
        <div>
         <footer className="footer footer-center p-10 bg-cyan-600 text-primary-content">
          <div>         
              <img className="h-15 w-20" src={logo} alt="" />
              <p className="font-bold text-xl"> Book Worm <br/>Providing reliable Technologies since 2020</p> 
              <p className="font-semibold text-xl" >Copyright © 2022 - All right reserved</p>
         </div> 
  
     </footer>
        </div>
    );
};

export default Footer;