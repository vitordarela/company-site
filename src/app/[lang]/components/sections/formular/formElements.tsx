import React from 'react'
import classNames from 'classnames'
import Input from '../../elements/Input'
import Button from '../../elements/Button'
import { SectionSplitProps } from '../../../../../utils/SectionProps'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { EmailjsProps } from '../../../../../lib/emailjs'
import { getContactFormHeader } from '../../../../../utils/ServiceData'

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

type FormSchemaProps = z.infer<typeof FormSchema>

interface FormElementsProps extends SectionSplitProps {
  handleSubmitData: (data: EmailjsProps) => void
}

const FormElements = ({
  handleSubmitData,
  invertMobile = false,
  invertDesktop = false,
  alignTop = false,
  dictionary,
}: FormElementsProps) => {
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

  function handleSubmitForm(formData: FormSchemaProps) {
    reset()
    handleSubmitData({
      from_name: formData.name,
      from_company: formData.company,
      from_email: formData.email,
      from_phone: formData.phone,
      from_description: formData.description,
    })
  }

  return (
    getContactFormHeader(dictionary) && (
      <>
        <div className={splitClasses}>
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="split-item">
              <div
                className={`split-item-content center-content-mobile reveal-from-left`}
                data-reveal-container=".split-item"
              >
                <h3 className="group-title text-xxs text-color-primary fw-600 tt-u">
                  {getContactFormHeader(dictionary)[0].title}
                </h3>

                <ul
                  className={`item-error ${isDirty && !isValid ? 'item-error-visible' : null
                    }`}
                >
                  {errors?.name && <li>{errors.name?.message.toString()}</li>}
                  {errors?.company && (
                    <li>{errors.company?.message.toString()}</li>
                  )}
                </ul>

                <Input
                  register={register}
                  name="name"
                  type="text"
                  label={dictionary.lbl_name}
                  labelHidden
                  placeholder={dictionary.lbl_name}
                  required
                />
                <Input
                  register={register}
                  name="company"
                  type="text"
                  label={dictionary.lbl_company}
                  labelHidden
                  placeholder={dictionary.lbl_company}
                  required
                />
              </div>

              <div
                className={`split-item-content center-content-mobile reveal-from-right`}
                data-reveal-container=".split-item"
              >
                <ul
                  className={`item-error ${isDirty && !isValid ? 'item-error-visible' : null
                    }`}
                >
                  {errors?.email && <li>{errors.email?.message.toString()}</li>}
                  {errors?.phone && <li>{errors.phone?.message.toString()}</li>}
                </ul>

                <Input
                  register={register}
                  name="email"
                  type="text"
                  label={dictionary.lbl_email}
                  labelHidden
                  placeholder={dictionary.lbl_email}
                  required
                />
                <Input
                  register={register}
                  name="phone"
                  type="tel"
                  maxLength={9}
                  label={dictionary.lbl_phone}
                  labelHidden
                  placeholder={dictionary.lbl_phone}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className={`split-item-content center-content-mobile reveal-from-bottom`}
                data-reveal-container=".split-item"
              >
                <h3 className="group-title text-xxs text-color-primary fw-600 tt-u">
                  {getContactFormHeader(dictionary)[1].title}
                </h3>

                <ul
                  className={`item-error ${isDirty && !isValid ? 'item-error-visible' : null
                    }`}
                >
                  {errors?.description && (
                    <li>{errors.description?.message.toString()}</li>
                  )}
                </ul>

                <Input
                  register={register}
                  name="description"
                  type="textarea"
                  label={dictionary.lbl_project}
                  labelHidden
                  placeholder={dictionary.lbl_project_description}
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
                  {dictionary.btn_send_request}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </>
    )
  )
}

export default FormElements
