import React from 'react'
import Image from '../../../elements/Image'
import Link from 'next/link'

const TechnologiesLink = ({ tech }) => {
  return tech ? (
    <Link
      href={`/technologies/${tech.link}`}
      className="tiles-item reveal-from-bottom"
    >
      <div className="tiles-item-inner">
        <div className="testimonial-item-content-tech">
          <Image src={tech.imageURL} alt={tech.title} />
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
          <span className="testimonial-item-name text-color-high">
            {tech.title}
          </span>
        </div>
      </div>
    </Link>
  ) : null
}

export default TechnologiesLink
