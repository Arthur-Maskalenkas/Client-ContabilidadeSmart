import { render, screen } from 'utils/test-utils'

import MenuAside, { MenuAsideProps } from '.'

const mock1: MenuAsideProps = {
  item: [
    {
      title: 'premium',
      dropdownOptions: [
        { titleOption: 'Saiba mais', slug: 'saiba_mais' },
        { titleOption: 'Contato', slug: 'contato' }
      ]
    }
  ]
}

const mock2: MenuAsideProps = {
  item: [
    {
      title: 'premium'
    }
  ]
}

describe('<MenuAside />', () => {
  it('Vai renderizar um menu com opções', () => {
    render(<MenuAside item={mock1.item} />)

    expect(
      screen.getByRole('list', { name: /opções do menu premium/i })
    ).toBeInTheDocument()

    // Renderizando estrutura 1
    expect(
      screen.getByRole('listitem', { name: /opção Saiba mais/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /saiba mais/i })).toBeInTheDocument()

    // Renderizando estrutura 2
    expect(screen.getByRole('listitem', { name: /opção contato/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contato/i })).toBeInTheDocument()
  })

  it('Vai renderizar um menu sem opções, e o titulo sera um link', () => {
    render(<MenuAside item={mock2.item} />)

    expect(screen.getByRole('listitem', { name: /opção premium/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /premium/i })).toBeInTheDocument()
  })
})
