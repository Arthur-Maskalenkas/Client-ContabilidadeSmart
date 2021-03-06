import { render, screen } from 'utils/test-utils'

import BuscarPost, { BuscarPostProps } from '.'

const props: BuscarPostProps = {
  title: 'Um titulo',
  subtitle: 'um subtitulo'
}

const props2: BuscarPostProps = {
  BannerPageProps: {
    backgroundImage:
      'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/caixa-tem-contabilidade-votuporanga.png',
    data: '15/10/2021',
    altImage: 'Uma imagem',
    slug: 'um slug'
  },
  title: 'Um titulo',
  subtitle: 'um subtitulo'
}

describe('<BuscarPost />', () => {
  it('renderiza o componente padrão, sem banner', () => {
    render(<BuscarPost {...props} />)

    expect(screen.queryByAltText(/uma imagem/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /um titulo/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/um subtitulo/i)).toBeInTheDocument()
  })

  it('renderiza o componente padrão, com banner', () => {
    render(<BuscarPost {...props2} />)

    expect(screen.getByAltText(/uma imagem/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /um titulo/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/um subtitulo/i)).toBeInTheDocument()
  })
})
