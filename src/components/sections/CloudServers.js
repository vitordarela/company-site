import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'
import SplitItem from './partials/SplitItem'

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const CloudServersComponent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className,
  )

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  )

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top',
  )

  const sectionHeader = {
    title: 'Cloud Servers',
    paragraph: 'We are using the best cloud solution to support our projects.',
  }

  const cloudList = [
    {
      title: 'GPC GOOGLE CLOUD',
      subTitle: 'Acelere sua transformação digital',
      paragraph:
        'Uma nuvem de transformação acelera a transformação digital de uma organização pela democratização de dados, modernização de apps e infraestruturas, conexões pessoais e transações confiáveis. O resultado é uma organização cujos funcionários podem usufruir de todos os benefícios da computação em nuvem para impulsionar a inovação.',
      imageURL: require('../../assets/images/google-cloud-gpc.png'),
    },
    {
      title: 'VERCEL',
      subTitle: 'Plataforma Certa Para Desenvolvedores',
      paragraph:
        'O Vercel acelera o processo de criação, teste e implantação de páginas da Web compilando todo o código necessário em um único arquivo. Por sua vez, facilita o rastreamento de alterações, a depuração de erros e a garantia de um estilo consistente nas páginas.',
      imageURL: require('../../assets/images/vercel.png'),
    },

    {
      title: 'DigitalOcean',
      subTitle: 'Impulsione o crescimento dos negócios',
      paragraph:
        'As empresas crescem mais rapidamente quando os desenvolvedores podem criar na nuvem simples e acessível que adoram. A DigitalOcean tem os serviços de computação em nuvem de que você precisa, com preços previsíveis, documentação robusta e escalabilidade para dar suporte ao seu crescimento em qualquer estágio.',
      imageURL: require('../../assets/images/digital-ocean.png'),
    },
  ]

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            {cloudList &&
              cloudList.map((cloud, index) => (
                <SplitItem
                  key={cloud.title}
                  data={cloud}
                  imageFill={imageFill}
                  imageRevealFrom={index % 2 !== 0 ? 'top' : 'bottom'}
                  textRevealFrom={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

CloudServersComponent.propTypes = propTypes
CloudServersComponent.defaultProps = defaultProps

export default CloudServersComponent
