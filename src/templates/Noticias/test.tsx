import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NoticiasCardMock from './mock'

import Noticias from '.'

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Menu" />
  }
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Footer" />
  }
}))

jest.mock('components/NoticiaCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-noticiaCard"></div>
    }
  }
})

jest.mock('components/TextField', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-textField"></div>
    }
  }
})

const props = {
  NoticiaCardContainer: NoticiasCardMock.slice(2)
}

describe('<Noticias />', () => {
  it('deve renderizar todos os componentes', () => {
    renderWithTheme(<Noticias {...props} />)

    expect(screen.getAllByTestId(/mock-noticiaCard/i)).toHaveLength(3)
    expect(screen.getByTestId(/mock-textField/i)).toBeInTheDocument()
  })

  it('Deve falar algo quando não encontrar nenhum item na busca e mudar o display para flex', () => {
    renderWithTheme(<Noticias />)

    expect(screen.queryByTestId(/mock-noticiaCard/i)).not.toBeInTheDocument()

    expect(
      screen.getByText(/Opa... parece que não foi encontrado nada/i)
    ).toBeInTheDocument()

    expect(screen.getByLabelText(/area de noticia/i)).toHaveStyle({
      display: 'flex'
    })
  })

  it('Não deve falar nada quando encontrar algum item na busca', () => {
    renderWithTheme(<Noticias {...props} />)

    expect(screen.getAllByTestId(/mock-noticiaCard/i)).toHaveLength(3)

    expect(screen.getByLabelText(/area de noticia/i)).toHaveStyle({
      display: 'grid'
    })

    expect(
      screen.queryByText(/Opa... parece que não foi encontrado nada/i)
    ).not.toBeInTheDocument()
  })
})
