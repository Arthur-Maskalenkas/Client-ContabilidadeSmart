import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import TextContent, { TextContentProps } from '.'

import { Provider } from 'react-redux'
import { mockStoreDefault } from 'utils/mocksTemplates/storeMock'

const props: TextContentProps = {
  title: 'Description',
  content: '<h1>content</h1>'
}

describe('<TextContent />', () => {
  it('vai renderizar o titulo e o conteudo', () => {
    render(
      <Provider store={mockStoreDefault}>
        <TextContent {...props} />
      </Provider>
    )

    expect(
      screen.getByRole('heading', {
        name: /description/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('vai renderizar com o titulo e sem o conteudo', () => {
    render(
      <Provider store={mockStoreDefault}>
        <TextContent title="um titulo" content={props.content} />
      </Provider>
    )

    expect(
      screen.queryByRole('heading', {
        name: /description/i
      })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('vai renderizar ', () => {
    render(
      <Provider store={mockStoreDefault}>
        <TextContent {...props} />
      </Provider>
    )

    // É dentro do wrapper que tem os estilos. ELe passa para os outros, mas é ele que tem os estilos
    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement

    expect(wrapper).toHaveStyle({
      color: theme.colors.black
    })
  })
})
