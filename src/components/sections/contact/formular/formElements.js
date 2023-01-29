import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Input from '../../../elements/Input'
import Button from '../../../elements/Button'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const FormSchema = z.object({
  name: z.string().min(3),
  company: z.string().min(3),
  email: z.string().email(),
  phone: z.coerce.string().min(9).max(9),
  description: z.string().min(100).max(200),
})

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['fieldset']),
}

const defaultProps = {
  children: null,
  tag: 'fieldset',
}

const FormElements = ({
  handleSubmitData,
  data,
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
  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top',
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(FormSchema), mode: 'onChange' })

  return (
    data && (
      <>
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <div className={splitClasses}>
            <div className="split-item-error">
              {errors.name?.message && <p>{errors.name?.message}</p>}
              {errors.company?.message && <p>{errors.company?.message}</p>}
              {errors.email?.message && <p>{errors.email?.message}</p>}
              {errors.phone?.message && <p>{errors.phone?.message}</p>}
            </div>

            <div className="split-item">
              <div
                className={`split-item-content center-content-mobile reveal-from-left`}
                data-reveal-container=".split-item"
              >
                <div className="group-title text-xxs text-color-primary fw-600 tt-u">
                  {data[0].title}
                </div>
                <Input
                  register={register}
                  name="name"
                  type="text"
                  label="Name"
                  labelHidden
                  placeholder="Name"
                  required
                />
                <Input
                  register={register}
                  name="company"
                  type="text"
                  label="Company"
                  labelHidden
                  placeholder="Company"
                  required
                />
              </div>

              <div
                className={`split-item-content center-content-mobile reveal-from-right`}
                data-reveal-container=".split-item"
              >
                <Input
                  register={register}
                  name="email"
                  type="text"
                  label="Email"
                  labelHidden
                  placeholder="Email"
                  required
                />
                <Input
                  register={register}
                  name="phone"
                  type="tel"
                  maxLength={9}
                  label="Phone"
                  labelHidden
                  placeholder="Phone"
                  required
                />
              </div>
            </div>

            <div className="split-item-error">
              {errors.description?.message && (
                <p>{errors.description?.message}</p>
              )}
            </div>

            <div className="split-item">
              <div
                className={`split-item-content center-content-mobile reveal-from-bottom`}
                data-reveal-container=".split-item"
              >
                <div className="group-title text-xxs text-color-primary fw-600 tt-u">
                  {data[1].title}
                </div>
                <Input
                  register={register}
                  name="description"
                  type="textarea"
                  label="Project Description"
                  labelHidden
                  placeholder="Give us a description of your project"
                  rows={6}
                  required
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className={`split-item-content split-item-content-right center-content-mobile reveal-from-top`}
                data-reveal-container=".split-item"
              >
                <Button type="submit" color="primary" wideMobile>
                  Send Request
                </Button>
              </div>
            </div>
          </div>
        </form>
      </>
    )
  )
}

FormElements.propTypes = propTypes
FormElements.defaultProps = defaultProps

export default FormElements
