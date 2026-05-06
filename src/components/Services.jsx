import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Compass, Map, Camera, Umbrella, Coffee } from 'lucide-react';
import './Services.css';

const servicesData = [
  { icon: Plane, title: 'Flight Booking', description: 'Seamless and affordable flight bookings worldwide.' },
  { icon: Compass, title: 'Custom Itineraries', description: 'Personalized travel plans crafted just for you.' },
  { icon: Map, title: 'Guided Tours', description: 'Expert-led tours to uncover hidden gems securely.' },
  { icon: Camera, title: 'Photography Trips', description: 'Capture breathtaking moments with our specialized trips.' },
  { icon: Umbrella, title: 'Beach Holidays', description: 'Relax and unwind at the most beautiful beaches.' },
  { icon: Coffee, title: 'Culinary Experiences', description: 'Taste the world with our exclusive food tours.' },
];

const Services = () => {
  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">We provide a wide range of services to make your travel experience smooth, enjoyable, and unforgettable.</p>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
