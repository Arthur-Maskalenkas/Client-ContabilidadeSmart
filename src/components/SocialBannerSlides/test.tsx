import '../../../setupTests'

import { render, screen } from 'utils/test-utils'
import SocialBannerSlides from '.'

describe('<SocialBannerSlides />', () => {
  it('should render the heading', () => {
    render(<SocialBannerSlides />)

    expect(screen.getAllByAltText('Facebook')).toHaveLength(5)
  })
})
