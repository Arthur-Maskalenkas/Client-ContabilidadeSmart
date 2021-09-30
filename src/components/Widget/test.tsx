import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'

import Widget from '.'

import { mockCategorias } from './mock'

describe('<Widget />', () => {
  it('vai renderizar o componente padrão', () => {
    render(<Widget {...mockCategorias} />)

    expect(screen.getByRole('link', { name: 'blog' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /categorias/i })).toBeInTheDocument()
  })

  it('Vai renderizar a lista um pouco mais escura', () => {
    render(<Widget {...mockCategorias} moreWeight />)

    expect(screen.getByRole('link', { name: 'blog' })).toHaveStyle(
      `font-weight: ${theme.font.family.poppins.weight.bold}`
    )
  })
})
