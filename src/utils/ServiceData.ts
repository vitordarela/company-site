export interface SectionHeaderProps {
  title: string
  subTitle?: string
  paragraph: string
  imageURL?: string
  link?: string
  videoIFrame?: string
}

export interface ListDataProps {
  title: string
  paragraph: string
  imageURL: string
  link: string
  slug?: string
  description: SectionHeaderProps[]
}

export interface DataFilteredProps {
  params: {
    slug: string
  }
}

export const getHomeHeroHeader: SectionHeaderProps = {
  title: 'We create your',
  subTitle: 'idea.',
  paragraph:
    'You imagine and we develop. We create software and provide services using the best technologies on the market.',
  imageURL: '/assets/images/video-placeholder.jpg',
  videoIFrame: '/assets/video/CodeBe.mp4',
}

export const getHomeFeaturesData: ListDataProps = {
  title: 'We build what you need',
  paragraph:
    'We are a team of experienced and skilled software developers who are dedicated to delivering high-quality software solutions to our clients. We use the latest technologies and programming languages, and we are well-versed in a wide range of software development methodologies.',
  imageURL: null,
  link: null,
  description: [
    {
      title: 'Versatility and Expertise',
      subTitle: null,
      paragraph:
        'Our team is highly adaptable and can work on projects of any size and complexity, from small web applications to large enterprise systems.',
      imageURL: '/assets/images/feature-tile-icon-01.svg',
    },
    {
      title: 'Customized Solutions',
      subTitle: null,
      paragraph:
        'We take pride in our ability to understand the unique needs of our clients and deliver software that meets their specific requirements.',
      imageURL: '/assets/images/feature-tile-icon-02.svg',
    },
    {
      title: 'On-Time and On-Budget',
      subTitle: null,
      paragraph:
        'We are committed to delivering software on time and on budget, and we work closely with our clients to ensure that the final product meets their expectations.',
      imageURL: '/assets/images/feature-tile-icon-03.svg',
    },
  ],
}

export const getHomeTestimonialsData: ListDataProps = {
  title: 'Customer testimonials',
  paragraph:
    'We have received positive feedback from our customers and partners who have trusted and relied on our work.',
  imageURL: null,
  link: null,
  description: [
    {
      title: 'Amanda Darela',
      subTitle: 'Margot Jewels',
      paragraph:
        "— We at Margot Jewels couldn't be happier with the e-commerce development service provided by CodeBe. Their team was incredibly professional and knowledgeable, guiding us through every step of the process. The final result exceeded our expectations and has greatly improved our online sales. We highly recommend CodeBe to anyone looking to develop or improve their e-commerce platform.",
      link: 'https://margotjewels.com/',
      imageURL: null,
    },
    {
      title: 'Carolina Cortez',
      subTitle: 'Pajé Snoods',
      paragraph:
        '— CodeBe was the perfect choice for Pajé Snoods when it came to developing our e-commerce platform. Their team was responsive and easy to work with, and they took the time to understand our specific needs. The end result was a beautiful and functional online store.',
      link: 'https://pajesnoods.com/',
      imageURL: null,
    },
    {
      title: 'Gabriela Holthausen',
      subTitle: 'Payment Gateway for online store',
      paragraph:
        '— We had a great experience working with CodeBe on integrating a new payment gateway for our e-commerce platform. They understood our needs and provided us with a seamless solution. The integration process was smooth and we could start accepting payments in no time. The team at CodeBe is knowledgeable and professional.',
      link: '/',
      imageURL: null,
    },
  ],
}

export const getServiceHeader: SectionHeaderProps = {
  title: 'Services',
  paragraph:
    'Turning ideas into innovative tech solutions to drive your business success.',
}

