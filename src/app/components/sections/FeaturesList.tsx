import React from 'react'
import classNames from 'classnames'
import SectionHeader from './partials/SectionHeader'
import FeaturesItemLink from './partials/FeaturesItemLink'
import { SectionTilesProps } from '../../../utils/SectionProps'
import { ListDataProps, SectionHeaderProps } from '../../../utils/ServiceData'

interface FeaturesListProps extends SectionTilesProps {
  data: ListDataProps[]
  sectionHeader: SectionHeaderProps
}

const FeaturesList = ({
  data,
  sectionHeader,
  className = '',
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  pushLeft = false,
  ...props
}: FeaturesListProps) => {
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
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {data &&
              data.map((item, idx) => (
                <FeaturesItemLink
                  key={item.title}
                  data={item}
                  revealDelay={50 * idx}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesList
