'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { i18n, Locale } from '../../../../i18n-config'
import { setCookie } from 'cookies-next'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const [activeLocale, setActiveLocale] = useState<Locale>()

  useEffect(() => {
    const segments = pathName.split('/')
    setActiveLocale(segments[1] as Locale)
  }, [pathName])

  const redirectedPathName = (locale: string) => {
    if (!pathName) return

    const segments = pathName.split('/')
    segments[1] = locale

    setCookie('NEXT_LOCALE', locale)
    window.location.replace(segments.join('/'))
  }

  return (
    activeLocale && (
      <select
        name="localeSwitcher"
        id="localeSwitcher"
        onChange={(event) => redirectedPathName(event.target.value)}
        defaultValue={activeLocale}
      >
        {i18n.locales.map((locale) => {
          return (
            <option style={{backgroundColor: activeLocale ? '#151719': '#151719'}}  key={locale} value={locale}>
              {locale.toUpperCase()}
            </option>
          )
        })}
      </select>
    )
  )
}
