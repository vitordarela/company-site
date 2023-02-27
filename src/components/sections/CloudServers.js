import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import SplitItem from './partials/SplitItem'
import { Helmet } from "react-helmet-async";

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const CloudServersComponent = ({
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

  const sectionHeader = {
    title: 'Cloud Servers',
    paragraph: 'We are using the best cloud solutions to support our projects, utilizing multiple high performance cloud platforms to ensure our projects run smoothly and efficiently. This cloud solution is likely to be chosen based on the company\'s specific needs and requirements and provides the necessary features, scalability and reliability to support its projects.',
  }

  const cloudList = [
    {
      title: 'GOOGLE CLOUD PLATFORM',
      subTitle: 'ACCELERATE YOUR DIGITAL TRANSFORMATION',
      paragraph:
        'Google Cloud is a cloud computing platform offered by Google. It offers a wide variety of products and services including computing, storage, networking, and artificial intelligence. The platform also offers options for scalability, high availability, and security. In addition, Google Cloud has integrations with other Google tools and services such as Google Drive and Google Analytics.',
      imageURL: '/assets/images/google-cloud-gpc.png',
    },
    {
      title: 'DigitalOcean',
      subTitle: 'Drive business growth',
      paragraph:
        'DigitalOcean is another popular cloud platform. It primarily focuses on offering simple and easy-to-use virtual servers, called "droplets." It also offers storage, networking and other similar resources to those offered by Google Cloud. The main difference is that DigitalOcean is more simple and easy-to-use, while Google Cloud is more robust and scalable.',
      imageURL: '/assets/images/digital-ocean.png',
    },
    {
      title: 'VERCEL',
      subTitle: 'Right Platform for Developers',
      paragraph:
        'Vercel is another cloud platform option that is gaining popularity. It is a platform-as-a-service (PaaS) that is focused on web development and hosting. It offers a variety of features including automatic HTTPS, continuous deployment, and global CDN. It also offers a simple and easy-to-use interface for managing and deploying web projects. Vercel is a great choice for teams that are focused on web development and want a simple and fast way to deploy and host their projects. Vercel is also known for its fast and reliable hosting for static sites and Jamstack projects. It integrates well with other development tools and frameworks such as React, Vue, and Next.js making it a great choice for web development teams.',
      imageURL: '/assets/images/vercel.png',
    },
  ]

  return (
    <section {...props} className={outerClasses}>
       <Helmet>
        <meta name="description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } />
        <meta name="title" content={ "CodeBe - " + sectionHeader.title } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ "CodeBe - " + sectionHeader.title } />
        <meta property="og:description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } />
        <meta property="og:url" content={ "https://www.codebe.dev/cloud/servers" } />

        <meta property="twitter:title" content={ "CodeBe "+ sectionHeader.title } />
        <meta property="twitter:description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } />
        <meta property="twitter:url" content={ "https://www.codebe.dev/cloud/servers" } />

        <title>CodeBe - { sectionHeader.title }</title>
      </Helmet>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {cloudList &&
              cloudList.map((cloud, index) => (
                <SplitItem
                  key={cloud.title}
                  data={cloud}
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

CloudServersComponent.propTypes = propTypes
CloudServersComponent.defaultProps = defaultProps

export default CloudServersComponent
