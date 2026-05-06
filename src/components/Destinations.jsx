import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './Destinations.css';

const destinationsData = [
  { image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Bali, Indonesia', price: '$899' },
  { image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Maldives', price: '$1299' },
  { image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Santorini, Greece', price: '$1099' },
  { image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Phi Phi Islands', price: '$799' },
];

const Destinations = () => {
  return (
    <section id="destinations" className="section">
      <div className="container">
        <h2 className="section-title">Featured Destinations</h2>
        <p className="section-subtitle">Explore our handpicked tropical paradises offering the perfect blend of relaxation and adventure.</p>
        
        <div className="destinations-grid">
          {destinationsData.map((dest, index) => (
            <motion.div 
              className="destination-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="destination-img-container">
                <img src={dest.image} alt={dest.title} className="destination-img" />
                <div className="destination-price">Starting from {dest.price}</div>
              </div>
              <div className="destination-info">
                <div className="destination-location">
                  <MapPin size={18} />
                  <h3>{dest.title}</h3>
                </div>
                <a href="#contact" className="btn btn-outline dest-btn">Explore</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
