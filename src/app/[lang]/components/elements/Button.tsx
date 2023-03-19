import React, {
  HTMLAttributeAnchorTarget,
  HTMLAttributes,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
  tag?: 'button' | 'a'
  color?: string
  size?: string
  loading?: boolean
  wide?: boolean
  wideMobile?: boolean
  disabled?: boolean
  href?: string
  hrefQueryName?: string
  hrefQueryValue?: string
  prefetch?: boolean
  replace?: boolean
  target?: HTMLAttributeAnchorTarget
  rel?: string
  children?: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  className = '',
  tag = 'button',
  color = '',
  size = '',
  loading = false,
  wide = false,
  wideMobile = false,
  disabled = false,
  href = '',
  prefetch = true,
  replace = false,
  hrefQueryName = null,
  hrefQueryValue = null,
  target = '_self',
  rel = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) => {
  const classes = classNames(
    color && `button-${color}`,
    size && `button-${size}`,
    loading && 'is-loading',
    wide && 'button-block',
    wideMobile && 'button-wide-mobile',
    className,
  )

  const hrefQuery = hrefQueryName
    ? { pathname: href, query: { hrefQueryName: hrefQueryValue } }
    : href

  return tag === 'button' ? (
    <button
      {...props}
      className={`button ${classes}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  ) : (
    <Link
      className={classes}
      href={hrefQuery}
      target={target}
      prefetch={prefetch}
      replace={replace}
      rel={rel}
    >
      {children}
    </Link>
  )
}

export default Button
