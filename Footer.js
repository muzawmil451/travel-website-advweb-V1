import React from 'react';
import './Footer.css';  // Assume you have a CSS file in src

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="social-media-links">
                <i className="fab fa-facebook fa-4x"></i>
                <i className="fab fa-twitter fa-4x"></i>
                <i className="fab fa-instagram fa-4x"></i>
            </div>
            <p>World Travel &copy; 2020, All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
