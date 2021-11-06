import { render } from 'utils/test-utils'

import Empty from '.'

describe('<Empty />', () => {
  it('should render the heading', () => {
    const { container } = render(<Empty />)

    expect(container).toMatchSnapshot()
  })
})
