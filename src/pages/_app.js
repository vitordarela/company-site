import React, { useRef, useEffect } from "react";
import '../../public/assets/scss/style.scss';
import { Helmet, HelmetProvider } from "react-helmet-async";
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

      <HelmetProvider>
        <Helmet>
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
            content="CodeBe. We create your idea. As Experts in areas such as Middleware, Software Development, E-commerce & Mobile, we are the reference partner for Consultancy and IT Services." />
          <meta name="title" content="CodeBe - Experts in Middleware, Software Development & Mobile" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="CodeBe - Experts in Middleware, Software Development &amp; Mobile" />
          <meta property="og:description"
            content="CodeBe. As Experts in areas such as Middleware, Software Development, E-commerce & Mobile, we are the reference partner for Consultancy and IT Services." />
          <meta property="og:url" content="https://www.codebe.dev/" />
          <meta property="og:site_name" content="CodeBe" />
          <meta property="og:image" content="https://www.codebe.dev/logo.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.codebe.dev/" />
          <meta property="twitter:title" content="CodeBe - Experts in Middleware, Software Development & Mobile" />
          <meta property="twitter:description"
            content="CodeBe. As Experts in areas such as Middleware, Software Development, E-commerce & Mobile, we are the reference partner for Consultancy and IT Services." />
          <meta property="twitter:image" content="https://www.codebe.dev/logo.png" />
          <title>CodeBe - Experts in Middleware, Software Development & Mobile</title>
        </Helmet>
            <LayoutDefault>
              <Component {...pageProps} />
            </LayoutDefault>
      </HelmetProvider>
    </StopHydrationWrapper>
  );
};

export default MyApp;