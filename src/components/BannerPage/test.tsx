import { render, screen } from 'utils/test-utils'

import BannerPage, { BannerPageProps } from '.'

const props: BannerPageProps = {
  backgroundImage: 'backgroundUrl',
  data: '23 out 2020',
  tag: 'Noticias',
  altImage: 'uma imagem'
}

describe('<BannerPage />', () => {
  it('Vai renderizar o banner', () => {
    render(<BannerPage {...props} />)

    expect(
      screen.getByText(/on 23 out 2020 | by Contabilidade smart | Noticias/i)
    )

    expect(screen.getByAltText(/uma image/i)).toBeInTheDocument()
  })
})
