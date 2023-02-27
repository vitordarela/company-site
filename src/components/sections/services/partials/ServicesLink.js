import React from 'react'
import Image from '../../../elements/Image'
import Link from 'next/link'

const ServicesLink = ({ service }) => {
  return service ? (
    <Link
      href={`/services/${service.link}`}
      className="tiles-item reveal-from-bottom"
    >
      <div className="tiles-item-inner">
        <div className="testimonial-item-content-tech">
          <Image src={service.imageURL} alt={service.title} />
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
          <span className="testimonial-item-name text-color-high">
            {service.title}
          </span>
        </div>
      </div>
    </Link>
  ) : null
}

export default ServicesLink
