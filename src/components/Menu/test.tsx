import { render, screen } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    render(<Menu />)

    expect(screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument()
  })
})
