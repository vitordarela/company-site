'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import { i18n } from '../../../../i18n-config'
import { setCookie,  } from "cookies-next";

export default function LocaleSwitcher() {
    const pathName = usePathname()

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        setCookie("NEXT_LOCALE", locale)
        window.location.replace(segments.join('/'))
    }

  return (
    <div>
      <p>Locale switcher:</p>
        {i18n.locales.map((locale) => {
          return (
              <button key={locale} onClick={() => redirectedPathName(locale)}>{locale.toUpperCase()}</button>
          )
        })}
    </div>
  )
}