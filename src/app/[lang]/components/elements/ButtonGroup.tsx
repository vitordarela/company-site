import React, { HtmlHTMLAttributes } from 'react'
import classNames from 'classnames'

interface ButtonGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {
  className?: string
}

const ButtonGroup = ({ className = '', ...props }: ButtonGroupProps) => {
  const classes = classNames('button-group', className)

  return <div {...props} className={classes} />
}

export default ButtonGroup
