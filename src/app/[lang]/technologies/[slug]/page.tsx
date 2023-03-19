import React from 'react'
import type { Metadata } from 'next'
import Features from '../../components/sections/Features'
import Cta from '../../components/sections/Cta'
import {
  DataFilteredProps,
  getDataFiltered,
  getTechData,
} from '../../../../utils/ServiceData'
import { getDictionary } from '../../../../get-dictionary';


async function TechnologiesSelected({ params: { slug, lang } }: DataFilteredProps) {

  const dict = await getDictionary(lang);
  const data = getTechData(dict.tech_data);
  const dataFiltered = getDataFiltered(data, slug)

  return (
    <>
      <Features dictionary={dict} dataFiltered={dataFiltered} />
      <Cta dictionary={dict.cta} split />
    </>
  )
}

export default TechnologiesSelected

export async function generateMetadata({ params: { slug, lang } }): Promise<Metadata> {
  
  const dict = await getDictionary(lang);
  const data = getTechData(dict.tech_data);
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

