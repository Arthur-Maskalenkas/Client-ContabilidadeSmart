import { render, screen } from 'utils/test-utils'

import BaseUpgraded from '.'

describe('<BaseUpgraded />', () => {
  it('should render the heading', () => {
   render(<BaseUpgraded />)

    expect(screen.getByRole('heading', { name: /BaseUpgraded/i })).toBeInTheDocument()

  })
})
