import { render, screen } from 'utils/test-utils'

import MenuAside from '.'

describe('<MenuAside />', () => {
  it('should render the heading', () => {
   render(<MenuAside />)

    expect(screen.getByRole('heading', { name: /MenuAside/i })).toBeInTheDocument()

  })
})
