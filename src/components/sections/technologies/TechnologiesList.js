import classNames from 'classnames'
import { SectionTilesProps } from '../../../utils/SectionProps'
import SectionHeader from '../partials/SectionHeader'
import TechnologiesLink from './partials/TechnologiesLink'
import { Helmet } from "react-helmet-async";

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const TechnologiesList = ({
  techList,
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
    className,
  )

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

  const sectionHeader = {
    title: 'Technologies',
    paragraph:
      'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
  }

  return (
    <section {...props} className={outerClasses}>
      <Helmet>
        <meta name="description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } />
        <meta name="title" content={ "CodeBe - " + sectionHeader.title +" - " + sectionHeader.paragraph } />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={ "CodeBe - " + sectionHeader.title +" - " + sectionHeader.paragraph } />
        <meta property="og:description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } />
        <meta property="og:url" content={ "https://www.codebe.dev/technologies" } />

        <meta property="twitter:title" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } />
        <meta property="twitter:description" content={ "CodeBe "+ sectionHeader.title + " - " + sectionHeader.paragraph } />
        <meta property="twitter:url" content={ "https://www.codebe.dev/technologies" } />

        <title>CodeBe - { sectionHeader.title +" - " + sectionHeader.paragraph }</title>
      </Helmet>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {techList &&
              techList.map((tech) => (
                <TechnologiesLink key={tech.title} tech={tech} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

TechnologiesList.propTypes = propTypes
TechnologiesList.defaultProps = defaultProps

export default TechnologiesList
