import { render, screen } from 'utils/test-utils'

import Compartilhe from '.'

describe('<Compartilhe />', () => {
  it('should render the heading', () => {
   render(<Compartilhe />)

    expect(screen.getByRole('heading', { name: /Compartilhe/i })).toBeInTheDocument()

  })
})
