import React, { useEffect } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;