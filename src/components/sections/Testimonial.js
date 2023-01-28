import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'We have received positive feedback from our customers and partners who have trusted and relied on our work.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — We at Margot Jewels couldn't be happier with the e-commerce development service provided by CodeBe. Their team was incredibly professional and knowledgeable, guiding us through every step of the process. The final result exceeded our expectations and has greatly improved our online sales. We highly recommend CodeBe to anyone looking to develop or improve their e-commerce platform.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Amanda Darela</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a target="_blank" href="https://margotjewels.com/">Margot Jewels</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — CodeBe was the perfect choice for Pajé Snoods when it came to developing our e-commerce platform. Their team was responsive and easy to work with, and they took the time to understand our specific needs. The end result was a beautiful and functional online store.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Carolina Cortez</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a target="_blank" href="https://pajesnoods.com/">Pajé Snoods</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — We had a great experience working with CodeBe on integrating a new payment gateway for our e-commerce platform. They understood our needs and provided us with a seamless solution. The integration process was smooth and we could start accepting payments in no time. The team at CodeBe is knowledgeable and professional.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Gabriela Holthausen</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a target="_blank" href="#0">Payment Gateway for online store</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;