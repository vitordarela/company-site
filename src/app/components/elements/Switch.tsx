import React, { ReactNode } from 'react'
import classNames from 'classnames'

interface SwitchProps {
  className?: string
  children: ReactNode
  name: string
  value?: string
  rightLabel?: string
  disabled?: boolean
  checked?: boolean
}

const Switch = ({
  className = '',
  children,
  name = '',
  value = '',
  rightLabel = '',
  disabled = false,
  checked = false,
  ...props
}: SwitchProps) => {
  const classes = classNames('form-switch', className)

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
      <span className="form-switch-icon"></span>
      <span>{children}</span>
      {rightLabel && <span>{rightLabel}</span>}
    </label>
  )
}

export default Switch
