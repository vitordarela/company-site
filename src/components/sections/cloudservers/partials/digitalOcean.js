import React from 'react'
import classNames from 'classnames'
import Image from '../../../elements/Image'

export function DigitalOcean({ imageFill }) {
  return (
    <div className="split-item">
      <div
        className="split-item-content center-content-mobile reveal-from-left"
        data-reveal-container=".split-item"
      >
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          DigitalOcean
        </div>
        <h3 className="mt-0 mb-12">Impulsione o crescimento dos negócios</h3>
        <p className="m-0">
          As empresas crescem mais rapidamente quando os desenvolvedores podem
          criar na nuvem simples e acessível que adoram. A DigitalOcean tem os
          serviços de computação em nuvem de que você precisa, com preços
          previsíveis, documentação robusta e escalabilidade para dar suporte ao
          seu crescimento em qualquer estágio.
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
          src={require('./../../../../assets/images/digital-ocean.png')}
          alt="Digital Ocean"
        />
      </div>
    </div>
  )
}
