import React from 'react'
import type { Metadata } from 'next'
import Features from '../components/sections/Features'
import Cta from '../components/sections/Cta'
import {
  getTechData,
  getTechHeader as sectionHeader,
} from '../../utils/ServiceData'

const Technologies = () => {
  return (
    <>
      <Features data={getTechData} sectionHeader={sectionHeader} topDivider />
      <Cta split />
    </>
  )
}

export default Technologies

export const metadata: Metadata = {
  title: 'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
  description:
    'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,

  openGraph: {
    title: 'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
    description:
      'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
    url: 'https://www.codebe.dev/technologies',
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
    site: 'https://www.codebe.dev/technologies',
  },
}
