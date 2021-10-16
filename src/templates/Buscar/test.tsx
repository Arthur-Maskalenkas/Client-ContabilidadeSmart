import { render, screen } from 'utils/test-utils'

import Buscar from '.'

describe('<Buscar />', () => {
  it('should render the heading', () => {
    render(<Buscar />)

    expect(screen.getByRole('heading', { name: /Buscar/i })).toBeInTheDocument()
  })
})
