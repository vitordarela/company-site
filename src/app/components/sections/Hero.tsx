'use client'

import React, { useState } from 'react'
import classNames from 'classnames'
import { SectionSharedProps } from '../../../utils/SectionProps'
import ButtonGroup from '../elements/ButtonGroup'
import Button from '../elements/Button'
import Image from '../elements/Image'
import Modal from '../elements/Modal'
import { getHomeHeroHeader } from '../../../utils/ServiceData'

const Hero = ({
  className = '',
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  ...props
}: SectionSharedProps) => {
  const [videoModalActive, setVideoModalActive] = useState(false)

  const openModal = () => {
    setVideoModalActive(true)
  }

  const closeModal = () => {
    setVideoModalActive(false)
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-left" data-reveal-delay="150">
              {getHomeHeroHeader.title}{' '}
              <span className="text-color-primary">
                {getHomeHeroHeader.subTitle}
              </span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-right"
                data-reveal-delay="300"
              >
                {getHomeHeroHeader.paragraph}
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="450">
                <ButtonGroup>
                  <Button
                    className="button"
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/contact"
                  >
                    Talk with Us
                  </Button>
                  <Button
                    className="button"
                    tag="a"
                    color="dark"
                    wideMobile
                    href="/technologies"
                  >
                    See our skills
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-top illustration-element-01"
            data-reveal-delay="300"
          >
            <a
              data-video={'/assets/video/CodeBe.mp4'}
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={getHomeHeroHeader.imageURL}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video={getHomeHeroHeader.videoIFrame}
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
