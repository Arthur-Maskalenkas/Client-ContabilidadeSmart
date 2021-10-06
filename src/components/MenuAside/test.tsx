import React from 'react'
import { render, screen } from 'utils/test-utils'

import MenuAside from '.'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock logo" />
  }
}))

jest.mock('components/Tags', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock tag" />
  }
}))

jest.mock('components/NavigationAside', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock navigation" />
  }
}))

jest.mock('components/MaisVistos', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock mais vistos" />
  }
}))

describe('<MenuAside />', () => {
  it('should render the heading', () => {
    render(<MenuAside />)

    expect(screen.getByTestId('mock tag')).toBeInTheDocument()
    expect(screen.getByTestId('mock logo')).toBeInTheDocument()
    expect(screen.getByTestId('mock navigation')).toBeInTheDocument()
    expect(screen.getByTestId('mock mais vistos')).toBeInTheDocument()
  })
})
