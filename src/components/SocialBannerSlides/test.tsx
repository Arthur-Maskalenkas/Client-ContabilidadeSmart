import '../../../setupTests'

import { render, screen } from 'utils/test-utils'
import SocialBannerSlides from '.'

const mock = [
  {
    img: 'img/socialBanners/Facebook.jpg',
    altImg: 'Facebook'
  },
  {
    img: 'img/socialBanners/Instagram.jpg',
    altImg: 'Instagram'
  }
]

describe('<SocialBannerSlides />', () => {
  it('should render the heading', () => {
    render(<SocialBannerSlides items={mock} />)

    expect(screen.getAllByAltText('Facebook')).toHaveLength(2)
  })
})
