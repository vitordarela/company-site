import React, { HTMLAttributes, HTMLInputTypeAttribute, ReactNode } from 'react'
import classNames from 'classnames'
import FormLabel from './FormLabel'
import FormHint from './FormHint'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id?: string
  register: UseFormRegister<FieldValues>
  className?: string
  children?: ReactNode
  label?: string
  labelHidden?: boolean
  type: HTMLInputTypeAttribute
  name?: string
  status?: string
  disabled?: boolean
  value?: string
  formGroup?: string
  hasIcon?: string
  size?: string
  placeholder?: string
  rows?: number
  hint?: string
  required?: boolean
  maxLength?: number
}

const Input = ({
  register = null,
  className = '',
  children = null,
  label = '',
  labelHidden = false,
  type = 'text',
  name = undefined,
  status = '',
  disabled = false,
  value = undefined,
  formGroup = null,
  hasIcon = null,
  size = '',
  placeholder = '',
  rows = 3,
  hint = null,
  required = null,
  maxLength,
  ...props
}: InputProps) => {
  const wrapperClasses = classNames(
    formGroup &&
      formGroup !== '' &&
      (formGroup === 'desktop' ? 'form-group-desktop' : 'form-group'),
    hasIcon && hasIcon !== '' && 'has-icon-' + hasIcon,
  )

  const classes = classNames(
    'form-input',
    size && `form-input-${size}`,
    status && `form-${status}`,
    className,
  )

  return (
    <>
      {label && (
        <FormLabel labelHidden={labelHidden} id={props.id}>
          {label}
        </FormLabel>
      )}
      <div className={wrapperClasses}>
        {type === 'textarea' ? (
          <textarea
            className={classes}
            name={!register ? name : null}
            {...(register ? register(name) : null)}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            rows={type === 'textarea' ? rows : null}
            required={required}
            maxLength={maxLength}
          />
        ) : (
          <input
            {...props}
            type={type !== 'textarea' ? type : null}
            className={classes}
            name={!register ? name : null}
            {...(register ? register(name) : null)}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            required={required}
            maxLength={maxLength}
          />
        )}

        {children}
      </div>
      {hint && <FormHint status={status}>{hint}</FormHint>}
    </>
  )
}

export default Input
