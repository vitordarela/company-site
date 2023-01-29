import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from '../../partials/SectionHeader'
import Button from '../../../elements/Button'
import Image from '../../../elements/Image'

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['div']),
}

const defaultProps = {
  children: null,
  tag: 'div',
}

const FormSuccess = ({ data, handleClose }) => {
  const handleCloseModal = (e) => {
    e.stopPropagation()
    handleClose()
  }

  return (
    data && (
      <>
        <div className="center-content">
          <Image
            src={require('./../../../../assets/images/check-icon.webp')}
            alt="Request Sent"
            width={100}
            height={100}
          />
        </div>
        <SectionHeader data={data} className="center-content" />

        <Button
          type="button"
          color="primary"
          wideMobile
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </>
    )
  )
}

FormSuccess.propTypes = propTypes
FormSuccess.defaultProps = defaultProps

export default FormSuccess
