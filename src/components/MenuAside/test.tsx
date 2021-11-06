import React from 'react'
import { render, screen } from 'utils/test-utils'

import mockNavigationAside from 'components/NavigationAside/mock'
import mockTags from 'components/Tags/mock'
import mockDestaques from 'components/Destaques/mock'

import MenuAside from '.'

import { Provider } from 'react-redux'
import { mockStoreDefault } from 'utils/mocksTemplates/storeMock'

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

jest.mock('components/Destaques', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="mock mais vistos" />
  }
}))

const navigationMock = mockNavigationAside
const tagsMock = mockTags
const destaquesMock = mockDestaques

describe('<MenuAside />', () => {
  it('should render the heading', () => {
    render(
      <Provider store={mockStoreDefault}>
        <MenuAside
          destaquesData={destaquesMock}
          menuData={navigationMock.items}
          tagsData={tagsMock}
        />
      </Provider>
    )

    expect(screen.getByTestId('mock tag')).toBeInTheDocument()
    expect(screen.getByTestId('mock logo')).toBeInTheDocument()
    expect(screen.getByTestId('mock navigation')).toBeInTheDocument()
    expect(screen.getByTestId('mock mais vistos')).toBeInTheDocument()
  })
})
