import React from 'react'
import Hero from './components/sections/Hero'
import FeaturesTiles from './components/sections/FeaturesTiles'
import Testimonial from './components/sections/Testimonial'
import Cta from './components/sections/Cta'
import { getDictionary } from '../../get-dictionary';

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dictionary={dict.hero} className="illustration-section-01" />
      <FeaturesTiles dictionary={dict.feature_tiles} />
      <Testimonial dictionary={dict.testimonial} topDivider />
      <Cta dictionary={dict.cta} split />
    </>
  )
}
