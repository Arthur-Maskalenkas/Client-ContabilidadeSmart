import React from 'react'
import { render, screen } from 'utils/test-utils'

import mockNavigationAside from 'components/NavigationAside/mock'
import mockTags from 'components/Tags/mock'
import mockMaisVistos from 'components/MaisVistos/mock'

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

const navigationMock = mockNavigationAside
const tagsMock = mockTags
const maisVistosMock = mockMaisVistos

describe('<MenuAside />', () => {
  it('should render the heading', () => {
    render(
      <MenuAside
        maisVistosData={maisVistosMock}
        menuData={navigationMock.items}
        tagsData={tagsMock}
      />
    )

    expect(screen.getByTestId('mock tag')).toBeInTheDocument()
    expect(screen.getByTestId('mock logo')).toBeInTheDocument()
    expect(screen.getByTestId('mock navigation')).toBeInTheDocument()
    expect(screen.getByTestId('mock mais vistos')).toBeInTheDocument()
  })
})
