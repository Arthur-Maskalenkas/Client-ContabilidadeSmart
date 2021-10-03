import { render, screen } from 'utils/test-utils'

import BannerPage from '.'

describe('<BannerPage />', () => {
  it('should render the heading', () => {
   render(<BannerPage />)

    expect(screen.getByRole('heading', { name: /BannerPage/i })).toBeInTheDocument()

  })
})
