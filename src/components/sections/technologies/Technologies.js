import { useRouter } from 'next/router'

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
  tech,
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
      title: 'Spring / Spring Boot',
      paragraph: 'Spring and Spring Boot are popular Java frameworks that are widely used in developing enterprise applications.',
      imageURL: '/assets/images/spring-logo.png',
      link: 'spring',
      description: [
        {
          title: 'What is Spring?',
          subTitle: 'SPRING',
          paragraph:
            'Spring is a lightweight framework that is used to develop enterprise applications, it provides a comprehensive infrastructure support for developing Java applications. It provides a lot of features such as support for dependency injection, a modular architecture, and the ability to integrate with other technologies.',
          imageURL: '/assets/images/spring/why-spring.svg',
        },
        {
          subTitle: 'SPRING BOOT',
          title: 'What is Spring Boot?',
          paragraph:
            'Spring Boot is a convention-over-configuration framework that builds on top of Spring. It makes it easy to create stand-alone, production-grade Spring applications by providing a set of tools and libraries that simplify common tasks. Spring Boot provides features such as auto-configuration, the ability to run as a standalone application, and a command-line interface.',
          imageURL: '/assets/images/spring/microservices-boot.svg',
        },
        {
          subTitle: 'BENEFITS',
          title: 'Why is it a good choice to use Spring',
          paragraph:
            'There are many benefits to using Spring and Spring Boot for your enterprise application development projects. One of the main benefits is ease of development. Spring and Spring Boot provide a set of tools and libraries that simplify common tasks, making it easier to develop enterprise applications. Testability is another benefit of using Spring and Spring Boot, as they make it easy to write unit and integration tests for your application. Additionally, they are flexible and can be used to develop a wide range of applications, from simple web applications to complex microservices.',
          imageURL: '/assets/images/spring/diagram-microservices.svg',
        },
      ],
    },
    {
      title: 'React / React Native',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/react-logo.png',
      link: '',
      description: [
      
      ],
    },
    {
      title: '.NET Core / Framework',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/netcore-logo.png',
      link: '',
      description: [
      ],
    },
    {
      title: 'Node.js',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/nodejs-logo.png',
      link: '',
      description: [
      ],
    },
    {
      title: 'Vue.js',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/vue-js-logo.png',
      link: '',
      description: [
      ],
    },
    {
      title: 'Angular',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/angular-logo.png',
      link: '',
      description: [
      ],
    },
    {
      title: 'WordPress',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/wordpress-logo.png',
      link: '',
      description: [
      ],
    },
    {
      title: 'Shopify',
      paragraph: 'Ajudamos você a conectar seus negócios.',
      imageURL: '/assets/images/shopify-logo.png',
      link: '',
      description: [
      ],
    },
  ]

  const techData = techList.find((techItem) => techItem.link === useRouter().query.tech)
  
  return techData ? (
    <TechnologiesSelected tech={techData} topDivider />
  ) : (
    <TechnologiesList techList={techList} topDivider />
  )
}

TechnologiesContent.propTypes = propTypes
TechnologiesContent.defaultProps = defaultProps

export default TechnologiesContent
