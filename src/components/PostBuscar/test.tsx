import { render, screen } from 'utils/test-utils'

import PostBuscar from '.'

describe('<PostBuscar />', () => {
  it('should render the heading', () => {
    render(<PostBuscar />)

    expect(
      screen.getByRole('heading', {
        name: /PostBuscar/i
      })
    ).toBeInTheDocument()
  })
})
