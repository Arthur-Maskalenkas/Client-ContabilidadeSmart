import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('vai renderizar com os valores padrões', () => {
    render(<Heading>um texto</Heading>)

    const texto = screen.getByRole('heading', { name: /um texto/i })

    expect(texto).toHaveStyle({
      color: theme.colors.primary
    })
    expect(texto).toHaveStyle({
      fontSize: theme.font.sizes.xlarge
    })
  })

  describe('<Heading /> sizes', () => {
    it('Vai renderizar com o tamanho medium', () => {
      render(<Heading size="medium">um texto</Heading>)

      const texto = screen.getByRole('heading', {
        name: /um texto/i
      })

      expect(texto).toHaveStyle({
        fontSize: theme.font.sizes.medium
      })
    })

    it('Vai renderizar com o tamanho huge', () => {
      render(<Heading size="huge">um texto</Heading>)

      const texto = screen.getByRole('heading', {
        name: /um texto/i
      })

      expect(texto).toHaveStyle({
        fontSize: theme.font.sizes.huge
      })
    })
  })

  describe('<Heading /> colors', () => {
    it('Vai renderizar  com a cor secundaria', () => {
      render(<Heading color="secondary">um texto</Heading>)

      const texto = screen.getByRole('heading', {
        name: /um texto/i
      })

      expect(texto).toHaveStyle({
        color: theme.colors.secondary
      })
    })

    it('Vai renderizar  com a cor preta', () => {
      render(<Heading color="black">um texto</Heading>)

      const texto = screen.getByRole('heading', {
        name: /um texto/i
      })

      expect(texto).toHaveStyle({
        color: theme.colors.black
      })
    })
  })

  describe('<Heading /> lines', () => {
    it('Vai renderizar com a borda esquerda |', () => {
      render(<Heading lineLeft={true}>um texto</Heading>)

      const texto = screen.getByRole('heading', {
        name: /um texto/i
      })

      expect(texto).toHaveStyle({
        borderLeft: `0.7rem solid ${theme.colors.secondary}`
      })
    })

    it('Vai renderizar com a borda direita ---', () => {
      render(<Heading lineRight={true}>um texto</Heading>)

      const texto = screen.getByRole('heading', {
        name: /um texto/i
      })

      // Usando o min-width ja que tem uma regra que só aparece para desktop a borda direita
      expect(texto).toHaveStyleRule(
        'border-bottom',
        `0.3rem solid ${theme.colors.secondary}`,
        {
          modifier: '::after',
          media: '(min-width: 768px)'
        }
      )
    })
  })
})
