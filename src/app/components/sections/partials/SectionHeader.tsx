import React, { HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import Button from '../../elements/Button'
interface SectionHeaderProps extends HTMLAttributes<HTMLHeadElement> {
  selected?: Boolean
  className?: string
  children?: ReactNode
  tag?: 'h1' | 'h2' | 'h3'
  data: {
    title: string
    paragraph: string
  }
}

const SectionHeader = ({
  selected,
  className = '',
  data,
  children,
  tag = 'h2',
  ...props
}: SectionHeaderProps) => {
  const classes = classNames('section-header', className)

  const Component = tag

  return (
    <>
      {(data?.title || data?.paragraph) && (
        <div {...props} className={classes}>
          <div className="container-xs">
            {children}
            {data.title && (
              <Component
                className={classNames(
                  'mt-0',
                  data.paragraph ? 'mb-16' : 'mb-0',
                  'reveal-from-left',
                )}
              >
                {data.title}
              </Component>
            )}
            {data.paragraph && (
              <p className="m-0 reveal-from-right">{data.paragraph}</p>
            )}
            {selected && (
              <div className="reveal-from-bottom" style={{ paddingTop: '35px' }} data-reveal-delay="450">
                <Button
                  className="button"
                  tag="a"
                  color="primary"
                  wideMobile
                  href="/contact"
                >
                  Request a quote now
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default SectionHeader
