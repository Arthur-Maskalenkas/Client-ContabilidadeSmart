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
        relativeY="1rem"
        sizeMedia="2rem"
      />
    )
    const icone = screen.getByRole('svg', { name: /whatsapp/i })

    expect(icone).toBeInTheDocument()

    // Deve testar a cor
    expect(icone).toHaveStyle({ color: theme.colors.secondary })

    // Deve testar o relativeY
    expect(icone).toHaveStyle({ top: '1rem' })

    // Deve ter o size
    expect(icone).toHaveStyle({ width: '1rem' })

    expect(container.parentElement).toMatchSnapshot()
  })
})
