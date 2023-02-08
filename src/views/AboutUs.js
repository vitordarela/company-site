import React, { useEffect } from 'react'
import AboutUsComponent from '../components/sections/AboutUs'

// import sections
import Cta from '../components/sections/Cta'

const CloudServers = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <>
            <AboutUsComponent
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
