import React, { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  className?: string
  children: ReactNode
  name: string
  value?: string
  disabled?: boolean
  checked?: boolean
}

const Checkbox = ({
  className = '',
  children,
  name = '',
  value = '',
  disabled = false,
  checked = false,
  ...props
}: CheckboxProps) => {
  const classes = classNames('form-checkbox', className)

  return (
    <label className={classes}>
      <input
        {...props}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      {children}
    </label>
  )
}

export default Checkbox
