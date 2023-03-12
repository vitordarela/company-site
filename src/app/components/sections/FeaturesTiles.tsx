import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import Img from '../elements/Image'
import { getHomeFeaturesData } from '../../../utils/ServiceData'

const FeaturesTiles = ({
  className = '',
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  pushLeft = false,
  ...props
}: SectionTilesProps) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left',
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={{
              title: getHomeFeaturesData.title,
              paragraph: getHomeFeaturesData.paragraph,
            }}
            className="center-content"
          />

          <div className={tilesClasses}>
            {getHomeFeaturesData.description.map((item, idx) => (
              <div
                key={item.title}
                className="tiles-item reveal-from-bottom"
                data-reveal-delay={150 * idx}
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Img
                        src={item.imageURL}
                        alt={item.title}
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">{item.title}</h4>
                    <p className="m-0 text-sm">{item.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesTiles
