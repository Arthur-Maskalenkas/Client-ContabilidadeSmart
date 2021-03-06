import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import mockMenu from 'components/Menu/mock'

import Base from '.'

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

jest.mock('components/MenuContact', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu Contact"></div>
    }
  }
})

describe('<Base />', () => {
  it('Verifica a renderização do menu, footer e filho', () => {
    renderWithTheme(
      <Base menuData={mockMenu.items}>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Menu Contact')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
