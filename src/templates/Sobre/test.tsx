import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Sobre, { SobreTemplateProps } from '.'

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

const props: SobreTemplateProps = {
  imagem: { src: 'img/perfil.jpg', alt: 'imagem de perfil' },
  description: 'uma descricao'
}

describe('<Sobre />', () => {
  it('deve renderizar a imagem e os textos', () => {
    renderWithTheme(<Sobre {...props} />)

    expect(
      screen.getByRole('img', { name: /imagem de perfil/i })
    ).toBeInTheDocument()
    expect(screen.getByText('uma descricao')).toBeInTheDocument()
  })
})
