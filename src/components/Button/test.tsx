import { ArrowRight } from '@styled-icons/material-outlined'
import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('isso deve renderizar o botão', () => {
    render(<Button>clique aqui</Button>)

    const button = screen.getByText(/clique aqui/i)

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({
      color: theme.colors.primary
    })
    expect(button).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('isso deve renderizar o botão com o icone', () => {
    render(
      <Button icon={<ArrowRight title="arrow Right" />}>clique aqui</Button>
    )

    const button = screen.getByText(/clique aqui/i)

    expect(button).toBeInTheDocument()
    expect(screen.getByTitle(/arrow right/i)).toBeInTheDocument()
  })

  it('vai ter link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  describe('<Button/> tamanhos', () => {
    it('vai renderizar com o tamanho small', () => {
      render(<Button size="small">Buy now</Button>)

      const button = screen.getByRole('button', { name: /Buy now/i })

      expect(button).toHaveStyle({
        height: '3rem',
        'font-size': '1.2rem'
      })
    })

    it('vai renderizar com o tamanho grande', () => {
      render(<Button size="large">Buy now</Button>)

      const button = screen.getByRole('button', { name: /Buy now/i })

      expect(button).toHaveStyle({
        height: '5rem',
        'font-size': '2.8rem',
        padding: '0.8rem 4.8rem'
      })
    })
  })
})
