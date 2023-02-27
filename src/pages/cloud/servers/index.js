import React from 'react'
import CloudServersComponent from '../../../components/sections/CloudServers'

// import sections
import Cta from '../../../components/sections/Cta'

const CloudServers = () => {
  return (
    <>
      <CloudServersComponent
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Cta split />
    </>
  )
}

export default CloudServers
