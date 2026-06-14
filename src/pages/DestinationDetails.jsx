import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import './DestinationDetails.css';

import { destinationDB } from '../data/destinationDB';

const DestinationDetails = () => {
  const { id } = useParams();
  const data = destinationDB[id];
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    if (data) {
      const localKey = `shubh_reviews_${id}`;
      let localReviews = [];
      try {
        localReviews = JSON.parse(localStorage.getItem(localKey) || '[]');
      } catch (e) {
        localReviews = [];
      }
      setAllReviews([...localReviews, ...data.reviews]);
    }
  }, [id, data]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);

  const openLightbox = (photo) => {
    setCurrentPhoto(photo);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentPhoto(null);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) return <div className="section"><div className="container">Destination not found</div></div>;

  return (
    <div className="destination-page">
      <Header />

      {/* Hero Section */}
      <div className="dest-hero" style={{ backgroundImage: `url(${data.heroImage})` }}>
        <div className="dest-hero-overlay"></div>
        <div className="container dest-hero-content">
          <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Home</Link>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {data.title}
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {data.description}
          </motion.p>
        </div>
      </div>

      <div className="container dest-main">
        {/* Itinerary */}
        <section className="dest-section">
          <h2 className="dest-section-title"><Calendar className="icon" /> Itinerary & Inclusions</h2>
          <div className="itinerary-timeline">
            {data.itinerary.map((item, index) => (
              <div className="itinerary-item" key={index}>
                <div className="day-badge">Day {item.day}</div>
                <div className="itinerary-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Group Photos */}
        <section className="dest-section">
          <h2 className="dest-section-title"><Users className="icon" /> Past Group Memories</h2>
          <div className="gallery-grid">
            {data.groupPhotos.map((photo, index) => (
              <motion.div
                className="gallery-item"
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <img src={photo} alt={`Group traveling in ${data.title}`} onClick={() => openLightbox(photo)} style={{ cursor: 'pointer' }} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Destination Photos */}
        {data.photos && (
          <section className="dest-section">
            <h2 className="dest-section-title"><MapPin className="icon" /> Destination Photos</h2>
            <div className="gallery-grid large">
              {data.photos.map((photo, idx) => (
                <motion.div className="gallery-item" key={idx} whileHover={{ scale: 1.03 }}>
                  <img src={photo} alt={`${data.title} photo ${idx + 1}`} onClick={() => openLightbox(photo)} style={{ cursor: 'pointer' }} />
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Reviews */}
        <section className="dest-section bg-light-card">
          <h2 className="dest-section-title"><Star className="icon" /> Client Reviews</h2>
          <div className="reviews-grid">
            {allReviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="#f7a23b" color="#f7a23b" />)}
                </div>
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <WhatsAppButton />
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
            <img src={currentPhoto} alt="Enlarged destination" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
