import React from 'react';
// import sections
import Wso2Component from '../../components/sections/Wso2';
import Cta from '../../components/sections/Cta';

const Wso2 = () => {

  return (
    <>
      <Wso2Component invertMobile topDivider imageFill className="illustration-section-02" />
      <Cta split />
    </>
  );
}

export default Wso2;