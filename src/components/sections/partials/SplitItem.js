import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Image from '../../elements/Image'

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['div']),
}

const defaultProps = {
  children: null,
  tag: 'div',
}

const SplitItem = ({
  data,
  textRevealFrom = 'left',
  imageRevealFrom = 'bottom',
  imageFill,
}) => {
  return (
    <>
      {(data.title || data.subTitle || data.paragraph) && (
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
            <Image src={data.imageURL} alt={data.title} />
          </div>
        </div>
      )}
    </>
  )
}

SplitItem.propTypes = propTypes
SplitItem.defaultProps = defaultProps

export default SplitItem
