import { render, screen } from 'utils/test-utils'

import BannerPage, { BannerPageProps } from '.'

const props: BannerPageProps = {
  backgroundImage: 'backgroundUrl',
  data: '23 out 2020',
  altImage: 'uma imagem',
  slug: 'um slug'
}

describe('<BannerPage />', () => {
  it('Vai renderizar o banner', () => {
    render(<BannerPage {...props} />)

    expect(screen.getByText(/on 23 out 2020 | by Contabilidade smart/i))

    expect(screen.getByAltText(/uma imagem/i)).toBeInTheDocument()

    expect(screen.getByAltText(/uma imagem/i).parentElement).toHaveAttribute(
      'href',
      '/artigo/um%20slug'
    )
  })
})
