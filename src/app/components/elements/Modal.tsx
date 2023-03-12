import React, { ReactNode, useEffect } from 'react'
import classNames from 'classnames'
interface ModalProps {
  id: string
  className?: string
  children?: ReactNode
  handleClose: () => void
  show?: boolean
  closeHidden?: boolean
  video?: string
  videoTag?: 'iframe' | 'video'
}

const Modal = ({
  id = '',
  className = '',
  children,
  handleClose,
  show = false,
  closeHidden = false,
  video,
  videoTag = 'iframe',
  ...props
}: ModalProps) => {
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    document.addEventListener('click', handleStopPropagation)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('click', handleStopPropagation)
    }
  })

  useEffect(() => {
    handleBodyClass()
  }, [show])

  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active')
    } else {
      document.body.classList.remove('modal-is-active')
    }
  }

  const handleKeyPress = (e: globalThis.KeyboardEvent) => {
    if (e.key === 'Escape' || e.code === 'Escape') {
      handleClose()
    }
  }

  const handleStopPropagation = (e: any) => {
    e.stopPropagation()
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    video && 'modal-video',
    className,
  )

  return (
    <>
      {show && (
        <div {...props} id={id} className={classes} onClick={handleClose}>
          <div className="modal-inner" onClick={handleStopPropagation}>
            {video ? (
              <div className="responsive-video">
                {videoTag === 'iframe' ? (
                  <iframe title="video" src={video} allowFullScreen />
                ) : (
                  <video controls src={video} />
                )}
              </div>
            ) : (
              <>
                {!closeHidden && (
                  <button
                    className="modal-close"
                    aria-label="close"
                    onClick={handleClose}
                  />
                )}
                <div className="modal-content">{children}</div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
