import React from 'react';
import { motion } from 'framer-motion';
import { Book, FileCheck, Plane, Hotel, Briefcase, Globe, Users, Mountain } from 'lucide-react';
import './Services.css';

const servicesData = [
  { icon: Book, title: 'Passport', description: 'Hassle-free passport application and renewal services.' },
  { icon: FileCheck, title: 'Visa', description: 'Expert assistance for quick and reliable visa processing.' },
  { icon: Plane, title: 'Flight Booking', description: 'Seamless and affordable flight bookings worldwide.' },
  { icon: Hotel, title: 'Hotel Booking', description: 'Comfortable and luxurious stays tailored to your budget.' },
  { icon: Briefcase, title: 'Corporate Tour', description: 'Professionally managed travel for corporate groups.' },
  { icon: Globe, title: 'Domestic & International Holiday Packages', description: 'Exciting holiday packages across the globe.' },
  { icon: Users, title: 'Group Booking', description: 'Specialized arrangements for large groups and families.' },
  { icon: Mountain, title: 'Adventure & Trekking', description: 'Thrilling adventure trips and trekking expeditions.' },
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
