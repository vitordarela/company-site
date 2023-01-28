import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../../utils/SectionProps'
import SectionHeader from '../partials/SectionHeader'
import FormElements from './formular/formElements'

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const ContactFormComponent = ({
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

  function handleSubmitDataToEmail(data) {
    console.log('name', data.name)
    console.log('company', data.company)
    console.log('email', data.email)
    console.log('phone', data.phone)
    console.log('description', data.description)
  }

  const sectionHeader = {
    title: 'Request a quote',
    paragraph:
      'We are always open to collaborations where we can all be a part of the same team. Ready to move forward?',
    sections: [
      {
        title: 'Tell us about yourself',
        paragraph: null,
      },
      {
        title: 'Tell us about your project',
        paragraph: null,
      },
    ],
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <FormElements
            data={sectionHeader.sections}
            handleSubmitData={handleSubmitDataToEmail}
          />
        </div>
      </div>
    </section>
  )
}

ContactFormComponent.propTypes = propTypes
ContactFormComponent.defaultProps = defaultProps

export default ContactFormComponent
