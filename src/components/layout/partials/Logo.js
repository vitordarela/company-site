import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link href="/">
          <Image
            src={'/assets/images/logo.png'}
            alt="Open"
            width={150}
            height={80} />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;