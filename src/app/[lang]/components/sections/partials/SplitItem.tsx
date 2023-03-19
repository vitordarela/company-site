import React from 'react'
import classNames from 'classnames'
import { SectionHeaderProps } from '../../../../utils/ServiceData'
import Img from '../../elements/Image'
interface SplitItemProps {
  data: SectionHeaderProps
  textRevealFrom?: 'left' | 'top' | 'right' | 'bottom'
  imageRevealFrom?: 'left' | 'top' | 'right' | 'bottom'
  imageFill?: boolean
}

const SplitItem = ({
  data,
  textRevealFrom = 'left',
  imageRevealFrom = 'right',
  imageFill = false,
}: SplitItemProps) => {
  return (
    <>
      {data && (
        <div className="split-item">
          <div
            className={`split-item-content center-content-mobile reveal-from-${textRevealFrom}`}
            data-reveal-container=".split-item"
          >
            <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
              {data.subTitle}
            </div>
            <h3 className="mt-0 mb-12">{data.title}</h3>
            <div
              className="m-0"
              dangerouslySetInnerHTML={{ __html: data.paragraph }}
            />
          </div>
          <div
            className={classNames(
              `split-item-image center-content-mobile reveal-from-${imageRevealFrom}`,
              imageFill && 'split-item-image-fill',
            )}
            data-reveal-container=".split-item"
          >
            {data.videoIFrame != null && (
              <div
                className="m-0"
                dangerouslySetInnerHTML={{ __html: data.videoIFrame }}
              />
            )}
            {data.imageURL != null && (
              <Img
                src={data.imageURL}
                alt={data.title}
                width={500}
                height={500}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default SplitItem
