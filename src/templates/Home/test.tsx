import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockGallery from 'components/Gallery/mock'

import Home from '.'

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

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="mock-gallery"></div>
    }
  }
})

const props = {
  gallery: { items: mockGallery }
}

describe('<Home />', () => {
  it('deve renderizar os componentes e textos', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/mock-gallery/i)).toBeInTheDocument()
    expect(screen.getByText(/Acompanhe tudo/i)).toBeInTheDocument()
  })
})
