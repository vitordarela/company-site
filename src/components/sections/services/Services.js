import React from 'react'
import { useRouter } from 'next/router'

import { SectionTilesProps } from '../../../utils/SectionProps'
import ServiceSelected from './ServiceSelected'
import ServicesList from './ServicesList'

const propTypes = {
  ...SectionTilesProps.types,
}

const defaultProps = {
  ...SectionTilesProps.defaults,
}

const ServicesContent = ({
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
  const serviceList = [
    {
      title: 'WSO2 Middleware Platform',
      paragraph: 'WSO2 is a leading open source platform for building, integrating, and managing APIs, applications, and microservices. With its flexible architecture and comprehensive set of integrated tools, WSO2 helps organizations drive digital transformation by delivering seamless and secure experiences to customers, partners, and employees.',
      imageURL: '/assets/images/wso2-logo.png',
      link: 'wso2',
      description: [

        {
          title: 'Installation and Configuration',
          subTitle: 'HOW CAN WE HELP?',
          paragraph:
            'Our team is prepared to help you connect your applications and set up your middleware architecture with the open-source WSO2 platform.',
          imageURL: '/assets/images/wso2/apim-rest.gif',
        },
        {
          subTitle: null,
          title: 'Platform',
          paragraph:
            'WSO2 provides a series of tools and solutions to help companies manage and implement APIs, integrate applications and data, and provide security and compliance for digital operations. The tool is widely used in corporate IT environments to help connect systems and enable collaboration between different departments and systems.',
          imageURL: '/assets/images/wso2/wso2-first-image.svg',
        },
        {
          subTitle: 'WSO2 PRODUCTS',
          title: 'The entire middleware stack',
          paragraph:
            '<b>WSO2 API Manager:</b> API management platform. <br/> <b>WSO2 Micro Integrator:</b> Application integration platform <br/> <b>WSO2 Identity Server:</b> Identity management platform.',
          imageURL: '/assets/images/wso2/microservices-integration.gif',
        },
        {
          title: 'WSO2 API Manager',
          subTitle: 'WSO2',
          paragraph:
          'WSO2 API Manager is a comprehensive solution for managing APIs throughout their lifecycle. With features such as API creation, publishing, management, and monetization, the WSO2 API Manager streamlines the process of developing and delivering secure and scalable APIs.',
          imageURL: null,
          videoIFrame: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nr1cFyxVdDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
          subTitle: 'Capabilities',
          title: 'Easily and securely expose APIs to both internal and external consumers.',
          paragraph:
            'Implement industry-standard authorization flows — such as OAuth, OpenID Connect, and JWTs — out of the box and integrate with your existing identity access or key management tools.',
          imageURL: '/assets/images/wso2/apim-capabilities.gif',
        },
        {
          subTitle: null,
          title: 'Enable design and runtime governance for the entire lifecycle of your APIs.',
          paragraph:
            'Build APIs from existing services, manage APIs from internally built applications and from third-party providers, and monitor their usage and performance from inception to retirement.',
          imageURL: '/assets/images/wso2/apim-governance.gif',
        },
        {
          subTitle: null,
          title: 'Get business insights and intelligence through APIs.',
          paragraph:
            'Provide real-time access to API usage and performance statistics to decision-makers to optimize your developer support, continuously improve your services, and drive further adoption to reach your business goals.',
          imageURL: '/assets/images/wso2/apim-insights.gif',
        },
        {
          subTitle: null,
          title: 'Flexible deployment models adapt to your infrastructure while keeping service discovery seamless for developers.',
          paragraph:
            'Deploy in the cloud, in your private data centers, or anywhere in between while cataloging your services in a single location to make it easy for your developers to find what they need to efficiently build their applications.',
          imageURL: '/assets/images/wso2/apim-flexible.gif',
        },
        {
          subTitle: null,
          title: 'Support modern services including REST, GraphQL, and Async API, and integrate your API workflows with your CI/CD pipeline.',
          paragraph:
            'Strategically adopt modern service delivery and development paradigms without leaving behind the legacy systems that made you successful in the first place.',
          imageURL: '/assets/images/wso2/apim-modern-services.gif',
        },
        {
          subTitle: null,
          title: 'Advanced integration support.',
          paragraph:
            'The integration runtime supports creating composite microservices, service, and API hosting needs, message routing, transformation, message mediation, service orchestration, as well as consuming and processing streaming data.',
          imageURL: '/assets/images/wso2/apim-integration-support.gif',
        },
        {
          subTitle: null,
          title: 'Powerful Graphical / CLI tooling.',
          paragraph: 'Complete API development support with API publisher. Visually design, develop, debug, test, and deploy integration flows with Integration Studio. Complete set of commands to manage API gateway and micro integrator runtimes with API controller (CLI) tool',
          imageURL: '/assets/images/wso2/apim-tooling.gif',
        },
      ],
    },
    {
      title: 'E-commerce',
      paragraph: 'Turn your online presence into profits: Custom solutions for your e-commerce store.',
      imageURL: '/assets/images/ecommerce.png',
      link: 'ecommerce',
      description: [
        {
          title: '',
          subTitle: 'The Power of an e-commerce',
          paragraph:
            'With the growth of the internet and the increased demand for online shopping, creating an E-commerce platform has become essential for the success of any business. In the current digital era, having a strong online presence is crucial in reaching new customers and increasing profits.',
          imageURL: '/assets/images/services/e-commerce-tab1.png',
        },
        {
          subTitle: 'SOLUTIONS',
          title: 'How we can help',
          paragraph:
            'As a software company, we offer complete solutions for creating E-commerce platforms for all types of businesses, from large companies to small shops. We use the latest technologies to ensure our clients have a modern and functional E-commerce platform.',
          imageURL: '/assets/images/services/ecommerce-solutions.png',
        },
        {
          subTitle: 'technology',
          title: 'Why is it a good choice to work with us',
          paragraph:
            'Our team of technology experts works tirelessly to ensure our clients have the best possible user experience. We use technologies such as HTML5, CSS3, JavaScript and frameworks like React and Angular to create fast and responsive E-commerce platforms. Furthermore, we use content management platforms like Shopify to ensure our clients have an intuitive and user-friendly administration panel.',
          imageURL: '/assets/images/services/ecommerce-dev.png',
        },
        {
          subTitle: 'technology',
          title: 'Shopify',
          paragraph:
            'Shopify is a complete and user-friendly E-commerce platform. It\'s a great option for businesses of all sizes, from small shops to large companies. Shopify offers a wide variety of customizable design templates, advanced security features, integrations with external apps and services, as well as support for various payment options and shipping methods. With Shopify, you can manage your online store, add products, process payments, and track statistics in an easy and intuitive way.',
          imageURL: '/assets/images/services/ecommerce-shopify.png',
        },
        {
          subTitle: 'CUSTOMIZATION',
          title: 'We create your e-commerce in a customized way',
          paragraph:
            'We offer custom E-commerce templates to meet the unique needs of each client. Whether you\'re a small local shop looking to expand your online presence or a large company looking to optimize your sales, we have the right solution for you. Our templates are designed to be flexible and scalable, so you can keep up with the growth of your business.',
          imageURL: '/assets/images/services/ecommerce-custom.png',
        },
        {
          subTitle: 'Support',
          title: 'Our support is continuous, we work with the best cloud solutions on the market.',
          paragraph:
            'In addition to offering high-quality E-commerce solutions, we also offer continuous support and regular updates to ensure your platform is always functioning in the most efficient way possible. Our support team is always available to help you with any problems or questions that may arise. if you\'re looking for a reliable and efficient E-commerce solution, we have what you need. Contact us today for more information and start expanding your online business.',
          imageURL: '/assets/images/services/ecommerce-support.png',
        },
      ],
    },
    {
      title: 'Mobile App',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/mobileapp2.png',
      link: '',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: '/assets/images/features-split-image-01.png',
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: '/assets/images/features-split-image-02.png',
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: '/assets/images/features-split-image-03.png',
        },
      ],
    },
    {
      title: 'Custom Software Development',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/software-development.png',
      link: '',
      description: [
        {
          title: 'Instalação e Configuração',
          subTitle: 'COMO PODES AJUDAR?',
          paragraph:
            'Nosso time está preparado para ajudar você a conectar suas aplicações e montar sua arquitetura de middleware com a plataforma de código aberto WSO2.',
          imageURL: '/assets/images/features-split-image-01.png',
        },
        {
          subTitle: null,
          title: 'Plataforma',
          paragraph:
            'A WSO2 fornece uma série de ferramentas e soluções para ajudar as empresas a gerenciar e implementar APIs, integrar aplicativos e dados, e fornecer segurança e conformidade para operações digitais. A ferramenta é amplamente utilizada em ambientes de TI corporativos para ajudar a conectar sistemas e permitir a colaboração entre diferentes departamentos e sistemas.',
          imageURL: '/assets/images/features-split-image-02.png',
        },
        {
          subTitle: 'PRODUTOS WSO2',
          title: 'Toda a stack de middleware',
          paragraph:
            'WSO2 API Manager: Plataforma de gerenciamento de API. <br/> WSO2 Enterprise Integrator: Plataforma de integração de aplicativos <br/> WSO2 Identity Server: Plataforma de gerenciamento de identidade.',
          imageURL: '/assets/images/features-split-image-03.png',
        },
      ],
    }
  ]

  const serviceData = serviceList.find((serviceItem) => serviceItem.link === useRouter().query.service)

  return serviceData ? (
    <ServiceSelected service={serviceData} topDivider />
  ) : (
    <ServicesList serviceList={serviceList} topDivider />
  )
}

ServicesContent.propTypes = propTypes
ServicesContent.defaultProps = defaultProps

export default ServicesContent
