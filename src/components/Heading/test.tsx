import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('vai renderizar com os valores padrões', () => {
    render(<Heading>um texto</Heading>)

    const texto = screen.getByRole('heading', { name: /um texto/i })

    expect(texto).toHaveStyle({ color: theme.colors.primary })
    expect(texto).toHaveStyle({ fontSize: theme.font.sizes.xlarge })
  })

  describe('<Heading /> sizes', () => {
    it('Vai renderizar com o tamanho medium', () => {
      render(<Heading size="medium">um texto</Heading>)

      const texto = screen.getByRole('heading', { name: /um texto/i })

      expect(texto).toHaveStyle({ fontSize: theme.font.sizes.medium })
    })

    it('Vai renderizar com o tamanho huge', () => {
      render(<Heading size="huge">um texto</Heading>)

      const texto = screen.getByRole('heading', { name: /um texto/i })

      expect(texto).toHaveStyle({ fontSize: theme.font.sizes.huge })
    })
  })

  describe('<Heading /> colors', () => {
    it('Vai renderizar  com a cor secundaria', () => {
      render(<Heading color="secondary">um texto</Heading>)

      const texto = screen.getByRole('heading', { name: /um texto/i })

      expect(texto).toHaveStyle({ color: theme.colors.secondary })
    })
  })

  describe('<Heading /> lines', () => {
    it('Vai renderizar com a borda esquerda |', () => {})
    it('Vai renderizar com a borda direita ---', () => {})
  })
})
