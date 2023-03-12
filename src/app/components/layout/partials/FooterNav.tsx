import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface FooterNavProps {
  className?: string
}

const FooterNav = ({ className = '', ...props }: FooterNavProps) => {
  const classes = classNames('footer-nav', className)

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/about-us">About us</Link>
        </li>
        <li>
          <Link href="#0">FAQ&apos;s</Link>
        </li>
        <li>
          <Link href="#0">Support</Link>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNav
