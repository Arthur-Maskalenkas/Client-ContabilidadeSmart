import { render, screen } from 'utils/test-utils'

import RecursosCardsList, { RecursosCardsListProps } from '.'

const props: RecursosCardsListProps = {
  items: [
    {
      icon: 'Cog',
      title: 'Sustentabilidade',
      description:
        'Sustentabilidade é um tema estratégico. Por isso, nosso trabalho passa por dar visibilidade a indicadores sociais, financeiros, ambientais e de governança, de forma ágil, confiável e transparente.'
    },
    {
      icon: 'Cog',
      title: 'Sustentabilidade',
      description:
        'Sustentabilidade é um tema estratégico. Por isso, nosso trabalho passa por dar visibilidade a indicadores sociais, financeiros, ambientais e de governança, de forma ágil, confiável e transparente.'
    }
  ]
}

describe('<RecursosCardsList />', () => {
  it('Deve renderizar uma lista de 2 elementos', () => {
    render(<RecursosCardsList items={props.items} />)

    expect(screen.getAllByText('Sustentabilidade')).toHaveLength(2)
  })
})
