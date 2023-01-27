import React from 'react'
import { useParams } from 'react-router-dom'

import { SectionTilesProps } from '../../../utils/SectionProps'
import TechnologiesSelected from './TechnologiesSelected'
import TechnologiesList from './TechnologiesList'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const TechnologiesContent = ({
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
  const techList = [
    {
      title: 'WSO2',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/wso2-logo.png'),
      link: 'wso2',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
    {
      title: 'Spring / Spring Boot',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/spring-logo.png'),
      link: 'spring',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
    {
      title: 'React / React Native',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/react-logo.png'),
      link: 'reactjs',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
    {
      title: '.NET Core / Framework',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/netcore-logo.png'),
      link: 'dotnet',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
    {
      title: 'Node.js',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/nodejs-logo.png'),
      link: 'nodejs',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
    {
      title: 'Vue.js',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/vue-js-logo.png'),
      link: 'vuejs',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
    {
      title: 'Angular',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/angular-logo.png'),
      link: 'angularjs',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
    {
      title: 'WordPress',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/wordpress-logo.png'),
      link: 'wordpress',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
    {
      title: 'Shopify',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: require('../../../assets/images/shopify-logo.png'),
      link: 'shopify',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: require('../../../assets/images/features-split-image-01.png'),
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: require('../../../assets/images/features-split-image-02.png'),
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: require('../../../assets/images/features-split-image-03.png'),
        },
      ],
    },
  ]

  const { tech } = useParams()
  const techData = techList.find((techItem) => techItem.link === tech)

  return techData ? (
    <TechnologiesSelected tech={techData} topDivider />
  ) : (
    <TechnologiesList techList={techList} topDivider />
  )
}

TechnologiesContent.propTypes = propTypes
TechnologiesContent.defaultProps = defaultProps

export default TechnologiesContent
