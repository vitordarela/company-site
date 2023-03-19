import React, { ReactNode } from 'react'
import classNames from 'classnames'

interface FormHintProps {
  className?: string
  children: ReactNode
  status: string
}

const FormHint = ({
  children = null,
  className = '',
  status,
  ...props
}: FormHintProps) => {
  const classes = classNames(
    'form-hint',
    status && `text-color-${status}`,
    className,
  )

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}

export default FormHint
