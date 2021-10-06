import { render, screen } from 'utils/test-utils'

import { ContainerAside } from '.'

describe('<AsideStyles />', () => {
  it('should render the heading', () => {
    const { container } = render(<ContainerAside></ContainerAside>)

    expect(container.firstChild).toMatchInlineSnapshot(`
.c0 {
  background-color: #FFFFFF;
  padding: 2rem;
}

<div
  class="c0"
/>
`)
  })
})
