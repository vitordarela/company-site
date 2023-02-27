import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../../utils/SectionProps'
import SectionHeader from '../partials/SectionHeader'
import SplitItem from '../partials/SplitItem'
import { Helmet } from "react-helmet-async";

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
       <Helmet>
        <meta name="description" content={ "CodeBe "+ tech.title +" Technology - " + tech.paragraph } />
        <meta name="title" content={ "CodeBe - " + tech.title +" Technology" } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ "CodeBe - " + tech.title +" Technology" } />
        <meta property="og:description" content={ "CodeBe "+ tech.title +" Technology - " + tech.paragraph } />
        <meta property="og:url" content={ "https://www.codebe.dev/technologies/" + tech.link } />

        <meta property="twitter:title" content={ "CodeBe - " + tech.title +" Technology" } />
        <meta property="twitter:description" content={ "CodeBe "+ tech.title +" Technology - " + tech.paragraph } />
        <meta property="twitter:url" content={ "https://www.codebe.dev/technologies/" + tech.link } />

        <title>CodeBe - { tech.title +" Technology" }</title>
      </Helmet>
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
