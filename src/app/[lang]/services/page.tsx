import React from 'react'
import type { Metadata } from 'next'
import Features from '../components/sections/Features'
import Cta from '../components/sections/Cta'
import {
  getServiceHeader,
  getServiceData,
} from '../../../utils/ServiceData'
import { getDictionary } from '../../../get-dictionary';

async function Services({ params: { lang } }) {

  const dict = await getDictionary(lang);
  const sectionHeader = getServiceHeader(dict.service_header);

  return (
    <>
      <Features
        sectionHeader={sectionHeader}
        data={getServiceData(dict.service_data)}
        topDivider
      />
      <Cta dictionary={dict.cta} split />
    </>
  )
}

export default Services

export async function generateMetadata({ params: { lang } }): Promise<Metadata> {
  
  const dict = await getDictionary(lang);
  const sectionHeader = getServiceHeader(dict.service_header);
  
  return {
    title: 'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
    description:
      'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,

    openGraph: {
      title: 'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
      description:
        'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
      url: 'https://www.codebe.dev/services',
      siteName: 'CodeBe.dev',
      images: [
        {
          url: 'https://www.codebe.dev/logo.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://www.codebe.dev/logo.png',
          width: 1800,
          height: 1600,
          alt: 'CodeBe',
        },
      ],
      locale: 'en_US',
      alternateLocale: ['pt-BR', 'pt-PT', 'es_ES', 'fr_FR', 'de_DE'],
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: 'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
      description:
        'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
      creator: '@codebe.dev',
      images: ['https://www.codebe.dev/logo.png'],
      site: 'https://www.codebe.dev/services',
    },
  }
}
