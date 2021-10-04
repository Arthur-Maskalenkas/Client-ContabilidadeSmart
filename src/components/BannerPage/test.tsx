import { render, screen } from 'utils/test-utils'

import BannerPage from '.'

const props = {
  backgroundImage: 'backgroundUrl',
  data: '23 out 2020',
  tag: 'Noticias'
}

describe('<BannerPage />', () => {
  it('should render the heading', () => {
    render(<BannerPage {...props} />)

    expect(screen.getByText(/on 23 out 2020 | by Contabilidade smart | Noticias/i))
  })
})
