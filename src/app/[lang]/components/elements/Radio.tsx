import React, { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface RadioProps extends HTMLAttributes<HTMLInputElement> {
  className?: string
  children: ReactNode
  name: string
  value?: string
  disabled?: boolean
  checked?: boolean
}

const Radio = ({
  className = '',
  children,
  name = '',
  value = '',
  disabled = false,
  checked = false,
  ...props
}: RadioProps) => {
  const classes = classNames('form-radio', className)

  return (
    <label className={classes}>
      <input
        {...props}
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      {children}
    </label>
  )
}

export default Radio
