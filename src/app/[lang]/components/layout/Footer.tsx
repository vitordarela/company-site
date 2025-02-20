import React from 'react'
import classNames from 'classnames'
import Logo from './partials/Logo'
import FooterNav from './partials/FooterNav'
import FooterSocial from './partials/FooterSocial'
import Button from '../elements/Button'

interface FooterProps {
  className?: string
  topOuterDivider?: boolean
  topDivider?: boolean
  dictionary?
}

const Footer = ({
  className = '',
  topOuterDivider = false,
  topDivider = false,
  dictionary,
  ...props
}: FooterProps) => {
  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className,
  )

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider',
          )}
        >
          <div className="footer-top space-between text-xxs">
            <Logo />
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav dictionary={dictionary.footer_nav}/>
            <div className="footer-copyright">
              { dictionary.lbl_madeby }{' '}
              <Button tag="a" href="/#">
                CodeBe
              </Button>
              { dictionary.lbl_right_reserved }
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
