import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(<Container></Container>)

    expect(container.firstChild).toHaveStyleRule('max-width', theme.grid.container)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  max-width: 130rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(1.5rem);
  padding-right: calc(1.5rem);
}

<div
  class="c0"
/>
`)
  })
})
