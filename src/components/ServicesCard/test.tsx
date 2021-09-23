import { render, screen } from 'utils/test-utils'

import ServicesCard from '.'

describe('<ServicesCard />', () => {
  it('should render the heading', () => {
    render(<ServicesCard />)

    expect(screen.getByRole('heading', { name: /ServicesCard/i })).toBeInTheDocument()
  })
})
