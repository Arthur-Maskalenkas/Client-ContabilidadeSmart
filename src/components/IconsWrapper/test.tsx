import { screen, render } from 'utils/test-utils'
import theme from 'styles/theme'

import IconsWrapper from '.'

describe('<IconsWrapper />', () => {
  it('renderiza o icone', () => {
    const { container } = render(<IconsWrapper icon="Whatsapp" size="1rem" />)
    const icone = screen.getByRole('svg', { name: /whatsapp/i })

    expect(icone).toBeInTheDocument()

    // Deve testar a cor
    expect(icone).toHaveStyle({
      color: theme.colors.white
    })

    // Deve ter o size
    expect(icone).toHaveStyle({ width: '1rem' })

    expect(container.parentElement).toMatchSnapshot()
  })

  it('renderiza o icone com outra cor', () => {
    render(<IconsWrapper icon="Whatsapp" size="1rem" color="secondary" />)
    const icone = screen.getByRole('svg', { name: /whatsapp/i })

    expect(icone).toBeInTheDocument()

    // Deve testar a cor
    expect(icone).toHaveStyle({
      color: theme.colors.secondary
    })
  })
})
