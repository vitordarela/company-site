import React from 'react'
import classNames from 'classnames'
import SectionHeader from './partials/SectionHeader'
import SplitItem from './partials/SplitItem'
import { SectionSplitProps } from '../../../../utils/SectionProps'
import { ListDataProps } from '../../../../utils/ServiceData'

interface FeaturesSelectedProps extends SectionSplitProps {
  data: ListDataProps
}

const FeaturesSelected = ({
  data,
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
  ...props
}: FeaturesSelectedProps) => {
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
          <SectionHeader
            data={{ title: data.title, paragraph: data.paragraph }}
            className="center-content"
            dictionary={props.dictionary.section_header}
            selected
          />   
          <div className={splitClasses}>
            {data.description &&
              data.description.map((item, index) => (
                <SplitItem
                  key={index}
                  data={item}
                  imageFill={imageFill}
                  imageRevealFrom={index % 2 !== 0 ? 'left' : 'right'}
                  textRevealFrom={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSelected
