import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import TextContent, { TextContentProps } from '.'

const props: TextContentProps = {
  title: 'Description',
  content: '<h1>content</h1>'
}

describe('<TextContent />', () => {
  it('vai renderizar o titulo e o conteudo', () => {
    render(<TextContent {...props} />)

    expect(screen.getByRole('heading', { name: /description/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /content/i })).toBeInTheDocument()
  })

  it('vai renderizar com o titulo e sem o conteudo', () => {
    render(<TextContent title="um titulo" content={props.content} />)

    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /content/i })).toBeInTheDocument()
  })

  it('vai renderizar ', () => {
    render(<TextContent {...props} />)

    // É dentro do wrapper que tem os estilos. ELe passa para os outros, mas é ele que tem os estilos
    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({ color: theme.colors.black })
  })
})