export const getServiceData: ListDataProps[] = [
  {
    title: 'WSO2 Middleware Platform',
    paragraph:
      'WSO2 is a leading open source platform for building, integrating, and managing APIs, applications, and microservices. With its flexible architecture and comprehensive set of integrated tools, WSO2 helps organizations drive digital transformation by delivering seamless and secure experiences to customers, partners, and employees.',
    imageURL: '/assets/images/wso2-logo.png',
    link: '/services/wso2',
    slug: 'wso2',
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
        videoIFrame:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/nr1cFyxVdDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      {
        subTitle: 'Capabilities',
        title:
          'Easily and securely expose APIs to both internal and external consumers.',
        paragraph:
          'Implement industry-standard authorization flows — such as OAuth, OpenID Connect, and JWTs — out of the box and integrate with your existing identity access or key management tools.',
        imageURL: '/assets/images/wso2/apim-capabilities.gif',
      },
      {
        subTitle: null,
        title:
          'Enable design and runtime governance for the entire lifecycle of your APIs.',
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
        title:
          'Flexible deployment models adapt to your infrastructure while keeping service discovery seamless for developers.',
        paragraph:
          'Deploy in the cloud, in your private data centers, or anywhere in between while cataloging your services in a single location to make it easy for your developers to find what they need to efficiently build their applications.',
        imageURL: '/assets/images/wso2/apim-flexible.gif',
      },
      {
        subTitle: null,
        title:
          'Support modern services including REST, GraphQL, and Async API, and integrate your API workflows with your CI/CD pipeline.',
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
        paragraph:
          'Complete API development support with API publisher. Visually design, develop, debug, test, and deploy integration flows with Integration Studio. Complete set of commands to manage API gateway and micro integrator runtimes with API controller (CLI) tool',
        imageURL: '/assets/images/wso2/apim-tooling.gif',
      },
    ],
  },
  {
    title: 'E-commerce',
    paragraph:
      'Turn your online presence into profits: Custom solutions for your e-commerce store.',
    imageURL: '/assets/images/ecommerce.png',
    link: '/services/ecommerce',
    slug: 'ecommerce',
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
          "Shopify is a complete and user-friendly E-commerce platform. It's a great option for businesses of all sizes, from small shops to large companies. Shopify offers a wide variety of customizable design templates, advanced security features, integrations with external apps and services, as well as support for various payment options and shipping methods. With Shopify, you can manage your online store, add products, process payments, and track statistics in an easy and intuitive way.",
        imageURL: '/assets/images/services/ecommerce-shopify.png',
      },
      {
        subTitle: 'CUSTOMIZATION',
        title: 'We create your e-commerce in a customized way',
        paragraph:
          "We offer custom E-commerce templates to meet the unique needs of each client. Whether you're a small local shop looking to expand your online presence or a large company looking to optimize your sales, we have the right solution for you. Our templates are designed to be flexible and scalable, so you can keep up with the growth of your business.",
        imageURL: '/assets/images/services/ecommerce-custom.png',
      },
      {
        subTitle: 'Support',
        title:
          'Our support is continuous, we work with the best cloud solutions on the market.',
        paragraph:
          "In addition to offering high-quality E-commerce solutions, we also offer continuous support and regular updates to ensure your platform is always functioning in the most efficient way possible. Our support team is always available to help you with any problems or questions that may arise. if you're looking for a reliable and efficient E-commerce solution, we have what you need. Contact us today for more information and start expanding your online business.",
        imageURL: '/assets/images/services/ecommerce-support.png',
      },
    ],
  },
  {
    title: 'Mobile App',
    paragraph: 'Ajudamos você a conectar seus negócios.',
    imageURL: '/assets/images/mobileapp2.png',
    link: '/services/',
    slug: 'mobile',
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
    link: '/services/',
    slug: 'custom-service',
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
]

export const getCloudServerHeader: SectionHeaderProps = {
  title: 'Cloud Servers',
  paragraph:
    "We are using the best cloud solutions to support our projects, utilizing multiple high performance cloud platforms to ensure our projects run smoothly and efficiently. This cloud solution is likely to be chosen based on the company's specific needs and requirements and provides the necessary features, scalability and reliability to support its projects.",
}

