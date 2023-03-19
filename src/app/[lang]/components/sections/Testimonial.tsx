import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Button from '../elements/Button'
import { getHomeTestimonialsData } from '../../../../utils/ServiceData'

const Testimonial = ({
  className = '',
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  pushLeft = false,
  dictionary,
  ...props
}: SectionTilesProps) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={{
              title: getHomeTestimonialsData(dictionary).title,
              paragraph: getHomeTestimonialsData(dictionary).paragraph,
            }}
            className="center-content"
          />
          <div className={tilesClasses}>
            {getHomeTestimonialsData(dictionary).description.map((item, idx) => {
              const revealPosition = ['left', 'top', 'right']
              return (
                <div
                  key={item.title}
                  className={`tiles-item reveal-from-${revealPosition[idx]}`}
                  data-reveal-delay={150}
                >
                  <div className="tiles-item-inner">
                    <div className="testimonial-item-content">
                      <p className="text-sm mb-0">{item.paragraph}</p>
                    </div>
                    <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                      <span className="testimonial-item-name text-color-high">
                        {item.title}
                      </span>
                      <span className="text-color-low"> / </span>
                      <span className="testimonial-item-link">
                        <Button
                          tag="a"
                          target="_blank"
                          href={item.link}
                          rel="noreferrer"
                        >
                          {item.subTitle}
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
