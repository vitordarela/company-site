import React from 'react'
import type { Metadata } from 'next'
import { getContactHeader } from '../../../utils/ServiceData'
import ContactForm from '../components/sections/ContactForm'
import { getDictionary } from '../../../get-dictionary';

async function Contact({ params: { lang } }) {

  const dict = await getDictionary(lang);
  const sectionHeader = getContactHeader(dict.contact_header);

  return (
    <>
      <ContactForm
        sectionHeader={sectionHeader}
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
        dictionary={dict.contact_form}
      />
    </>
  )
}

export default Contact

export async function generateMetadata({ params: { lang } }): Promise<Metadata> {

  const dict = await getDictionary(lang);
  const sectionHeader = getContactHeader(dict.contact_header);

  return {
    title: 'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
    description:
      'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,

    openGraph: {
      title: 'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
      description:
        'CodeBe - ' + sectionHeader.title + ' - ' + sectionHeader.paragraph,
      url: 'https://www.codebe.dev/contact',
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
      site: 'https://www.codebe.dev/contact',
    },
  }
}
