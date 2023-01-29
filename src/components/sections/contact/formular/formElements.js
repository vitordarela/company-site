import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Input from '../../../elements/Input'
import Button from '../../../elements/Button'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const FormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must contain at least 3 character(s)' }),
  company: z
    .string()
    .min(3, { message: 'Company name must contain at least 3 character(s)' }),
  email: z.string().email({ message: 'Email is not valid.' }),
  phone: z.coerce
    .string()
    .regex(/^(?:([9][1236])|([2][1-9]))[0-9]{7}$/, {
      message: 'Telephone number is not valid.',
    })
    .max(9, {
      message: 'Telephone number is not valid.',
    }),
  description: z
    .string()
    .min(100, { message: 'Description must contain at least 100 character(s)' })
    .max(240, { message: 'Description must not exceed 240 character(s)' }),
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
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({ resolver: zodResolver(FormSchema), mode: 'onChange' })

  function handleSubmitForm(data) {
    reset()
    handleSubmitData(data)
  }

  return (
    data.sections && (
      <>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className={`split-item-content center-content-mobile reveal-from-left`}
                data-reveal-container=".split-item"
              >
                <h3 className="group-title text-xxs text-color-primary fw-600 tt-u">
                  {data.sections[0].title}
                </h3>

                <ul
                  className={`item-error ${
                    isDirty && !isValid ? 'item-error-visible' : null
                  }`}
                >
                  {errors?.name && <li>{errors.name?.message}</li>}
                  {errors?.company && <li>{errors.company?.message}</li>}
                </ul>

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
                <ul
                  className={`item-error ${
                    isDirty && !isValid ? 'item-error-visible' : null
                  }`}
                >
                  {errors?.email && <li>{errors.email?.message}</li>}
                  {errors?.phone && <li>{errors.phone?.message}</li>}
                </ul>

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

            <div className="split-item">
              <div
                className={`split-item-content center-content-mobile reveal-from-bottom`}
                data-reveal-container=".split-item"
              >
                <h3 className="group-title text-xxs text-color-primary fw-600 tt-u">
                  {data.sections[1].title}
                </h3>

                <ul
                  className={`item-error ${
                    isDirty && !isValid ? 'item-error-visible' : null
                  }`}
                >
                  {errors?.description && (
                    <li>{errors.description?.message}</li>
                  )}
                </ul>

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
