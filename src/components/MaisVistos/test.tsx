import { render, screen } from 'utils/test-utils'

import MaisVistos from '.'

describe('<MaisVistos />', () => {
  it('should render the heading', () => {
   render(<MaisVistos />)

    expect(screen.getByRole('heading', { name: /MaisVistos/i })).toBeInTheDocument()

  })
})
