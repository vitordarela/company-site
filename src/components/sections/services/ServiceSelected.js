import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../../utils/SectionProps'
import SectionHeader from '../partials/SectionHeader'
import SplitItem from '../partials/SplitItem'
import Head from "next/head";

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const ServicesSelected = ({
  service,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top',
  )

  return (
    <section {...props} className={outerClasses}>
      <Head>
        <meta name="description" content={ "CodeBe "+ service.title +" Service - " + service.paragraph } />
        <meta name="title" content={ "CodeBe - " + service.title +" Service" } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ "CodeBe - " + service.title +" Service" } />
        <meta property="og:description" content={ "CodeBe "+ service.title +" Service - " + service.paragraph } />
        <meta property="og:url" content={ "https://www.codebe.dev/services/" + service.link } />

        <meta property="twitter:title" content={ "CodeBe - " + service.title +" Service" } />
        <meta property="twitter:description" content={ "CodeBe "+ service.title +" Service - " + service.paragraph } />
        <meta property="twitter:url" content={ "https://www.codebe.dev/services/" + service.link } />

        <title>CodeBe - { service.title +" Service" }</title>
      </Head>

      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={{ title: service.title, paragraph: service.paragraph }}
            className="center-content"
          />

          <div className={splitClasses}>
            {service.description &&
              service.description.map((serviceData, index) => (
                <SplitItem key={index}
                  data={serviceData}
                  imageFill={imageFill}
                  imageRevealFrom={index % 2 !== 0 ? 'top' : 'bottom'}
                  textRevealFrom={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
    
  )
}

ServicesSelected.propTypes = propTypes
ServicesSelected.defaultProps = defaultProps

export default ServicesSelected
