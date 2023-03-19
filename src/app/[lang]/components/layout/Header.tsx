'use client'

import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import Logo from './partials/Logo'
import LocaleSwitcher from '../elements/LocaleSwitcher'

interface HeaderProps {
  navPosition?: string
  hideNav?: boolean
  hideSignIn?: boolean
  bottomOuterDivider?: boolean
  bottomDivider?: boolean
  dictionary?
}

const Header = ({
  navPosition = 'right',
  hideNav = false,
  hideSignIn = false,
  bottomOuterDivider = false,
  bottomDivider = false,
  dictionary,
  ...props
}: HeaderProps) => {
  const [isActive, setIsActive] = useState(false)

  const nav = useRef(null)
  const hamburger = useRef(null)

  useEffect(() => {
    isActive && openMenu()
    document.addEventListener('keydown', keyPress)
    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('keydown', keyPress)
      document.removeEventListener('click', clickOutside)
      closeMenu()
    }
  })

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active')
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px'
    setIsActive(true)
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active')
    nav.current && (nav.current.style.maxHeight = null)
    setIsActive(false)
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu()
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return
    closeMenu()
  }

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    'reveal-from-top',
  )

  return (
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider',
          )}
        >
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames('header-nav', isActive && 'is-active')}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`,
                    )}
                  >
                    <li>
                      <Link href="/services" onClick={closeMenu}>
                        {dictionary.btn_services}
                      </Link>
                    </li>
                    <li>
                      <Link href="/technologies" onClick={closeMenu}>
                        {dictionary.btn_technologies}
                      </Link>
                    </li>
                    <li>
                      <Link href="/cloud/servers" onClick={closeMenu}>
                        {dictionary.btn_cloud_servers}
                      </Link>
                    </li>
                  </ul>
                  {!hideSignIn && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Link
                          href="/contact"
                          className="button button-primary button-wide-mobile button-sm"
                          onClick={closeMenu}
                        >
                          {dictionary.btn_talk_with_us}
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
