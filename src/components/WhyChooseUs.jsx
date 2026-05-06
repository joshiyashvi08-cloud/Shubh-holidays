import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, ThumbsUp, Clock } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  { icon: Shield, title: 'Secure & Safe', description: 'Your safety is our top priority. We ensure secure travel experiences.' },
  { icon: Star, title: 'Premium Service', description: 'Experience top-notch services and luxury accommodations.' },
  { icon: ThumbsUp, title: 'Highly Rated', description: 'Thousands of happy customers and 5-star reviews.' },
  { icon: Clock, title: '24/7 Support', description: 'We are always here to help you, anytime, anywhere.' },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section bg-light">
      <div className="container why-us-container">
        <motion.div 
          className="why-us-image"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Travelers enjoying" />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="text">Years<br/>Experience</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="why-us-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="section-title" style={{textAlign: 'left'}}>Why Choose<br/>Shubh Holidays</h2>
          <p className="why-us-desc">We go above and beyond to make sure your travel experience is smooth, enjoyable, and completely stress-free. Here's why thousands of travelers trust us.</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon">
                  <feature.icon size={24} />
                </div>
                <div className="feature-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
