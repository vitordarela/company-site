import React from 'react'
import { useParams } from 'react-router-dom'
// import sections
import TechnologiesComponent from '../../components/sections/Technologies'
import Cta from '../../components/sections/Cta'
// import technologies views
import Wso2 from '../../components/sections/technologiesViews/Wso2'
import Wordpress from '../../components/sections/technologiesViews/Wordpress'
import Vue from '../../components/sections/technologiesViews/Vue'
import Spring from '../../components/sections/technologiesViews/Spring'
import Shopify from '../../components/sections/technologiesViews/Shopify'
import Reactjs from '../../components/sections/technologiesViews/React'
import Nodejs from '../../components/sections/technologiesViews/Node'
import Dotnet from '../../components/sections/technologiesViews/Dotnet'
import Angular from '../../components/sections/technologiesViews/Angular'

const Technologies = () => {
  const { tech } = useParams()

  if (tech === 'wso2') {
    return (
      <>
        <Wso2 />
        <Cta split />
      </>
    )
  }
  if (tech === 'wordpress') {
    return (
      <>
        <Wordpress />
        <Cta split />
      </>
    )
  }
  if (tech === 'vuejs') {
    return (
      <>
        <Vue />
        <Cta split />
      </>
    )
  }
  if (tech === 'spring') {
    return (
      <>
        <Spring />
        <Cta split />
      </>
    )
  }
  if (tech === 'shopify') {
    return (
      <>
        <Shopify />
        <Cta split />
      </>
    )
  }
  if (tech === 'reactjs') {
    return (
      <>
        <Reactjs />
        <Cta split />
      </>
    )
  }
  if (tech === 'nodejs') {
    return (
      <>
        <Nodejs />
        <Cta split />
      </>
    )
  }
  if (tech === 'dotnet') {
    return (
      <>
        <Dotnet />
        <Cta split />
      </>
    )
  }
  if (tech === 'angularjs') {
    return (
      <>
        <Angular />
        <Cta split />
      </>
    )
  }

  return (
    <>
      <TechnologiesComponent topDivider />
      <Cta split />
    </>
  )
}

export default Technologies
