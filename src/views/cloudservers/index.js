import React from 'react';
// import sections
import FeaturesSplit from '../../components/sections/FeaturesSplit';
import Cta from '../../components/sections/Cta';

const Home = () => {

  return (
    <>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
    </>
  );
}

export default Home;