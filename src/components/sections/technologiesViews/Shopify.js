import React from 'react'
import classNames from 'classnames'
import { SectionSplitProps } from '../../../utils/SectionProps'
import SectionHeader from '../partials/SectionHeader'
import Image from '../../elements/Image'

const propTypes = {
  ...SectionSplitProps.types,
}

const defaultProps = {
  ...SectionSplitProps.defaults,
}

const Shopify = ({
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
    title: 'SHOPIFY',
    paragraph: 'Ajudamos você a conectar seus negócios.',
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Como podes ajudar?
                </div>
                <h3 className="mt-0 mb-12">Instalação e Configuração</h3>
                <p className="m-0">
                  Nosso time está preparado para ajudar você a conectar suas
                  aplicações e montar sua arquitetura de middleware com a
                  plataforma de código aberto Shopify.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill',
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8"></div>
                <h3 className="mt-0 mb-12">Plataforma</h3>
                <p className="m-0">
                  A Shopify fornece uma série de ferramentas e soluções para ajudar
                  as empresas a gerenciar e implementar APIs, integrar
                  aplicativos e dados, e fornecer segurança e conformidade para
                  operações digitais. A ferramenta é amplamente utilizada em
                  ambientes de TI corporativos para ajudar a conectar sistemas e
                  permitir a colaboração entre diferentes departamentos e
                  sistemas.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill',
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Produtos Shopify
                </div>
                <h3 className="mt-0 mb-12">Toda a stack de middleware</h3>
                <div className="m-0">
                  <p>Shopify API Manager: Plataforma de gerenciamento de API. </p>
                  <p>
                    Shopify Enterprise Integrator: Plataforma de integração de
                    aplicativos
                  </p>
                  <p>
                    Shopify Identity Server: Plataforma de gerenciamento de
                    identidade.
                  </p>
                </div>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill',
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require('./../../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Shopify.propTypes = propTypes
Shopify.defaultProps = defaultProps

export default Shopify
