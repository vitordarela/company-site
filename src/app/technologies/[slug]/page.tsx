import React from 'react'
import type { Metadata } from 'next'
import Features from '../../components/sections/Features'
import Cta from '../../components/sections/Cta'
import {
  DataFilteredProps,
  getDataFiltered,
  getTechData as data,
} from '../../../utils/ServiceData'

const TechnologiesSelected = ({ params: { slug } }: DataFilteredProps) => {
  const dataFiltered = getDataFiltered(data, slug)
  return (
    <>
      <Features dataFiltered={dataFiltered} />
      <Cta split />
    </>
  )
}

export default TechnologiesSelected

export function generateMetadata({
  params: { slug },
}: DataFilteredProps): Metadata {
  const dataFiltered = getDataFiltered(data, slug)

  return {
    title: 'CodeBe - ' + dataFiltered.title + ' - ' + dataFiltered.paragraph,
    description:
      'CodeBe - ' + dataFiltered.title + ' - ' + dataFiltered.paragraph,

    openGraph: {
      title: 'CodeBe - ' + dataFiltered.title + ' - ' + dataFiltered.paragraph,
      description:
        'CodeBe - ' + dataFiltered.title + ' - ' + dataFiltered.paragraph,
      url: `https://www.codebe.dev/services/${slug}`,
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
      title: 'CodeBe - ' + dataFiltered.title + ' - ' + dataFiltered.paragraph,
      description:
        'CodeBe - ' + dataFiltered.title + ' - ' + dataFiltered.paragraph,
      creator: '@codebe.dev',
      images: ['https://www.codebe.dev/logo.png'],
      site: `https://www.codebe.dev/services/${slug}`,
    },
  }
}
