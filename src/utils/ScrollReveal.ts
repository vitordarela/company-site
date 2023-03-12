'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ScrollReveal from 'scrollreveal'

export default function ScrollRevealProvider() {
  const [elements, setElements] = useState<NodeList>(null)
  const pathname = usePathname()

  useEffect(() => {
    const bodyElements = document.querySelectorAll('[class*=reveal-]')
    setElements(bodyElements)
  }, [pathname])

  useEffect(() => {
    if (elements) {
      handleRevealElements()
    }
  }, [elements])

  function handleBeforeReveal(elem: HTMLElement) {
    elem.classList.add('is-revealed')
  }

  function handleAfterReset(elem: HTMLElement) {
    elem.classList.remove('is-revealed')
  }

  function handleRevealElements() {
    elements.forEach((elem: HTMLElement) => {
      const revealDelay = elem.getAttribute('data-reveal-delay')
        ? elem.getAttribute('data-reveal-delay')
        : '50'

      ScrollReveal().reveal(elem, {
        delay: revealDelay,
        reset: true,
        beforeReveal: handleBeforeReveal,
        afterReset: handleAfterReset,
      })
    })
  }
  return null
}
