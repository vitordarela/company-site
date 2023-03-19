'use client'

import React, { useState } from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import FormElements from './formular/formElements'
import Modal from '../elements/Modal'
import FormSuccess from './formular/formSuccess'
import FormError from './formular/formError'
import Img from '../elements/Image'
import {
  EmailjsProps,
  EmailjsSend,
  EmailjsStatusProps,
} from '../../../../lib/emailjs'
import { SectionHeaderProps } from '../../../../utils/ServiceData'

interface ContactFormProps extends SectionSplitProps {
  sectionHeader: SectionHeaderProps
}

const ContactForm = ({
  sectionHeader,
  className = '',
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  ...props
}: ContactFormProps) => {
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

  const [emailStatus, setEmailStatus] = useState<EmailjsStatusProps>({
    sending: false,
    success: false,
    failure: false,
    failureDescription: null,
  } as EmailjsStatusProps)
  const [formModalActive, setFormModalActive] = useState(false)

  const openModal = () => {
    setFormModalActive(true)
  }

  const closeModal = () => {
    setFormModalActive(false)
  }

  async function handleSubmitDataToEmail(data: EmailjsProps) {
    if (data) {
      setEmailStatus({
        sending: true,
        success: false,
        failure: false,
        failureDescription: null,
      })
      openModal()
      await EmailjsSend(data).then((response) => {
        setEmailStatus(response)
      })
    }
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <FormElements dictionary={props.dictionary} handleSubmitData={handleSubmitDataToEmail} />
          <Modal
            id="form-modal"
            show={formModalActive}
            handleClose={closeModal}
          >
            {emailStatus.sending && (
              <div className="center-content">
                <Img
                  src={'/assets/images/loading.gif'}
                  alt="Request Sent"
                  width={100}
                  height={100}
                />
              </div>
            )}
            {emailStatus.success && <FormSuccess dictionary={props.dictionary} handleClose={closeModal} />}
            {emailStatus.failure && <FormError dictionary={props.dictionary} handleClose={closeModal} />}
          </Modal>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
