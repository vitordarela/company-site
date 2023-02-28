import React from 'react'
// import sections
import ServicesContent from '../../components/sections/services/Services'
import Cta from '../../components/sections/Cta'
import { getServerSideProps } from '../../utils/ServiceData'
import Head from "next/head";

const Technologies = ({ serviceData, serviceListData }) => {
  const sectionHeader = serviceData;
  return (
    <>
      <Head>
        <meta name="description" content={"CodeBe " + sectionHeader.title + " - " + sectionHeader.paragraph} key="description" />
        <meta name="title" content={"CodeBe - " + sectionHeader.title + " - " + sectionHeader.paragraph} key="title" />

        <meta property="og:type" content="website" key="og:type" />
        <meta property="og:title" content={"CodeBe - " + sectionHeader.title + " - " + sectionHeader.paragraph} key="og:title" />
        <meta property="og:description" content={"CodeBe " + sectionHeader.title + " - " + sectionHeader.paragraph} key="og:description" />
        <meta property="og:url" content={"https://www.codebe.dev/services"} key="og:url" />

        <meta property="twitter:title" content={"CodeBe " + sectionHeader.title + " - " + sectionHeader.paragraph} key="twitter:title" />
        <meta property="twitter:description" content={"CodeBe " + sectionHeader.title + " - " + sectionHeader.paragraph} key="twitter:description" />
        <meta property="twitter:url" content={"https://www.codebe.dev/services"} key="twitter:url" />

        <title>CodeBe - {sectionHeader.title + " - " + sectionHeader.paragraph}</title>
      </Head>
      <ServicesContent serviceData={serviceData} serviceList={serviceListData} topDivider />
      <Cta split />
    </>
  )
}
export { getServerSideProps };
export default Technologies
