import React from 'react'
import classNames from 'classnames'
import Image from '../../../elements/Image'

export function GoogleGCP({ imageFill }) {
  return (
    <div className="split-item">
      <div
        className="split-item-content center-content-mobile reveal-from-left"
        data-reveal-container=".split-item"
      >
        <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
          GPC GOOGLE CLOUD
        </div>
        <h3 className="mt-0 mb-12">Acelere sua transformação digital</h3>
        <p className="m-0">
          Uma nuvem de transformação acelera a transformação digital de uma
          organização pela democratização de dados, modernização de apps e
          infraestruturas, conexões pessoais e transações confiáveis. O
          resultado é uma organização cujos funcionários podem usufruir de todos
          os benefícios da computação em nuvem para impulsionar a inovação.
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
          src={require('./../../../../assets/images/google-cloud-gpc.png')}
          alt="Features split 01"
        />
      </div>
    </div>
  )
}
