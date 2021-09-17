import React from 'react'
import { render, screen } from 'utils/test-utils'

import DropdownDesktop from '.'

import items from './mock'

jest.mock('components/Dropdown', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return (
        <div data-testid="mock-dropdown">
          <>{children}</>
        </div>
      )
    }
  }
})

describe('<DropdownDesktop />', () => {
  it('deve renderizar tudo', () => {
    render(<DropdownDesktop {...items} />)

    expect(screen.getByTestId(/mock-dropdown/i)).toBeInTheDocument()

    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})
