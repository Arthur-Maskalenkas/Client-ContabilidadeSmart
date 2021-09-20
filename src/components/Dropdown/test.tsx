import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import Dropdown, { DropdownProps } from '.'

const props: DropdownProps = { title: 'um titulo', children: 'um filho' }

describe('<Dropdown />', () => {
  it('vai renderizar o componente', () => {
    renderWithTheme(<Dropdown {...props} />)

    expect(screen.getByText(/um titulo/i))
  })

  it('vai abrir e fechar o dropdown quando clica no titulo', () => {
    renderWithTheme(<Dropdown {...props} />)

    const dropdownElement = screen.getByLabelText(/dropdown/i)

    // Verifica se o drop esta escondido
    expect(dropdownElement.getAttribute('aria-hidden')).toBe('true')
    expect(dropdownElement).toHaveStyle({ opacity: 0 })

    // LMebrar de colocar parent
    userEvent.click(screen.getByText(/um titulo/i))
    expect(dropdownElement.getAttribute('aria-hidden')).toBe('false')
    expect(dropdownElement).toHaveStyle({ opacity: 1 })

    // Verifica se caso eu clique no titulo novamente o dropdown é fechado
    userEvent.click(screen.getByText(/um titulo/i))
    expect(dropdownElement.getAttribute('aria-hidden')).toBe('true')
    expect(dropdownElement).toHaveStyle({ opacity: 0 })
  })
})
