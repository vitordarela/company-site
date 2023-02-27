import AboutUsComponent from '../../components/sections/AboutUs'

// import sections
import Cta from '../../components/sections/Cta'

const CloudServers = () => {
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
