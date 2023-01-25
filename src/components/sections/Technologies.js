import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { useHistory } from 'react-router-dom';

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
    title: 'Technologies',
    paragraph: 'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.'
  };

  const history = useHistory();
  const handleClickWso2 = () => history.push('/technologies/wso2');

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

          <div onClick={handleClickWso2} className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  src={require('./../../assets/images/wso2-logo.png')}
                  alt="WSO2 Tecnology"
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">WSO2</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  style={{paddingTop: 35, alignSelf: 'flex-start'}}
                  src={require('./../../assets/images/spring-logo.png')}
                  alt="Spring tecnology "
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Spring / Spring Boot</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  style={{paddingTop: 10, alignSelf: 'flex-start'}}
                  src={require('./../../assets/images/react-logo.png')}
                  alt="React Tecnology"
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">React / React Native</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  style={{paddingTop: 10, alignSelf: 'flex-start'}}
                  src={require('./../../assets/images/netcore-logo.png')}
                  alt=".NET Core/Framework"
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">.NET Core / Framework</span>
                </div>
              </div>
            </div>

            
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  style={{paddingTop: 10, alignSelf: 'flex-start'}}
                  src={require('./../../assets/images/nodejs-logo.png')}
                  alt="Node.js"
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Node.js</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  style={{paddingTop: 50, alignSelf: 'flex-start'}}
                  src={require('./../../assets/images/vue-js-logo.png')}
                  alt="Vue JS"
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Vue.js</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  style={{paddingTop: 50, alignSelf: 'flex-start'}}
                  src={require('./../../assets/images/angular-logo.png')}
                  alt="Angular"
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Angular</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  style={{paddingTop: 10, alignSelf: 'flex-start'}}
                  src={require('./../../assets/images/wordpress-logo.png')}
                  alt="WordPress"
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">WordPress</span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content-tech">
                  <p className="text-sm mb-0">
                  <Image
                  style={{paddingTop: 10, alignSelf: 'flex-start'}}
                  src={require('./../../assets/images/shopify-logo.png')}
                  alt="Shopify"
                  width={528}
                  height={396} />
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Shopify</span>
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