import React from 'react';
import './WhatsAppButton.css';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="whatsapp://send?phone=919265413092" 
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
    </motion.a>
  );
};

export default WhatsAppButton;
