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

  it('Vai mudar a cor do titulo quando ele estiver selecionado', () => {
    render(<LinkMenuDesktop {...mock} isSelected={true} />)

    const premiumText = screen.getByText(/premium/i)

    expect(premiumText).toHaveStyle({ color: theme.colors.secondary })
  })

  describe('O conteudo vai ter a opção de renderizar com o conteudo aberto ou fechado', () => {
    it('vai renderizar com as opções abertas', () => {
      render(<LinkMenuDesktop {...mock} isSelected={true} />)

      const LinkMenuDesktopElement = screen.getByLabelText(/LinkMenuDesktop/i)

      // Verifica se o drop esta escondido
      expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).not.toBe('true')
      expect(LinkMenuDesktopElement).not.toHaveStyle({ opacity: 0 })

      expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).toBe('false')
      expect(LinkMenuDesktopElement).toHaveStyle({ opacity: 1 })
    })

    it('vai renderizar com as opções fechadas', () => {
      render(<LinkMenuDesktop {...mock} isSelected={false} />)

      const LinkMenuDesktopElement = screen.getByLabelText(/LinkMenuDesktop/i)

      // Verifica se o drop esta escondido
      expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).toBe('true')
      expect(LinkMenuDesktopElement).toHaveStyle({ opacity: 0 })

      expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).not.toBe('false')
      expect(LinkMenuDesktopElement).not.toHaveStyle({ opacity: 1 })
    })
  })

  describe('O titulo vai ter a possibilidade de ser um link ou um heading', () => {
    it('o titulo vai virar um link caso não passe o LinkMenuDesktop', () => {
      render(<LinkMenuDesktop title="premium" slug="link" />)

      const titlePremium = screen.getByRole('link', { name: /premium/i })

      expect(titlePremium).toHaveAttribute('href', '/posts/link')
    })

    it('o titulo vai virar um heading caso não passe o LinkMenuDesktop', () => {
      render(<LinkMenuDesktop {...mock} title="premium" />)

      expect(screen.getByText(/premium/i)).not.toHaveAttribute('href', '/link')
    })
  })

  describe('O wrapper vai ter a possibilidade de ser um ul ou um li', () => {
    it('Vai ser um li caso não tenha LinkMenuDesktop', () => {
      render(<LinkMenuDesktop title="Contabilidade" slug="link" />)

      expect(screen.getByRole('listitem')).toBeInTheDocument()
    })

    it('Vai ser um ul caso tenha LinkMenuDesktop', () => {
      render(<LinkMenuDesktop {...mock} />)

      expect(screen.getByRole('list')).toBeInTheDocument()
    })
  })
})
