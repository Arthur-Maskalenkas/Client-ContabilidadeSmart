import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import mock from './mock'

import LinkMenuDesktop from '.'
import theme from 'styles/theme'

describe('<LinkMenuDesktop />', () => {
  it('vai renderizar o componente', () => {
    render(<LinkMenuDesktop {...mock} />)

    expect(screen.getByText(/premium/i))

    expect(screen.getByRole('svg', { name: /ver opções/i })).toBeInTheDocument()
  })

  it('vai abrir e fechar o LinkMenuDesktop quando clica no titulo', () => {
    render(<LinkMenuDesktop {...mock} />)

    const LinkMenuDesktopElement = screen.getByLabelText(/LinkMenuDesktop/i)

    // Verifica se o drop esta escondido
    expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).toBe('true')
    expect(LinkMenuDesktopElement).toHaveStyle({ opacity: 0 })

    // LMebrar de colocar parent
    userEvent.click(screen.getByText(/premium/i))
    expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).toBe('false')
    expect(LinkMenuDesktopElement).toHaveStyle({ opacity: 1 })

    // Verifica se caso eu clique no titulo novamente o LinkMenuDesktop é fechado
    userEvent.click(screen.getByText(/premium/i))
    expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).toBe('true')
    expect(LinkMenuDesktopElement).toHaveStyle({ opacity: 0 })
  })

  it('Vai mudar a cor do titulo ao clicar nele', () => {
    render(<LinkMenuDesktop {...mock} />)

    const premiumText = screen.getByText(/premium/i)

    expect(premiumText).not.toHaveStyle({ color: theme.colors.secondary })

    userEvent.click(premiumText)

    expect(premiumText).toHaveStyle({ color: theme.colors.secondary })
  })

  describe('O titulo vai ter a possibilidade de ser um link ou um heading', () => {
    it('o titulo vai virar um link caso não passe o LinkMenuDesktop', () => {
      render(<LinkMenuDesktop title="premium" titleLink="/link" />)

      expect(screen.getByRole('link', { name: /premium/i })).toHaveAttribute(
        'href',
        '/link'
      )
    })

    it('o titulo vai virar um heading caso não passe o LinkMenuDesktop', () => {
      render(<LinkMenuDesktop {...mock} title="premium" />)

      expect(screen.getByText(/premium/i)).not.toHaveAttribute('href', '/link')
    })
  })

  describe('O wrapper vai ter a possibilidade de ser um ul ou um li', () => {
    it('Vai ser um li caso não tenha LinkMenuDesktop', () => {
      render(<LinkMenuDesktop title="Contabilidade" titleLink="/link" />)

      expect(screen.getByRole('listitem')).toBeInTheDocument()
    })

    it('Vai ser um ul caso tenha LinkMenuDesktop', () => {
      render(<LinkMenuDesktop {...mock} />)

      expect(screen.getByRole('list')).toBeInTheDocument()
    })
  })
})