export const getCloudServerData: SectionHeaderProps[] = [
  {
    title: 'GOOGLE CLOUD PLATFORM',
    subTitle: 'ACCELERATE YOUR DIGITAL TRANSFORMATION',
    paragraph:
      'Google Cloud is a cloud computing platform offered by Google. It offers a wide variety of products and services including computing, storage, networking, and artificial intelligence. The platform also offers options for scalability, high availability, and security. In addition, Google Cloud has integrations with other Google tools and services such as Google Drive and Google Analytics.',
    imageURL: '/assets/images/google-cloud-gpc.png',
  },
  {
    title: 'DigitalOcean',
    subTitle: 'Drive business growth',
    paragraph:
      'DigitalOcean is another popular cloud platform. It primarily focuses on offering simple and easy-to-use virtual servers, called "droplets." It also offers storage, networking and other similar resources to those offered by Google Cloud. The main difference is that DigitalOcean is more simple and easy-to-use, while Google Cloud is more robust and scalable.',
    imageURL: '/assets/images/digital-ocean.png',
  },
  {
    title: 'VERCEL',
    subTitle: 'Right Platform for Developers',
    paragraph:
      'Vercel is another cloud platform option that is gaining popularity. It is a platform-as-a-service (PaaS) that is focused on web development and hosting. It offers a variety of features including automatic HTTPS, continuous deployment, and global CDN. It also offers a simple and easy-to-use interface for managing and deploying web projects. Vercel is a great choice for teams that are focused on web development and want a simple and fast way to deploy and host their projects. Vercel is also known for its fast and reliable hosting for static sites and Jamstack projects. It integrates well with other development tools and frameworks such as React, Vue, and Next.js making it a great choice for web development teams.',
    imageURL: '/assets/images/vercel.png',
  },
]

export const getAboutUsHeader: SectionHeaderProps = {
  title: 'About Us',
  paragraph:
    'We are CodeBe, a software company specialized in developing customized solutions for our clients.',
}

export const getAboutUsData: SectionHeaderProps[] = [
  {
    title: '',
    subTitle: 'Who are We',
    paragraph:
      'CodeBe was born from a dream and passion for technology of three friends. Before founding the company, each of them worked for many years for large technology companies all over the world. After a lot of experience and learning, they decided to come together to make this dream of starting their own technology company a reality.<br><br> With a lot of dedication and passion, they founded CodeBe, a company specializing in custom software solutions for their clients. We believe that every business is unique and therefore every solution should be developed according to each client\'s specific needs..<br><br> In addition, we offer continuous support to our clients, ensuring that the developed solutions continue to function efficiently and are always up-to-date. <br><br> Our development team is highly qualified and experienced, and we work with the latest technologies and methodologies to ensure that our projects are delivered with quality and within the established deadline. In addition, we offer continuous support to our clients, ensuring that the developed solutions continue to function efficiently and are always up-to-date. <br><br> We are passionate about technology and believe it can transform the world around us. That is why we work tirelessly to provide high-quality custom solutions for our clients. We are eager to work with you and help you achieve your business goals with our software solutions. <br> <a href="/contact">Contact us</a>.',
    imageURL: '/assets/images/about-us.jpeg',
  },
  {
    title: '',
    subTitle: 'Where are we',
    paragraph:
      '<b>Portugal</b> <br> Rua Pedra de Novaes, 203 <br> 4450-767 <br> Matosinhos - Porto <br><br> <b>France</b> <br> 7 Rue Georges Buffon <br> 78180 <br> Montigny-le-bretonneux',
    imageURL: '/assets/images/world-wide.png',
  },
]

export const getTechHeader: SectionHeaderProps = {
  title: 'Technologies',
  paragraph:
    'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
}

