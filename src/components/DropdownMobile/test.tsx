import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import DropdownMobile from '.'

import items from './mock'

describe('<DropdownMobile />', () => {
  it('vai abrir e fechar o dropdown quando clica no titulo', () => {
    render(<DropdownMobile {...items} />)

    const dropdownElement = screen.getByLabelText(/dropdown/i)

    // Verifica se o drop esta escondido
    expect(dropdownElement.getAttribute('aria-hidden')).toBe('true')
    expect(dropdownElement).toHaveStyle({ opacity: 0 })

    // Verifica se caso clicar no titulo o dropdown é aberto
    userEvent.click(screen.getByText(/Premium/i))
    expect(dropdownElement.getAttribute('aria-hidden')).toBe('false')
    expect(dropdownElement).toHaveStyle({ opacity: 1 })

    // Verifica se caso eu clique no titulo novamente o dropdown é fechado
    userEvent.click(screen.getByText(/Premium/i))
    expect(dropdownElement.getAttribute('aria-hidden')).toBe('true')
    expect(dropdownElement).toHaveStyle({ opacity: 0 })
  })

  it('vai virar um link o titulo caso não passe o dropdown', () => {
    render(<DropdownMobile title="Contabilidade" titleLink="/link" />)

    expect(screen.getByRole('link', { name: /Contabilidade/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
