import React, { useState } from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../../utils/SectionProps'
import SectionHeader from '../partials/SectionHeader'
import FormElements from './formular/formElements'
import Modal from '../../elements/Modal'
import FormSuccess from './formular/formSuccess'
import FormError from './formular/formError'
import { EmailjsSend } from '../../../lib/emailjs'
import Image from '../../elements/Image'

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

  const [isSending, setIsSending] = useState(false)
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [formModalActive, setFormModalActive] = useState(false)

  const openModal = () => {
    setFormModalActive(true)
  }

  const closeModal = () => {
    setFormModalActive(false)
  }

  async function handleSubmitDataToEmail(data) {
    if (data) {
      setIsSending(true)
      openModal()
      await EmailjsSend(data).then((response) => {
        setIsSending(false)
        setIsEmailSent(response.isEmailSent)
      })
    }
  }

  const sectionHeader = {
    title: 'Request a quote',
    paragraph:
      'We are always open to collaborations where we can all be a part of the same team. Ready to move forward?',
  }

  const formContent = {
    titles: ['Tell us about yourself', 'Tell us about your project'],
    paragraph: null,
  }

  const modalHeader = {
    success: {
      title: 'Request sent',
      paragraph:
        'Your request was successfully sent! We will respond as quickly as possible.',
    },

    error: {
      title: 'Request error',
      paragraph:
        'Your request was not sent. An error occurred while sending the request. Please, try again later.',
    },
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
            {isSending ? (
              <div className="center-content">
                <Image
                  src={require('../../../assets/images/loading.gif')}
                  alt="Request Sent"
                  width={100}
                  height={100}
                />
              </div>
            ) : isEmailSent ? (
              <FormSuccess
                data={modalHeader.success}
                handleClose={closeModal}
              />
            ) : (
              <FormError data={modalHeader.error} handleClose={closeModal} />
            )}
          </Modal>
        </div>
      </div>
    </section>
  )
}

ContactFormComponent.propTypes = propTypes
ContactFormComponent.defaultProps = defaultProps

export default ContactFormComponent
