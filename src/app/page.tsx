import React from 'react'
import Hero from './components/sections/Hero'
import FeaturesTiles from './components/sections/FeaturesTiles'
import Testimonial from './components/sections/Testimonial'
import Cta from './components/sections/Cta'

export default function Home() {
  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Testimonial topDivider />
      <Cta split />
    </>
  )
}
