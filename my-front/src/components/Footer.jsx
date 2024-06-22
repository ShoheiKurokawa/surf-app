import React from 'react';
import './styles/Footer.css';

const Footer = () => {
    const handleAboutClick = (e) => {
        e.preventDefault();
        window.location.href = '/#about';
        setTimeout(() => {
          document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-links">
            <a href="/">Home</a>
            <a href="/#about" onClick={handleAboutClick}>About</a>
            </div>
            <div className="footer-text">
            <p>&copy; 2024 Surfspot Explorer. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;
