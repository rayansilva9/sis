import { ThemeContext } from '@/context/themeContext'
import { Html, Head, Main, NextScript } from 'next/document'
import { Roboto } from 'next/font/google'
import { useContext } from 'react'

export default function Document() {

  const { theme } = useContext(ThemeContext)

  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content={theme == 'light' ? "#1d4ed8" : '#000'} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
