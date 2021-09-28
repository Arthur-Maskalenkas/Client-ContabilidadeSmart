import { render, screen } from 'utils/test-utils'

import ServicesCardsList from '.'

describe('<ServicesCardsList />', () => {
  it('should render the heading', () => {
   render(<ServicesCardsList />)

    expect(screen.getByRole('heading', { name: /ServicesCardsList/i })).toBeInTheDocument()

  })
})
