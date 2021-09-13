import { ArrowRight } from '@styled-icons/material-outlined'
import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('isso deve renderizar o botão', () => {
    render(<Button>clique aqui</Button>)

    const button = screen.getByText(/clique aqui/i)

    expect(button).toBeInTheDocument()
    expect(button).toHaveStyle({ color: theme.colors.primary })
    expect(button).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('isso deve renderizar o botão com o icone', () => {
    render(<Button icon={<ArrowRight title="arrow Right" />}>clique aqui</Button>)

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
})
