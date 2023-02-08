import React, { useEffect } from 'react'
import ContactFormComponent from '../components/sections/contact/ContactForm'

const ContactForm = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <ContactFormComponent
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />

    </>
  )
}

export default ContactForm
