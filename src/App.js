import React, { useRef, useEffect } from 'react'
import { useLocation, Switch, Redirect } from 'react-router-dom'
import AppRoute from './utils/AppRoute'
import ScrollReveal from './utils/ScrollReveal'
import ReactGA from 'react-ga'
import { Helmet, HelmetProvider } from "react-helmet-async";

// Layouts
import LayoutDefault from './layouts/LayoutDefault'

// Views
import Home from './views/Home'
import Technologies from './views/Technologies'
import CloudServers from './views/CloudServers'
import ContactForm from './views/ContactForm'
import AboutUs from './views/AboutUs'
import Services from './views/Services'

// Initialize Google Analytics.
ReactGA.initialize(process.env.REACT_APP_GA_CODE)

const trackPage = (page) => {
  ReactGA.set({ page })
  ReactGA.pageview(page)
}

const App = () => {
  const childRef = useRef()
  let location = useLocation()

  useEffect(() => {
    const page = location.pathname
    document.body.classList.add('is-loaded')
    childRef.current.init()
    trackPage(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="description" content="We create your idea. As Experts in areas such as Middleware, Software Development, E-commerce & Mobile, we are the reference partner for Consultancy and IT Services." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="CodeBe - Experts in Middleware, Software Development &amp; Mobile" />
        <meta property="og:description" content="As Experts in areas such as Middleware, Software Development, E-commerce & Mobile, we are the reference partner for Consultancy and IT Services." />
        <meta property="og:url" content="https://www.codebe.dev/" />
        <meta property="og:site_name" content="CodeBe" />
        <title>CodeBe - Experts in Middleware, Software Development & Mobile</title>
      </Helmet>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute
              exact
              path="/technologies"
              component={Technologies}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/technologies/:tech"
              component={Technologies}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/services"
              component={Services}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/services/:service"
              component={Services}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/cloud/servers"
              component={CloudServers}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/contact"
              component={ContactForm}
              layout={LayoutDefault}
            />
            <AppRoute
              exact
              path="/about-us"
              component={AboutUs}
              layout={LayoutDefault}
            />
            <Redirect to="/" />
          </Switch>
        )}
      />
    </HelmetProvider>
  )
}

export default App
