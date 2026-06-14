import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
