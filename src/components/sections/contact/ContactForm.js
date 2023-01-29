import React, { useState } from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../../utils/SectionProps'
import SectionHeader from '../partials/SectionHeader'
import FormElements from './formular/formElements'
import Modal from '../../elements/Modal'
import FormSuccess from './formular/formSuccess'

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

  const [formModalActive, setFormModalActive] = useState(false)

  const openModal = () => {
    setFormModalActive(true)
  }

  const closeModal = () => {
    setFormModalActive(false)
  }

  function handleSubmitDataToEmail(data) {
    console.log('name', data.name)
    console.log('company', data.company)
    console.log('email', data.email)
    console.log('phone', data.phone)
    console.log('description', data.description)

    if (data) {
      openModal()
    }
  }

  const sectionHeader = {
    title: 'Talk with us',
    paragraph:
      'We are always open to collaborations where we can all be a part of the same team. Ready to move forward?',
  }

  const formContent = {
    titles: ['Tell us about yourself', 'Tell us about your project'],
    paragraph: null,
  }

  const modalHeader = {
    title: 'Request sent',
    paragraph:
      'Your request was successfully sent! We will respond as quickly as possible.',
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <FormElements
            data={formContent}
            handleSubmitData={handleSubmitDataToEmail}
          />
          <Modal
            id="form-modal"
            show={formModalActive}
            handleClose={closeModal}
          >
            <FormSuccess data={modalHeader} handleClose={closeModal} />
          </Modal>
        </div>
      </div>
    </section>
  )
}

ContactFormComponent.propTypes = propTypes
ContactFormComponent.defaultProps = defaultProps

export default ContactFormComponent
