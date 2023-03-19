import React, { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {
  className?: string
  children: ReactNode
  labelHidden?: boolean
  id: string
}

const FormLabel = ({
  className = '',
  children = null,
  labelHidden = false,
  id = null,
  ...props
}: FormLabelProps) => {
  const classes = classNames(
    'form-label',
    labelHidden && 'screen-reader',
    className,
  )

  return (
    <label {...props} className={classes} htmlFor={id}>
      {children}
    </label>
  )
}

export default FormLabel
