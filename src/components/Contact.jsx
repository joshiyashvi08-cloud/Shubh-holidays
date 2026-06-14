import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start planning your dream vacation? Contact us today.</p>
        
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h3>Our Location</h3>
                <p>J K Chowk, Shyamal Infinity,<br/>University Road, Rajkot.</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h3>Call Us</h3>
                <p>+91 92654 13092</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h3>Email Us</h3>
                <p>shubhholiday20@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Clock size={24} /></div>
              <div>
                <h3>Office Timings</h3>
                <p>10 AM to 8 PM</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
