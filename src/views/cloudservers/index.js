import React from 'react'
// import sections
import CloudServers from '../../components/sections/cloudservers/couldservers'
import Cta from '../../components/sections/Cta'

const Home = () => {
  return (
    <>
      <CloudServers
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Cta split />
    </>
  )
}

export default Home
