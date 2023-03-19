import React, { useEffect } from 'react'
import SectionHeader from '../partials/SectionHeader'
import Button from '../../elements/Button'
import Image from '../../elements/Image'
import { getModalHeader } from '../../../../../utils/ServiceData'

interface FormSuccessProps {
  handleClose: () => void,
  dictionary?: any
}

const FormSuccess = ({ handleClose, dictionary }: FormSuccessProps) => {

  useEffect(() => {
    window.gtag('event', 'conversion', { 'send_to': 'AW-11095834681/cCvPCPuYm44YELmA9Kop' });
  });

  return (
    getModalHeader(dictionary) && (
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
          data={getModalHeader(dictionary).success}
          className="center-content"
        />

        <Button tag="button" color="primary" wideMobile onClick={handleClose}>
          {dictionary.btn_close_modal}
        </Button>
      </>
    )
  )
}

export default FormSuccess
