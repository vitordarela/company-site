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
  serviceData,
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

  return (
    <section {...props} className={outerClasses}>
       
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
