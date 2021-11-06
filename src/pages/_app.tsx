import { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { useApollo } from 'utils/apollo'

import { Provider } from 'react-redux'
import { rootReducer } from 'store/store'

import NextNprogress from 'nextjs-progressbar'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={rootReducer}>
          <ThemeProvider theme={theme}>
            <Head>
              <title>Contabilidade Smart</title>
              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="theme-color" content="#06092B" />
              <meta
                name="description"
                content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
              />
            </Head>
            <DefaultSeo {...SEO} />
            <GlobalStyles />
            <Component {...pageProps} />
            <NextNprogress
              color={theme.colors.secondary}
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    </>
  )
}

export default App
