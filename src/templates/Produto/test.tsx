import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Produto from '.'

describe('<Produto />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Produto />)

    expect(
      screen.getByRole('heading', { name: /Produto/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
