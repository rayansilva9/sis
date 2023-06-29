import { Html, Head, Main, NextScript } from 'next/document'
import { Roboto } from 'next/font/google'

export default function Document() {


  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="theme-color" content="#1d4ed8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
