import { RouterContext } from 'next/dist/next-server/lib/router-context'

import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'mm-dark',
    values: [
      { name: 'mm-light', value: theme.colors.white },
      { name: 'mm-dark', value: theme.colors.black }
    ]
  }
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
]
