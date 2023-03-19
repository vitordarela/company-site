import React, { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import FormLabel from './FormLabel'
import FormHint from './FormHint'

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  className?: string
  children: ReactNode
  label?: string
  labelHidden?: boolean
  name: string
  status?: string
  disabled?: boolean
  value?: string
  size?: string
  placeholder?: string
  hint?: string
}

const Select = ({
  className = '',
  children,
  label = '',
  labelHidden = false,
  name,
  status = '',
  disabled = false,
  value = '',
  size = '',
  placeholder = '',
  hint = '',
  ...props
}: SelectProps) => {
  const classes = classNames(
    'form-select',
    size && `form-select-${size}`,
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
      <select
        {...props}
        className={classes}
        name={name}
        disabled={disabled}
        value={value}
      >
        {placeholder && (
          <option hidden value="">
            {placeholder}
          </option>
        )}
        {children}
      </select>
      {hint && <FormHint status={status}>{hint}</FormHint>}
    </>
  )
}

export default Select
