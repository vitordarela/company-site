import React, { ReactNode } from 'react'
import type { Metadata } from 'next'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Banner from './components/layout/partials/Banner'
import '../../../public/assets/scss/style.scss'
import Script from 'next/script';
import dynamic from "next/dynamic";
import { getDictionary } from '../../get-dictionary';

interface RootLayoutProps {
  children: ReactNode
  params: any
}

const ScrollRevealProvider = dynamic(
  () => {
    return import("../../utils/ScrollReveal");
  },
  { ssr: false }
);

export default async function RootLayout({ children, params: { lang } }: RootLayoutProps) {

  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=AW-11095834681`} />

        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_CODE}', {
            page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        <main className="site-content">
          <Header dictionary={dict.header} />
          <article>{children}</article>
          <Banner dictionary={dict.banner} />
          <Footer dictionary={dict.footer} />
        </main>
        <ScrollRevealProvider />
      </body>
    </html>
  )
}

export async function generateMetadata({ params: { lang } }): Promise<Metadata> {
  
  const dict = await getDictionary(lang);
  return {
    title:  dict.default_metatag.title ,
    description: dict.default_metatag.description,
    generator: 'CodeBe.dev',
    applicationName: 'CodeBe.dev',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'codebe',
      'code be',
      'software developer',
      'codebe.dev',
      'desenvolvimento',
      'wso2',
      'wso2 api manager',
      'criar ecommerce',
      'criar e-commerce',
      'e-commerce',
      'criar site',
      'site',
      'website',
      'web developer',
      'web dev',
    ],
    authors: [{ name: '@codebe.dev', url: 'https://www.codebe.dev/' }],
    creator: '@codebe.dev',
    publisher: '@codebe.dev',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    colorScheme: 'dark',
    themeColor: '#000000',
    manifest: '/manifest.json',
    openGraph: {
      title: dict.default_metatag.openGraph.title,
      description: dict.default_metatag.openGraph.description,
      url: 'https://www.codebe.dev',
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
    robots: {
      index: true,
      follow: true,
      nocache: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/logo.png',
      shortcut: '/favicon.ico',
      apple: '/logo.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/logo.png',
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.default_metatag.twitter.title,
      description: dict.default_metatag.twitter.description,
      creator: '@codebe.dev',
      images: ['https://www.codebe.dev/logo.png'],
      site: 'https://www.codebe.dev/',
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    }
  };
}
