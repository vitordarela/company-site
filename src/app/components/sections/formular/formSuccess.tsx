import React, { useEffect } from 'react'
import SectionHeader from '../partials/SectionHeader'
import Button from '../../elements/Button'
import Image from '../../elements/Image'
import { getModalHeader } from '../../../../utils/ServiceData'

interface FormSuccessProps {
  handleClose: () => void
}

const FormSuccess = ({ handleClose }: FormSuccessProps) => {
  
  useEffect(() => {
    window.gtag('event', 'conversion', { 'send_to': 'AW-11095834681/cCvPCPuYm44YELmA9Kop' });
  });

  return (
    getModalHeader && (
      <>
        <div className="center-content">
          <Image
            src={'/assets/images/check-icon.webp'}
            alt="Request Sent"
            width={100}
            height={100}
          />
        </div>
        <SectionHeader
          data={getModalHeader.success}
          className="center-content"
        />

        <Button tag="button" color="primary" wideMobile onClick={handleClose}>
          Close
        </Button>
      </>
    )
  )
}

export default FormSuccess
