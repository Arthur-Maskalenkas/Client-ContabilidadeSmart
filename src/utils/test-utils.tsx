import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (ui: ReactElement, { ...renderOptions }: CustomRenderProps = {}) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions)

// Tudo que eu chamar, vai vim dessa pasta aqui
export * from '@testing-library/react'
export { customRender as render }
