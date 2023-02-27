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

const TechnologiesSelected = ({
  tech,
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
        <meta name="description" content={ "CodeBe "+ tech.title +" Technology - " + tech.paragraph } key="description"/>
        <meta name="title" content={ "CodeBe - " + tech.title +" Technology" } key="title"/>

        <meta property="og:type" content="website" key="og:type"/>
        <meta property="og:title" content={ "CodeBe - " + tech.title +" Technology" } key="og:title"/>
        <meta property="og:description" content={ "CodeBe "+ tech.title +" Technology - " + tech.paragraph } key="og:description"/>
        <meta property="og:url" content={ "https://www.codebe.dev/technologies/" + tech.link } key="og:url"/>

        <meta property="twitter:title" content={ "CodeBe - " + tech.title +" Technology" } key="twitter:title"/>
        <meta property="twitter:description" content={ "CodeBe "+ tech.title +" Technology - " + tech.paragraph } key="twitter:description"/>
        <meta property="twitter:url" content={ "https://www.codebe.dev/technologies/" + tech.link } key="twitter:url"/>

        <title>CodeBe - { tech.title +" Technology" }</title>
      </Head>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={{ title: tech.title, paragraph: tech.paragraph }}
            className="center-content"
          />

          <div className={splitClasses}>
            {tech.description &&
              tech.description.map((techData, index) => (
                <SplitItem
                  key={index}
                  data={techData}
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

TechnologiesSelected.propTypes = propTypes
TechnologiesSelected.defaultProps = defaultProps

export default TechnologiesSelected
