import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/router' 
import { SectionProps } from '../../utils/SectionProps'
import Input from '../elements/Input'
import Image from '../elements/Image'
import { EmailjsSend } from '../../lib/emailjs'

const newsletterSchema = z.object({
  newsletterEmail: z.string().email({ message: 'Email is not valid.' }),
})

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split',
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newsletterSchema),
    mode: 'onChange',
  })

  const [emailStatus, setEmailStatus] = useState({
    isSending: false,
    isSentSuccess: false,
    isSentFailure: false,
  })

  const location = useRouter()

  async function handleFormSubmit(data) {
    setEmailStatus((prev) => ({ ...prev, isSending: true }))

    await EmailjsSend({
      email: data.newsletterEmail,
      description: location.pathname,
    }).then((response) => {
      setEmailStatus({
        isSentSuccess: response.isEmailSent,
        isSentFailure: !response.isEmailSent,
        isSending: false,
      })
      reset()
    })
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">
              Do you think we can help? Leave your email and we'll be in touch
              with you.
            </h3>
          </div>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="cta-action"
          >
            {errors?.newsletterEmail && (
              <span className="label-error">
                - {errors.newsletterEmail.message}
              </span>
            )}

            {emailStatus.isSentSuccess && !errors?.newsletterEmail && (
              <div className="label-error">
                <Image
                  src={'/assets/images/check-icon.webp'}
                  alt="Request Sent"
                  width={16}
                  height={16}
                />
                <span>Subscribed with success!</span>
              </div>
            )}

            {emailStatus.isSentFailure && !errors?.newsletterEmail && (
              <div className="label-error">
                <Image
                  src={'/assets/images/alert-icon.png'}
                  alt="Request Sent"
                  width={16}
                  height={16}
                />
                <span>Error to subscribe!</span>
              </div>
            )}

            <Input
              register={register}
              name="newsletterEmail"
              id="newsletter"
              type="email"
              label="Subscribe"
              labelHidden
              hasIcon="right"
              placeholder="Your best email"
              required
              disabled={emailStatus.isSending}
            >
              <button type="submit" disabled={emailStatus.isSending}>
                <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
                    fill="#376DF9"
                  />
                </svg>
              </button>
            </Input>
          </form>
        </div>
      </div>
    </section>
  )
}

Cta.propTypes = propTypes
Cta.defaultProps = defaultProps

export default Cta
