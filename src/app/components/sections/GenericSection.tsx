import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../../utils/SectionProps'
import { SectionHeaderProps } from '../../../utils/ServiceData'
import SectionHeader from './partials/SectionHeader'
import SplitItem from './partials/SplitItem'

interface GenericSectionProps extends SectionSplitProps {
  sectionHeader: SectionHeaderProps
  data: SectionHeaderProps[]
}

const GenericSection = ({
  className = '',
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  invertMobile = false,
  invertDesktop = false,
  alignTop = false,
  imageFill = false,
  sectionHeader,
  data,
  ...props
}: GenericSectionProps) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top',
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {data &&
              data.map((item, idx) => (
                <SplitItem
                  key={idx}
                  data={item}
                  imageFill={imageFill}
                  imageRevealFrom={idx % 2 !== 0 ? 'left' : 'right'}
                  textRevealFrom={idx % 2 === 0 ? 'left' : 'right'}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GenericSection
