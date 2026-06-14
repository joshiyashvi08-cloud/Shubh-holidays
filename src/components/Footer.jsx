import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Shubh Holidays</h2>
            <p>Your trusted partner for unforgettable travel experiences. We make your dream vacations come true with our expert guidance and premium services.</p>
            <div className="social-links">
              <a href="#"><FaFacebook size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="https://www.instagram.com/shubh.holidays_" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
              <a href="#"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shubh Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
