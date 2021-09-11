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
    expect(screen.getByTitle(/arrow right/i)).toHaveStyle({ width: '1.5rem' })
  })
})
