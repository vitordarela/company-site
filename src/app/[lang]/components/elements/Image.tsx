'use client'

import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Image, { ImageProps } from 'next/image'

type ImgProps = ImageProps & {
  src: string
  width?: number
  height?: number
  alt: string
}

const Img = ({ src, width, height, alt, ...props }: ImgProps) => {
  const [loaded, setLoaded] = useState(false)

  const image = useRef(null)

  useEffect(() => {
    handlePlaceholder(image.current)
  }, [])

  const placeholderSrc = (w, h) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`
  }

  const handlePlaceholder = (img) => {
    const placeholder = document.createElement('img')
    if (!loaded) {
      img.style.display = 'none'
      img.before(placeholder)
      placeholder.src = placeholderSrc(
        img.getAttribute('width') || 0,
        img.getAttribute('height') || 0,
      )
      placeholder.width = img.getAttribute('width')
      placeholder.height = img.getAttribute('height')
      placeholder.style.opacity = '0'
      img.className && placeholder.classList.add(img.className)
      placeholder.remove()
      img.style.display = ''
    }
  }

  function onLoad() {
    setLoaded(true)
  }

  return (
    <Image
      {...props}
      ref={image}
      src={src}
      width={width}
      height={height}
      alt={alt}
      onLoad={onLoad}
    />
  )
}

export default Img
