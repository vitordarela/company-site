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
    slug: string,
    lang: any
  }
}

export const getHomeHeroHeader = (dictionary) => ({
  title: dictionary.title,
  subTitle: dictionary.subTitle,
  paragraph: dictionary.paragraph,
  imageURL: '/assets/images/video-placeholder.jpg',
  videoIFrame: '/assets/video/CodeBe.mp4',
})

export const getHomeFeaturesData = (dictionary) => ({
  title: dictionary.title,
  paragraph: dictionary.paragraph,
  imageURL: null,
  link: null,
  description: [
    {
      title: dictionary.description[0].title,
      subTitle: dictionary.description[0].subTitle,
      paragraph: dictionary.description[0].paragraph,
      imageURL: '/assets/images/feature-tile-icon-01.svg',
    },
    {
      title: dictionary.description[1].title,
      subTitle: dictionary.description[1].subTitle,
      paragraph: dictionary.description[1].paragraph,
      imageURL: '/assets/images/feature-tile-icon-02.svg',
    },
    {
      title: dictionary.description[2].title,
      subTitle: dictionary.description[2].subTitle,
      paragraph: dictionary.description[2].paragraph,
      imageURL: '/assets/images/feature-tile-icon-03.svg',
    },
  ],
})

export const getHomeTestimonialsData = (dictionary) => ({
  title: dictionary.title,
  paragraph: dictionary.paragraph,
  imageURL: null,
  link: null,
  description: [
    {
      title: dictionary.description[0].title,
      subTitle: dictionary.description[0].subTitle,
      paragraph: dictionary.description[0].paragraph,
      imageURL: null,
    },
    {
      title: dictionary.description[1].title,
      subTitle: dictionary.description[1].subTitle,
      paragraph: dictionary.description[1].paragraph,
      imageURL: null,
    },
    {
      title: dictionary.description[2].title,
      subTitle: dictionary.description[2].subTitle,
      paragraph: dictionary.description[2].paragraph,
      link: '/',
      imageURL: null,
    },
  ],
})

export const getServiceHeader = (dictionary) => ({
  title: dictionary.title,
  paragraph: dictionary.paragraph,
})

