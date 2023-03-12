'use client'

import React, { useState } from 'react'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { usePathname } from 'next/navigation'
import { SectionSharedProps } from '../../../utils/SectionProps'
import Input from '../elements/Input'
import Image from '../elements/Image'
import { EmailjsSend, EmailjsStatusProps } from '../../../lib/emailjs'

const newsletterSchema = z.object({
  newsletterEmail: z.string().email({ message: 'Email is not valid.' }),
})

type newsletterSchemaProps = z.infer<typeof newsletterSchema>

interface CtaProps extends SectionSharedProps {
  split: boolean
}

const Cta = ({
  className = '',
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  split = false,
  ...props
}: CtaProps) => {
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

  const [emailStatus, setEmailStatus] = useState<EmailjsStatusProps>({
    sending: false,
    success: false,
    failure: false,
    failureDescription: '',
  } as EmailjsStatusProps)

  const location = usePathname()

  async function handleFormSubmit(data: newsletterSchemaProps) {
    setEmailStatus((prev) => ({ ...prev, sending: true }))

    await EmailjsSend({
      from_email: data.newsletterEmail,
      from_description: location,
    }).then((response) => {
      setEmailStatus(response)
      reset()
      window.gtag('event', 'conversion', { 'send_to': 'AW-11095834681/cCvPCPuYm44YELmA9Kop' });
    })
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">
              Do you think we can help? Leave your email and we&apos;ll be in
              touch with you.
            </h3>
          </div>
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="cta-action"
          >
            {
              /*
              {errors?.newsletterEmail && ( 
                <span className="label-error">
                  - {errors.newsletterEmail.message}
                </span>
            )}
              */
            }

            {emailStatus.success && !errors?.newsletterEmail && (
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

            {emailStatus.failure && !errors?.newsletterEmail && (
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
              required={true}
              disabled={emailStatus.sending}
            >
              <button type="submit" disabled={emailStatus.sending}>
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

export default Cta
