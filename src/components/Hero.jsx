import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.span 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover The World With Us
        </motion.span>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the Beauty of<br/>Tropical Paradises
        </motion.h1>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience unforgettable journeys tailored to your desires. 
          Let Shubh Holidays turn your dream vacation into reality.
        </motion.p>
        
        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#destinations" className="btn btn-primary">Our Destinations</a>
          <a href="#contact" className="btn btn-outline">Plan Your Trip</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
