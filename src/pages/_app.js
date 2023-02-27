import React, { useRef, useEffect } from "react";
import '../../public/assets/scss/style.scss';
import Head from "next/head";
import ReactGA from 'react-ga'
import { useRouter } from 'next/router'  

// Layouts
import LayoutDefault from '../layouts/LayoutDefault'

const StopHydrationWrapper = ({ children }) => {
  return <div>{typeof window === "undefined" ? null : children}</div>;
};

// Initialize Google Analytics.
ReactGA.initialize(process.env.NEXT_PUBLIC_GA_CODE)

const trackPage = (page) => {
  ReactGA.set({ page })
  ReactGA.pageview(page)
}

const MyApp = ({ Component, pageProps }) => {
  
  const childRef = useRef()
  const location = useRouter()

  useEffect(() => {
    const page = location.pathname
    document.body.classList.add('is-loaded')
    childRef.current?.init()
    trackPage(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <StopHydrationWrapper>
        <Head>
          <meta charset="utf-8" />
          <link rel="shortcut icon" href="favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <link rel="apple-touch-icon" href="logo.png" />

          <link rel="manifest" href="manifest.json" />

          <meta name="keywords"
            content="codebe, code be, codebe.dev, software developer, desenvolvimento, wso2, wso2 api manager, wso2, criar ecommerce, criar e-commerce, e-commerce" />
          <meta name="description"
            key="description"
            content="CodeBe. We create your idea. As Experts in areas such as Middleware, Software Development, E-commerce & Mobile, we are the reference partner for Consultancy and IT Services." />
          <meta name="title" content="CodeBe - Experts in Middleware, Software Development & Mobile"  key="title"/>

          <meta property="og:type" content="website"  key="og:type"/>
          <meta property="og:title" content="CodeBe - Experts in Middleware, Software Development &amp; Mobile"  key="og:title"/>
          <meta property="og:description"
           key="og:description"
            content="CodeBe. As Experts in areas such as Middleware, Software Development, E-commerce & Mobile, we are the reference partner for Consultancy and IT Services." />
          <meta property="og:url" content="https://www.codebe.dev/"  key="og:url"/>
          <meta property="og:site_name" content="CodeBe"  key="og:site_name"/>
          <meta property="og:image" content="https://www.codebe.dev/logo.png"  key="og:image"/>

          <meta property="twitter:card" content="summary_large_image"  key="twitter:card"/>
          <meta property="twitter:url" content="https://www.codebe.dev/"  key="twitter:url"/>
          <meta property="twitter:title" content="CodeBe - Experts in Middleware, Software Development & Mobile"  key="twitter:title"/>
          <meta property="twitter:description"
            key="twitter:description"
            content="CodeBe. As Experts in areas such as Middleware, Software Development, E-commerce & Mobile, we are the reference partner for Consultancy and IT Services." />
          <meta property="twitter:image" content="https://www.codebe.dev/logo.png" key="twitter:image"/>
          <title>CodeBe - Experts in Middleware, Software Development & Mobile</title>
        </Head>
            <LayoutDefault>
              <Component {...pageProps} />
            </LayoutDefault>
    </StopHydrationWrapper>
  );
};

export default MyApp;