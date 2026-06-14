import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Destinations.css';

const nationalDestinations = [
  { id: 'chardham-yatra', image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Yamuna_at_Yamunotri.JPG', title: 'CharDham Yatra', price: '₹29,999/- Only' },
  { id: 'goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Goa', price: '₹7,499/- Only' },
  { id: 'manali-kasol', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg', title: 'Manali - Kasol', price: '₹9,999/- Only' },
  { id: 'kedarnath', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/1280px-Kedarnath_Temple_in_Rainy_season.jpg', title: 'Kedarnath', price: '₹15,999/- Only' },
  { id: 'ayodhya-nepal', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg/1280px-Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg', title: 'Ayodhya - Nepal', price: '₹32,999/- Only' },
  { id: 'himachal', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg/1280px-Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg', title: 'Himachal', price: '₹30,999/- Only' },
  { id: 'haridwar', image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Haridwar', price: '₹15,299/-' },
  { id: 'shimla-manali', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/1280px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg', title: 'Shimla - Manali', price: '₹16,499/-' }
];

const internationalDestinations = [
  { id: 'thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Thailand', price: '₹82,905/-' },
  { id: 'bali', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Brantan_Bali_Pura-Ulun-Danu-Bratan-01.jpg', title: 'Bali', price: '₹75,999/-' }
];

const DestinationCard = ({ dest, index }) => (
  <motion.div 
    className="destination-card"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
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
      <Link to={`/destination/${dest.id}`} className="btn btn-outline dest-btn">Explore</Link>
    </div>
  </motion.div>
);

const Destinations = () => {
  return (
    <section id="destinations" className="section">
      <div className="container">
        <h2 className="section-title">Featured Destinations</h2>
        <p className="section-subtitle">Explore our handpicked domestic and international tours offering the perfect blend of relaxation and adventure.</p>
        
        <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'left', color: 'var(--primary)' }}>National Tours</h3>
        <div className="destinations-grid">
          {nationalDestinations.map((dest, index) => (
            <DestinationCard key={dest.id} dest={dest} index={index} />
          ))}
        </div>

        <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '4rem', marginBottom: '1.5rem', textAlign: 'left', color: 'var(--primary)' }}>International Tours</h3>
        <div className="destinations-grid">
          {internationalDestinations.map((dest, index) => (
            <DestinationCard key={dest.id} dest={dest} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