export const getTechData: ListDataProps[] = [
  {
    title: 'WSO2',
    paragraph:
      'WSO2 is a leading open source platform for building, integrating, and managing APIs, applications, and microservices. With its flexible architecture and comprehensive set of integrated tools, WSO2 helps organizations drive digital transformation by delivering seamless and secure experiences to customers, partners, and employees.',
    imageURL: '/assets/images/wso2-logo.png',
    link: '/technologies/wso2',
    slug: 'wso2',
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
        videoIFrame:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/nr1cFyxVdDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      {
        subTitle: 'Capabilities',
        title:
          'Easily and securely expose APIs to both internal and external consumers.',
        paragraph:
          'Implement industry-standard authorization flows — such as OAuth, OpenID Connect, and JWTs — out of the box and integrate with your existing identity access or key management tools.',
        imageURL: '/assets/images/wso2/apim-capabilities.gif',
      },
      {
        subTitle: null,
        title:
          'Enable design and runtime governance for the entire lifecycle of your APIs.',
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
        title:
          'Flexible deployment models adapt to your infrastructure while keeping service discovery seamless for developers.',
        paragraph:
          'Deploy in the cloud, in your private data centers, or anywhere in between while cataloging your services in a single location to make it easy for your developers to find what they need to efficiently build their applications.',
        imageURL: '/assets/images/wso2/apim-flexible.gif',
      },
      {
        subTitle: null,
        title:
          'Support modern services including REST, GraphQL, and Async API, and integrate your API workflows with your CI/CD pipeline.',
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
        paragraph:
          'Complete API development support with API publisher. Visually design, develop, debug, test, and deploy integration flows with Integration Studio. Complete set of commands to manage API gateway and micro integrator runtimes with API controller (CLI) tool',
        imageURL: '/assets/images/wso2/apim-tooling.gif',
      },
    ],
  },
  {
    title: 'Spring / Spring Boot',
    paragraph:
      'Spring and Spring Boot are popular Java frameworks that are widely used in developing enterprise applications.',
    imageURL: '/assets/images/spring-logo.png',
    link: '/technologies/spring',
    slug: 'spring',
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
    paragraph:
      'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
    imageURL: '/assets/images/react-logo.png',
    link: '/technologies/',
    slug: 'react',
    description: [],
  },
  {
    title: '.NET Core / Framework',
    paragraph:
      'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
    imageURL: '/assets/images/netcore-logo.png',
    link: '/technologies/',
    slug: 'netcore',
    description: [],
  },
  {
    title: 'Node.js',
    paragraph:
      'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
    imageURL: '/assets/images/nodejs-logo.png',
    link: '/technologies/',
    slug: 'node',
    description: [],
  },
  {
    title: 'Vue.js',
    paragraph:
      'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
    imageURL: '/assets/images/vue-js-logo.png',
    link: '/technologies/',
    slug: 'vue',
    description: [],
  },
  {
    title: 'Angular',
    paragraph:
      'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
    imageURL: '/assets/images/angular-logo.png',
    link: '/technologies/',
    slug: 'angular',
    description: [],
  },
  {
    title: 'WordPress',
    paragraph:
      'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
    imageURL: '/assets/images/wordpress-logo.png',
    link: '/technologies/',
    slug: 'wordpress',
    description: [],
  },
  {
    title: 'Shopify',
    paragraph:
      'Our team is ready and prepared to assist you with the main technologies in the market, both at the backend and frontend levels.',
    imageURL: '/assets/images/shopify-logo.png',
    link: '/technologies/',
    slug: 'shopify',
    description: [],
  },
]

export const getContactHeader: SectionHeaderProps = {
  title: 'Talk with us',
  paragraph:
    'We are always open to collaborations where we can all be a part of the same team. Ready to move forward?',
}

export const getContactFormHeader: SectionHeaderProps[] = [
  {
    title: 'Tell us about yourself',
    paragraph: null,
  },
  {
    title: 'Tell us about your project',
    paragraph: null,
  },
]

export const getModalHeader = {
  success: {
    title: 'Request sent',
    paragraph:
      'Your request was successfully sent! We will respond as quickly as possible.',
  },
  error: {
    title: 'Request error',
    paragraph:
      'Your request was not sent. An error occurred while sending the request. Please, try again later.',
  },
} as { success: SectionHeaderProps; error: SectionHeaderProps }

export function getDataFiltered(data: ListDataProps[], slug: string) {
  return data?.find((item) => item.slug === slug)
}
