import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/sheba.svg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-4  pt-5 pb-2 bg-dark variant-dark text-white text-center">
            <div className = "pb-3">
                <NavLink className="mx-3 menu-item sheba px-3" to="/home"><img src={logo} alt=""/> <span className="px-3">Sheba Hospital</span></NavLink>
            </div>
            
            <div className="text-center">
                <h2>
                    <a className="text-white" href="https://www.facebook.com/"><i className="fab fa-facebook-square me-3"></i></a>
                    <a className="text-white" href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a>
                    <a className="text-white" href="https://www.youtube.com/"><i className="fab fa-youtube-square me-3"></i></a>
                    <a className="text-white" href="https://twitter.com/"><i className="fab fa-twitter-square me-3"></i></a>
    
                </h2>
                
            </div>
            <p className="text-center" ><small> © Sheba Hospital,2021</small> </p>
        </div>
    );
};

export default Footer;