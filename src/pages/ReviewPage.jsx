import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, CheckCircle } from 'lucide-react';
import { destinationDB } from '../data/destinationDB';
import './ReviewPage.css';

const ReviewPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    rating: 5,
    text: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRating = (rate) => {
    setFormData(prev => ({ ...prev, rating: rate }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.destination || !formData.text) return;

    const newReview = {
      name: formData.name, // Optional: store the name to display later
      rating: formData.rating,
      text: formData.text,
      date: new Date().toISOString()
    };

    // Try to match the typed destination to a database key for dynamic updates
    let matchedId = null;
    const searchStr = formData.destination.toLowerCase().trim();
    
    for (const [key, dest] of Object.entries(destinationDB)) {
      if (
        key.toLowerCase().includes(searchStr) || 
        dest.title.toLowerCase().includes(searchStr) ||
        searchStr.includes(key.toLowerCase()) ||
        searchStr.includes(dest.title.toLowerCase())
      ) {
        matchedId = key;
        break;
      }
    }

    // Save to localStorage under the matched ID, or fallback to exactly what they typed
    const storageKey = `shubh_reviews_${matchedId || searchStr.replace(/\s+/g, '-')}`;
    let existingReviews = [];
    try {
      existingReviews = JSON.parse(localStorage.getItem(storageKey) || '[]');
    } catch (e) {
      existingReviews = [];
    }
    existingReviews.unshift(newReview);
    localStorage.setItem(storageKey, JSON.stringify(existingReviews));

    setSubmitted(true);
    
    setTimeout(() => {
      if (matchedId) {
        navigate(`/destination/${matchedId}`);
      } else {
        navigate(`/`);
      }
    }, 2500);
  };

  return (
    <>
      <Header />
      <div className="review-page">
        <div className="review-container">
          {submitted ? (
            <div className="review-success">
              <CheckCircle size={64} className="success-icon" />
              <h2>Thank You!</h2>
              <p>Your review has been successfully submitted and added to the destination page.</p>
              <p className="redirect-text">Redirecting you to the destination page...</p>
            </div>
          ) : (
            <>
              <div className="review-header">
                <h2>Share Your Experience</h2>
                <p>Help other travelers by sharing your journey with Shubh Holidays.</p>
              </div>
              
              <form className="review-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="destination">Destination</label>
                  <input 
                    type="text" 
                    id="destination" 
                    name="destination" 
                    value={formData.destination} 
                    onChange={handleChange} 
                    placeholder="E.g., Thailand, Goa, Manali..." 
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>Rating</label>
                  <div className="star-rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        size={32}
                        className={`star ${formData.rating >= star ? 'active' : ''}`}
                        onClick={() => handleRating(star)}
                        fill={formData.rating >= star ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="text">Your Review</label>
                  <textarea 
                    id="text" 
                    name="text" 
                    value={formData.text} 
                    onChange={handleChange} 
                    placeholder="Tell us about your trip..." 
                    rows="5" 
                    required 
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Review
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReviewPage;
