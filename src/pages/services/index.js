import React from 'react'
// import sections
import ServicesContent from '../../components/sections/services/Services'
import Cta from '../../components/sections/Cta'
import { getServerSideProps } from '../../utils/ServiceData'

const Technologies = ({ serviceData, serviceListData }) => {
  return (
    <>
      <ServicesContent  serviceData={serviceData} serviceList={serviceListData} topDivider />
      <Cta split />
    </>
  )
}
export { getServerSideProps };
export default Technologies