export const getServiceData = (dictionary) => [
  {
    title: dictionary[0].title,
    paragraph: dictionary[0].paragraph,
    imageURL: '/assets/images/wso2-logo.png',
    link: '/services/wso2',
    slug: 'wso2',
    description: [
      {
        title: dictionary[0].description[0].title,
        subTitle: dictionary[0].description[0].subTitle,
        paragraph: dictionary[0].description[0].paragraph,
        imageURL: '/assets/images/wso2/apim-rest.gif',
      },
      {
        title: dictionary[0].description[1].title,
        subTitle: dictionary[0].description[1].subTitle,
        paragraph: dictionary[0].description[1].paragraph,
        imageURL: '/assets/images/wso2/wso2-first-image.svg',
      },
      {
        title: dictionary[0].description[2].title,
        subTitle: dictionary[0].description[2].subTitle,
        paragraph: dictionary[0].description[2].paragraph,
        imageURL: '/assets/images/wso2/microservices-integration.gif',
      },
      {
        title: dictionary[0].description[3].title,
        subTitle: dictionary[0].description[3].subTitle,
        paragraph: dictionary[0].description[3].paragraph,
        imageURL: null,
        videoIFrame:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/nr1cFyxVdDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      {
        title: dictionary[0].description[4].title,
        subTitle: dictionary[0].description[4].subTitle,
        paragraph: dictionary[0].description[4].paragraph,
        imageURL: '/assets/images/wso2/apim-capabilities.gif',
      },
      {
        title: dictionary[0].description[5].title,
        subTitle: dictionary[0].description[5].subTitle,
        paragraph: dictionary[0].description[5].paragraph,
        imageURL: '/assets/images/wso2/apim-governance.gif',
      },
      {
        title: dictionary[0].description[6].title,
        subTitle: dictionary[0].description[6].subTitle,
        paragraph: dictionary[0].description[6].paragraph,
        imageURL: '/assets/images/wso2/apim-insights.gif',
      },
      {
        title: dictionary[0].description[7].title,
        subTitle: dictionary[0].description[7].subTitle,
        paragraph: dictionary[0].description[7].paragraph,
        imageURL: '/assets/images/wso2/apim-flexible.gif',
      },
      {
        title: dictionary[0].description[8].title,
        subTitle: dictionary[0].description[8].subTitle,
        paragraph: dictionary[0].description[8].paragraph,
        imageURL: '/assets/images/wso2/apim-modern-services.gif',
      },
      {
        title: dictionary[0].description[9].title,
        subTitle: dictionary[0].description[9].subTitle,
        paragraph: dictionary[0].description[9].paragraph,
        imageURL: '/assets/images/wso2/apim-integration-support.gif',
      },
      {
        title: dictionary[0].description[10].title,
        subTitle: dictionary[0].description[10].subTitle,
        paragraph: dictionary[0].description[10].paragraph,
        imageURL: '/assets/images/wso2/apim-tooling.gif',
      },
    ],
  },
  {
    title: dictionary[1].title,
    paragraph: dictionary[1].paragraph,
    imageURL: '/assets/images/ecommerce.png',
    link: '/services/ecommerce',
    slug: 'ecommerce',
    description: [
      {
        title: dictionary[1].description[0].title,
        subTitle: dictionary[1].description[0].subTitle,
        paragraph: dictionary[1].description[0].paragraph,
        imageURL: '/assets/images/services/e-commerce-tab1.png',
      },
      {
        title: dictionary[1].description[1].title,
        subTitle: dictionary[1].description[1].subTitle,
        paragraph: dictionary[1].description[1].paragraph,
        imageURL: '/assets/images/services/ecommerce-solutions.png',
      },
      {
        title: dictionary[1].description[2].title,
        subTitle: dictionary[1].description[2].subTitle,
        paragraph: dictionary[1].description[2].paragraph,
        imageURL: '/assets/images/services/ecommerce-dev.png',
      },
      {
        title: dictionary[1].description[3].title,
        subTitle: dictionary[1].description[3].subTitle,
        paragraph: dictionary[1].description[3].paragraph,
        imageURL: '/assets/images/services/ecommerce-shopify.png',
      },
      {
        title: dictionary[1].description[4].title,
        subTitle: dictionary[1].description[4].subTitle,
        paragraph: dictionary[1].description[4].paragraph,
        imageURL: '/assets/images/services/ecommerce-custom.png',
      },
      {
        title: dictionary[1].description[5].title,
        subTitle: dictionary[1].description[5].subTitle,
        paragraph: dictionary[1].description[5].paragraph,
        imageURL: '/assets/images/services/ecommerce-support.png',
      },
    ],
  },
  {
    title: dictionary[2].title,
    paragraph: dictionary[2].paragraph,
    imageURL: '/assets/images/mobileapp2.png',
    link: '/services/mobile',
    slug: 'mobile',
    description: [
      {
        title: dictionary[2].description[0].title,
        subTitle: dictionary[2].description[0].subTitle,
        paragraph: dictionary[2].description[0].paragraph,
        imageURL: '/assets/images/services/mobile-tab1.png',
      },
      {
        title: dictionary[2].description[1].title,
        subTitle: dictionary[2].description[1].subTitle,
        paragraph: dictionary[2].description[1].paragraph,
        imageURL: '/assets/images/services/mobile-dev.png',
      },
      {
        title: dictionary[2].description[2].title,
        subTitle: dictionary[2].description[2].subTitle,
        paragraph: dictionary[2].description[2].paragraph,
        imageURL: '/assets/images/services/mobile-process.png',
      },
      {
        title: dictionary[2].description[3].title,
        subTitle: dictionary[2].description[3].subTitle,
        paragraph: dictionary[2].description[3].paragraph,
        imageURL: '/assets/images/services/mobile-native.png',
      },
      {
        title: dictionary[2].description[4].title,
        subTitle: dictionary[2].description[4].subTitle,
        paragraph: dictionary[2].description[4].paragraph,
        imageURL: '/assets/images/services/mobile-hibrid.png',
      },
      {
        title: dictionary[2].description[5].title,
        subTitle: dictionary[2].description[5].subTitle,
        paragraph: dictionary[2].description[5].paragraph,
        imageURL: '/assets/images/services/mobile-cross.png',
      },
    ]
  },
  {
    title: dictionary[3].title,
    paragraph: dictionary[3].paragraph,
    imageURL: '/assets/images/software-development.png',
    link: '/services/custom-service',
    slug: 'custom-service',
    description: [
      {
        title: dictionary[3].description[0].title,
        subTitle: dictionary[3].description[0].subTitle,
        paragraph: dictionary[3].description[0].paragraph,
        imageURL: '/assets/images/services/custom-tab1.png',
      },
      {
        title: dictionary[3].description[1].title,
        subTitle: dictionary[3].description[1].subTitle,
        paragraph: dictionary[3].description[1].paragraph,
        imageURL: '/assets/images/services/custom-dev1.png',
      },
      {
        title: dictionary[3].description[2].title,
        subTitle: dictionary[3].description[2].subTitle,
        paragraph: dictionary[3].description[2].paragraph,
        imageURL: '/assets/images/services/custom-v1.png',
      },
      {
        title: dictionary[3].description[3].title,
        subTitle: dictionary[3].description[3].subTitle,
        paragraph: dictionary[3].description[3].paragraph,
        imageURL: '/assets/images/services/custom-v2.png',
      },
      {
        title: dictionary[3].description[4].title,
        subTitle: dictionary[3].description[4].subTitle,
        paragraph: dictionary[3].description[4].paragraph,
        imageURL: '/assets/images/services/custom-roi.png',
      },
      {
        title: dictionary[3].description[5].title,
        subTitle: dictionary[3].description[5].subTitle,
        paragraph: dictionary[3].description[5].paragraph,
        imageURL: '/assets/images/services/custom-tec.png',
      },
    ]
  },
]

export const getCloudServerHeader = (dictionary) => ({
  title: dictionary.title,
  paragraph: dictionary.paragraph
})

export const getCloudServerData = (dictionary) => [
  {
    title: dictionary[0].title,
    subTitle: dictionary[0].subTitle,
    paragraph: dictionary[0].paragraph,
    imageURL: '/assets/images/google-cloud-gpc.png',
  },
  {
    title: dictionary[1].title,
    subTitle: dictionary[1].subTitle,
    paragraph: dictionary[1].paragraph,
    imageURL: '/assets/images/digital-ocean.png',
  },
  {
    title: dictionary[2].title,
    subTitle: dictionary[2].subTitle,
    paragraph: dictionary[2].paragraph,
    imageURL: '/assets/images/vercel.png',
  },
]

export const getAboutUsHeader = (dictionary) => ({
  title: dictionary.title,
  paragraph: dictionary.paragraph
})

export const getAboutUsData = (dictionary) => [
  {
    title: dictionary[0].title,
    subTitle: dictionary[0].subTitle,
    paragraph: dictionary[0].paragraph,
    imageURL: '/assets/images/about-us.jpeg',
  },
  {
    title: dictionary[1].title,
    subTitle: dictionary[1].subTitle,
    paragraph: dictionary[1].paragraph,
    imageURL: '/assets/images/world-wide.png',
  },
]

export const getTechHeader = (dictionary) => ({
  title: dictionary.title,
  paragraph: dictionary.paragraph,
})

export const getTechData = (dictionary) => [
  {
    title: dictionary[0].title,
    paragraph:dictionary[0].paragraph,
    imageURL: '/assets/images/wso2-logo.png',
    link: '/technologies/wso2',
    slug: 'wso2',
    description: [
      {
        title: dictionary[0].description[0].title,
        subTitle: dictionary[0].description[0].subTitle,
        paragraph: dictionary[0].description[0].paragraph,
        imageURL: '/assets/images/wso2/apim-rest.gif',
      },
      {
        title: dictionary[0].description[1].title,
        subTitle: dictionary[0].description[1].subTitle,
        paragraph: dictionary[0].description[1].paragraph,
        imageURL: '/assets/images/wso2/wso2-first-image.svg',
      },
      {
        title: dictionary[0].description[2].title,
        subTitle: dictionary[0].description[2].subTitle,
        paragraph: dictionary[0].description[2].paragraph,
        imageURL: '/assets/images/wso2/microservices-integration.gif',
      },
      {
        title: dictionary[0].description[3].title,
        subTitle: dictionary[0].description[3].subTitle,
        paragraph: dictionary[0].description[3].paragraph,
        imageURL: null,
        videoIFrame:
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/nr1cFyxVdDw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      },
      {
        title: dictionary[0].description[4].title,
        subTitle: dictionary[0].description[4].subTitle,
        paragraph: dictionary[0].description[4].paragraph,
        imageURL: '/assets/images/wso2/apim-capabilities.gif',
      },
      {
        title: dictionary[0].description[5].title,
        subTitle: dictionary[0].description[5].subTitle,
        paragraph: dictionary[0].description[5].paragraph,
        imageURL: '/assets/images/wso2/apim-governance.gif',
      },
      {
        title: dictionary[0].description[6].title,
        subTitle: dictionary[0].description[6].subTitle,
        paragraph: dictionary[0].description[6].paragraph,
        imageURL: '/assets/images/wso2/apim-insights.gif',
      },
      {
        title: dictionary[0].description[7].title,
        subTitle: dictionary[0].description[7].subTitle,
        paragraph: dictionary[0].description[7].paragraph,
        imageURL: '/assets/images/wso2/apim-flexible.gif',
      },
      {
        title: dictionary[0].description[8].title,
        subTitle: dictionary[0].description[8].subTitle,
        paragraph: dictionary[0].description[8].paragraph,
        imageURL: '/assets/images/wso2/apim-modern-services.gif',
      },
      {
        title: dictionary[0].description[9].title,
        subTitle: dictionary[0].description[9].subTitle,
        paragraph: dictionary[0].description[9].paragraph,
        imageURL: '/assets/images/wso2/apim-integration-support.gif',
      },
      {
        title: dictionary[0].description[10].title,
        subTitle: dictionary[0].description[10].subTitle,
        paragraph: dictionary[0].description[10].paragraph,
        imageURL: '/assets/images/wso2/apim-tooling.gif',
      },
    ],
  },
  {
    title: dictionary[1].title,
    paragraph:dictionary[1].paragraph,
    imageURL: '/assets/images/spring-logo.png',
    link: '/technologies/spring',
    slug: 'spring',
    description: [
      {
        title: dictionary[1].description[0].title,
        subTitle: dictionary[1].description[0].subTitle,
        paragraph: dictionary[1].description[0].paragraph,
        imageURL: '/assets/images/spring/why-spring.svg',
      },
      {
        title: dictionary[1].description[1].title,
        subTitle: dictionary[1].description[1].subTitle,
        paragraph: dictionary[1].description[1].paragraph,
        imageURL: '/assets/images/spring/microservices-boot.svg',
      },
      {
        title: dictionary[1].description[2].title,
        subTitle: dictionary[1].description[2].subTitle,
        paragraph: dictionary[1].description[2].paragraph,
        imageURL: '/assets/images/spring/diagram-microservices.svg',
      },
    ],
  },
  {
    title: dictionary[2].title,
    paragraph: dictionary[2].paragraph,
    imageURL: '/assets/images/react-logo.png',
    link: '/technologies/',
    slug: 'react',
    description: [],
  },
  {
    title: dictionary[3].title,
    paragraph: dictionary[3].paragraph,
    imageURL: '/assets/images/netcore-logo.png',
    link: '/technologies/',
    slug: 'netcore',
    description: [],
  },
  {
    title: dictionary[4].title,
    paragraph: dictionary[4].paragraph,
    imageURL: '/assets/images/nodejs-logo.png',
    link: '/technologies/',
    slug: 'node',
    description: [],
  },
  {
    title: dictionary[5].title,
    paragraph: dictionary[5].paragraph,
    imageURL: '/assets/images/vue-js-logo.png',
    link: '/technologies/',
    slug: 'vue',
    description: [],
  },
  {
    title: dictionary[6].title,
    paragraph: dictionary[6].paragraph,
    imageURL: '/assets/images/angular-logo.png',
    link: '/technologies/',
    slug: 'angular',
    description: [],
  },
  {
    title: dictionary[7].title,
    paragraph: dictionary[7].paragraph,
    imageURL: '/assets/images/wordpress-logo.png',
    link: '/technologies/',
    slug: 'wordpress',
    description: [],
  },
  {
    title: dictionary[8].title,
    paragraph: dictionary[8].paragraph,
    imageURL: '/assets/images/shopify-logo.png',
    link: '/technologies/',
    slug: 'shopify',
    description: [],
  },
]

export const getContactHeader = (dictionary) => ({
  title: dictionary.title,
  paragraph: dictionary.paragraph
})

export const getContactFormHeader = (dictionary) => [
  {
    title: dictionary.title_yourself,
    paragraph: null,
  },
  {
    title: dictionary.title_project,
    paragraph: null,
  },
]

export const getModalHeader = (dictionary) => ({
  success: {
    title: dictionary.success.title,
    paragraph: dictionary.success.paragraph
  },
  error: {
    title: dictionary.error.title,
    paragraph: dictionary.error.paragraph
  },
}) as { success: SectionHeaderProps; error: SectionHeaderProps }

export function getDataFiltered(data: ListDataProps[], slug: string) {
  return data?.find((item) => item.slug === slug)
}
