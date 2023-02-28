import React from 'react'
import { useRouter } from 'next/router'

import { SectionTilesProps } from '../../../utils/SectionProps'
import ServiceSelected from './ServiceSelected'
import ServicesList from './ServicesList'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const ServicesContent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  serviceData,
  serviceList,
  ...props
}) => {
  
  const serviceDataFiltered = serviceList?.find((serviceItem) => serviceItem.link === useRouter().query.service)

  return serviceDataFiltered ? (
    <ServiceSelected service={serviceDataFiltered} topDivider />
  ) : (
    <ServicesList serviceData={serviceData} serviceList={serviceList} topDivider />
  )
}

ServicesContent.propTypes = propTypes
ServicesContent.defaultProps = defaultProps

export default ServicesContent
