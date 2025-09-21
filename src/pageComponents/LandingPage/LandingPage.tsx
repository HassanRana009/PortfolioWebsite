import AboutSection from '@/components/AboutSection';
import ContactUs from '@/components/Contact';
import Expertise from '@/components/Expertise';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import React from 'react';

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Expertise />
      <FeaturedProjects />
      <ContactUs />
      <Footer />
    </>
  );
};

export default LandingPage;
