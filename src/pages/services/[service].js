import React from 'react'
// import sections
import ServicesContent from '../../components/sections/services/Services'
import Cta from '../../components/sections/Cta'
import { getServerSideProps } from '../../utils/ServiceData'

const Technologies = ({ serviceListData }) => {
  console.log("Log Inside Page", serviceListData)
  return (
    <>
      <ServicesContent topDivider serviceList={serviceListData} />
      <Cta split />
    </>
  )
}
export { getServerSideProps };

export default Technologies
