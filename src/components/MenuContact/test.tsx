import { render, screen } from 'utils/test-utils'

import MenuContact from '.'

describe('<MenuContact />', () => {
  it('should render the heading', () => {
    const { container } = render(<MenuContact />)

    expect(container).toMatchSnapshot()
  })
})
