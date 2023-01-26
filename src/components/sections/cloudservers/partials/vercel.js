import React from 'react'
import classNames from 'classnames'
import Image from '../../../elements/Image'

export function Vercel({ imageFill }) {
  return (
    <div className="split-item">
      <div
        className="split-item-content center-content-mobile reveal-from-right"
        data-reveal-container=".split-item"
      >
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          VERCEL
        </div>
        <h3 className="mt-0 mb-12">Plataforma Certa Para Desenvolvedores</h3>
        <p className="m-0">
          O Vercel acelera o processo de criação, teste e implantação de páginas
          da Web compilando todo o código necessário em um único arquivo. Por
          sua vez, facilita o rastreamento de alterações, a depuração de erros e
          a garantia de um estilo consistente nas páginas.
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
          src={require('./../../../../assets/images/vercel.png')}
          alt="Features split 01"
        />
      </div>
    </div>
  )
}
