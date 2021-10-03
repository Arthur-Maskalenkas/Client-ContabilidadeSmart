import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import Widget, { WidgetProps } from '.'

const mock: WidgetProps = {
  items: [
    {
      title: 'Categorias',
      path: 'categorias',
      options: [
        { title: 'blog', slug: 'blog' },
        { title: 'Contabilidade', slug: 'contabilidade' },
        { title: 'Infoproduto', slug: 'infoproduto' },
        { title: 'MEI', slug: 'mei' },
        { title: 'Midias Sociais', slug: 'midias_sociais' },
        { title: 'Noticias', slug: 'noticias' },
        { title: 'Tendencias', slug: 'tendencias' }
      ]
    }
  ]
}

describe('<Widget />', () => {
  it('vai renderizar o componente padrão', () => {
    render(<Widget {...mock} />)

    expect(
      screen.getByRole('list', { name: /Opções do Widget Categorias/i })
    ).toBeInTheDocument()

    // Renderizando estrutura 1
    expect(screen.getByRole('listitem', { name: /opção blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
  })

  // it('Vai renderizar a lista um pouco mais escura', () => {
  //   render(<Widget {...mock} moreWeight />)

  //   expect(screen.getByRole('link', { name: 'Blog' })).toHaveStyle(
  //     `font-weight: ${theme.font.family.poppins.weight.bold}`
  //   )
  // })
})
