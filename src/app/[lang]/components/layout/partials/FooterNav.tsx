import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface FooterNavProps {
  className?: string
  dictionary?
}

const FooterNav = ({ className = '', dictionary, ...props }: FooterNavProps) => {
  const classes = classNames('footer-nav', className)

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link href="/contact">{dictionary.btn_contact}</Link>
        </li>
        <li>
          <Link href="/about-us">{dictionary.btn_about_us}</Link>
        </li>
        <li>
          <Link href="#0">{dictionary.btn_faq}</Link>
        </li>
        <li>
          <Link href="#0">{dictionary.btn_support}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default FooterNav
