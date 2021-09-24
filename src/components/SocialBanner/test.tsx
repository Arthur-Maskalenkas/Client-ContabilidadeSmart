import { render, screen } from 'utils/test-utils'

import SocialBanner, { SocialBannerProps } from '.'

const props: SocialBannerProps = {
  img: 'img/socialBanners/Facebook.jpg',
  altImg: 'Facebook'
}

describe('<SocialBanner />', () => {
  it('deve renderizar uma imagem ', () => {
    render(<SocialBanner {...props} />)

    expect(screen.getByAltText(/facebook/i)).toBeInTheDocument()
  })
})
