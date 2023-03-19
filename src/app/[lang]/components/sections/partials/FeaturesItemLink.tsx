import React from 'react'
import Link from 'next/link'
import { ListDataProps } from '../../../../../utils/ServiceData'
import Img from '../../elements/Image'
interface FeaturesItemLinkProps {
  data: ListDataProps
  revealDelay: number
}

const FeaturesItemLink = ({ data, revealDelay }: FeaturesItemLinkProps) => {
  return data ? (
    <Link
      href={data.link}
      className="tiles-item reveal-from-bottom"
      data-reveal-delay={revealDelay}
    >
      <div className="tiles-item-inner">
        <div className="testimonial-item-content-tech">
          <Img src={data.imageURL} alt={data.title} width={200} height={200} />
        </div>
        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
          <span className="testimonial-item-name text-color-high">
            {data.title}
          </span>
        </div>
      </div>
    </Link>
  ) : null
}

export default FeaturesItemLink
