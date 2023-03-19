import React from 'react'
import classNames from 'classnames'
import Img from '../../elements/Image'
import Button from '../../elements/Button'

interface LogoProps {
  className?: string
}

const Logo = ({ className, ...props }: LogoProps) => {
  const classes = classNames('brand', className)

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Button tag="a" href="/#">
          <Img
            src="/assets/images/logo.png"
            alt="Open"
            width={150}
            height={80}
          />
        </Button>
      </h1>
    </div>
  )
}

export default Logo
