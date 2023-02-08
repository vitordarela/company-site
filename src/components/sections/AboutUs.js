import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import SplitItem from './partials/SplitItem'

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const AboutUsComponent = ({
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
    title: 'About Us',
    paragraph: 'We are CodeBe, a software company specialized in developing customized solutions for our clients.',
  }

  const cloudList = [
    {
      title: '',
      subTitle: 'Who are We',
      paragraph:
        'CodeBe was born from a dream and passion for technology of three friends. Before founding the company, each of them worked for many years for large technology companies all over the world. After a lot of experience and learning, they decided to come together to make this dream of starting their own technology company a reality.<br><br> With a lot of dedication and passion, they founded CodeBe, a company specializing in custom software solutions for their clients. We believe that every business is unique and therefore every solution should be developed according to each client\'s specific needs..<br><br> In addition, we offer continuous support to our clients, ensuring that the developed solutions continue to function efficiently and are always up-to-date. <br><br> Our development team is highly qualified and experienced, and we work with the latest technologies and methodologies to ensure that our projects are delivered with quality and within the established deadline. In addition, we offer continuous support to our clients, ensuring that the developed solutions continue to function efficiently and are always up-to-date. <br><br> We are passionate about technology and believe it can transform the world around us. That is why we work tirelessly to provide high-quality custom solutions for our clients. We are eager to work with you and help you achieve your business goals with our software solutions. <br> <a href="/contact">Contact us</a>.',
      imageURL: require('../../assets/images/about-us.jpeg'),
    },
    {
      title: '',
      subTitle: 'Where are we',
      paragraph:
        '<b>Portugal</b> <br> Rua Pedra de Novaes, 203 <br> 4450-767 <br> Matosinhos - Porto <br><br> <b>France</b> <br> 7 Rue Georges Buffon <br> 78180 <br> Montigny-le-bretonneux',
      imageURL: require('../../assets/images/world-wide.png'),
    },
  ]

  return (
    <section {...props} className={outerClasses}>
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

AboutUsComponent.propTypes = propTypes
AboutUsComponent.defaultProps = defaultProps

export default AboutUsComponent
