import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          <h1>Shubh Holidays</h1>
        </a>
        
        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#destinations" onClick={() => setMobileMenuOpen(false)}>Destinations</a></li>
            <li><a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="nav-contact">
            <a href="tel:+919876543210" className="contact-link">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </nav>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
