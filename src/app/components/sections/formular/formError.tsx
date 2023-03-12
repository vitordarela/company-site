import React from 'react'
import SectionHeader from '../partials/SectionHeader'
import Button from '../../elements/Button'
import Image from '../../elements/Image'
import { getModalHeader } from '../../../../utils/ServiceData'

interface FormErrorProps {
  handleClose: () => void
}

const FormError = ({ handleClose }: FormErrorProps) => {
  return (
    getModalHeader && (
      <>
        <div className="center-content">
          <Image
            src={'/assets/images/alert-icon.png'}
            alt="Request Sent"
            width={100}
            height={100}
          />
        </div>
        <SectionHeader data={getModalHeader.error} className="center-content" />

        <Button tag="button" color="primary" wideMobile onClick={handleClose}>
          Close
        </Button>
      </>
    )
  )
}

export default FormError
