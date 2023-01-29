import React from 'react'
import ContactFormComponent from '../components/sections/contact/ContactForm'

// import sections
import Cta from '../components/sections/Cta'

const ContactForm = () => {
  return (
    <>
      <ContactFormComponent
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Cta split />
    </>
  )
}

export default ContactForm
