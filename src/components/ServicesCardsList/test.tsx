import { render, screen } from 'utils/test-utils'

import ServicesCardsList, { ServicesCardsListProps } from '.'

const mock: ServicesCardsListProps = {
  items: [
    {
      icon: 'Youtube',
      slug: 'infoproduto',
      title: 'Infoproduto',
      description:
        'Youtubers, Produtores, Coprodutores, Especialistas / Experts, Afiliados, Gerente de Afiliados, Eugência, Agência de Lançamentos, Gestor de Tráfego, Copywriter, Designer Gráfico e Video Maker são as Profissões do Futuro.'
    },
    {
      icon: 'Youtube',
      slug: 'infoproduto',
      title: 'Infoproduto',
      description:
        'Youtubers, Produtores, Coprodutores, Especialistas / Experts, Afiliados, Gerente de Afiliados, Eugência, Agência de Lançamentos, Gestor de Tráfego, Copywriter, Designer Gráfico e Video Maker são as Profissões do Futuro.'
    }
  ]
}

describe('<ServicesCardsList />', () => {
  it('deve renderizar uma lista de 2 elementos', () => {
    render(<ServicesCardsList items={mock.items} />)

    expect(screen.getAllByRole('heading', { name: /infoproduto/i })).toHaveLength(2)
  })
})
