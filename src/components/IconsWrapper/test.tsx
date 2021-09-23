import { screen, render } from 'utils/test-utils'
import theme from 'styles/theme'

import IconsWrapper from '.'

import { StyledIconBase } from '@styled-icons/styled-icon'

describe('<IconsWrapper />', () => {
  it('Deve renderizar o icone e testar hover, size, e color, e icone que renderiza ', () => {
    const { container } = render(
      <IconsWrapper
        icon="Whatsapp"
        hoverColor="secondary"
        size="1rem"
        isScale
        color="secondary"
        sizeMedia="2rem"
      />
    )
    const icone = screen.getByRole('svg', { name: /whatsapp/i })

    expect(icone).toBeInTheDocument()

    // Deve testar a cor
    expect(icone).toHaveStyle({ color: theme.colors.secondary })

    // Deve ter o size
    expect(icone).toHaveStyle({ width: '1rem' })

    expect(container.parentElement).toMatchSnapshot()
  })

  it('Deve renderizar o icone com a borda branca e o icone com a cor secundaria, caso seja passada a prop borderColor com white ', () => {
    render(<IconsWrapper icon="Whatsapp" borderColor="white" />)

    const icone = screen.getByRole('svg', { name: /whatsapp/i })
    const wrapperIcone = icone.parentElement

    expect(wrapperIcone).toHaveStyle(`background-color: ${theme.colors.white}`)
    expect(icone).toHaveStyle({ color: theme.colors.secondary })
  })

  it('Deve renderizar o icone com a borda com a cor secundaria e o icone com a cor branca, caso seja passada a prop borderColor com secondary ', () => {
    render(<IconsWrapper icon="Whatsapp" borderColor="secondary" />)

    const icone = screen.getByRole('svg', { name: /whatsapp/i })
    const wrapperIcone = icone.parentElement

    expect(wrapperIcone).toHaveStyle(`background-color: ${theme.colors.secondary}`)
    expect(icone).toHaveStyle({ color: theme.colors.white })
  })
})
