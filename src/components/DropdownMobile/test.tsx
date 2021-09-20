import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { render, screen, waitFor } from 'utils/test-utils'

import DropdownMobile from '.'

import items, { mock2 } from './mock'

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

    // Verifica se a quantidade de opções passadas é a mesma presente
    expect(screen.getAllByText(/aceleradora/i)).toHaveLength(2)

    // Verifica se caso eu clique no titulo novamente o dropdown é fechado
    userEvent.click(screen.getByText(/Premium/i))
    expect(dropdownElement.getAttribute('aria-hidden')).toBe('true')
    expect(dropdownElement).toHaveStyle({ opacity: 0 })
  })

  it('Vai mudar a cor do titulo ao clicar nele', async () => {
    render(<DropdownMobile {...items} />)

    const titleElement = screen.getByRole('heading', {
      name: /premium/i
    })

    expect(titleElement).not.toHaveStyle({ color: theme.colors.secondary })

    userEvent.click(titleElement)

    expect(titleElement).toHaveStyle({ color: theme.colors.secondary })
  })

  it('Vai calcular cada opção por 56px e vai dar margin ao elemento filho no abre/fecha', async () => {
    render(
      <>
        <DropdownMobile {...items} />
        <DropdownMobile title="mock 2" />
      </>
    )
    const titleElementAdjacente = screen.getByRole('listitem')

    expect(titleElementAdjacente).toHaveStyle('margin-top: -11.2rem')
  })

  describe('O titulo vai ter a possibilidade de ser um link ou um heading', () => {
    it('o titulo vai virar um link caso não passe o dropdown', () => {
      render(<DropdownMobile title="Contabilidade" titleLink="/link" />)

      expect(screen.getByRole('link', { name: /Contabilidade/i })).toHaveAttribute(
        'href',
        '/link'
      )

      expect(
        screen.queryByRole('heading', { name: /contabilidade/i })
      ).not.toBeInTheDocument()
    })

    it('o titulo vai virar um heading caso não passe o dropdown', () => {
      render(<DropdownMobile {...items} title="Contabilidade" />)

      expect(screen.getByRole('heading', { name: /contabilidade/i })).toBeInTheDocument()
    })
  })

  describe('O wrapper vai ter a possibilidade de ser um ul ou um li', () => {
    it('Vai ser um li caso não tenha dropdown', () => {
      render(<DropdownMobile title="Contabilidade" titleLink="/link" />)

      expect(screen.getByRole('listitem')).toBeInTheDocument()
    })

    it('Vai ser um ul caso tenha dropdown', () => {
      render(<DropdownMobile {...items} title="Contabilidade" />)

      expect(screen.getByRole('list')).toBeInTheDocument()
    })
  })
})
