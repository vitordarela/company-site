import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../../utils/SectionProps'
import SectionHeader from '../partials/SectionHeader'
import ServicesLink from './partials/ServicesLink'
import Head from "next/head";

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const ServicesList = ({
  serviceList,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

  const sectionHeader = {
    title: 'Services',
    paragraph:
      'Turning ideas into innovative tech solutions to drive your business success.',
  }

  return (
    <section {...props} className={outerClasses}>
       <Head>
        <meta name="description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } key="description"/>
        <meta name="title" content={ "CodeBe - " + sectionHeader.title +" - " + sectionHeader.paragraph } key="title"/>

        <meta property="og:type" content="website" key="og:type"/>
        <meta property="og:title" content={ "CodeBe - " + sectionHeader.title +" - " + sectionHeader.paragraph } key="og:title"/>
        <meta property="og:description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } key="og:description"/>
        <meta property="og:url" content={ "https://www.codebe.dev/services" } key="og:url"/>

        <meta property="twitter:title" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } key="twitter:title"/>
        <meta property="twitter:description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } key="twitter:description"/>
        <meta property="twitter:url" content={ "https://www.codebe.dev/services" } key="twitter:url"/>

        <title>CodeBe - { sectionHeader.title +" - " + sectionHeader.paragraph }</title>
      </Head>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {serviceList &&
              serviceList.map((service) => (
                <ServicesLink key={service.title} service={service} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

ServicesList.propTypes = propTypes
ServicesList.defaultProps = defaultProps

export default ServicesList
