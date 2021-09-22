import { fireEvent, render, screen } from 'utils/test-utils'

import mock from './mock'

import LinkMenuDesktop from '.'
import userEvent from '@testing-library/user-event'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<LinkMenuDesktop />', () => {
  it('vai renderizar o componente', () => {
    render(<LinkMenuDesktop {...mock} />)

    expect(screen.getByText(/premium/i))

    expect(screen.getByRole('svg', { name: /ver opções/i })).toBeInTheDocument()
  })

  describe('Vai retornar o titulo do elemento quando clicarem sobre ele, ou sobre o icone dele', () => {
    it('Vai retornar o titulo do elemento quando ele for clicado', () => {
      const takeTitle = jest.fn()

      render(<LinkMenuDesktop {...mock} takeTitle={takeTitle} isSelected={true} />)

      const premiumText = screen.getByText(/premium/i)

      fireEvent.click(premiumText)

      expect(takeTitle).toBeCalledWith('Premium')
    })

    it('Vai retornar o titulo do elemento quando o titulo for clicado', () => {
      const takeTitle = jest.fn()

      render(<LinkMenuDesktop title="Premium" takeTitle={takeTitle} isSelected={true} />)

      const premiumText = screen.getByText(/Premium/i)

      fireEvent.click(premiumText)

      expect(takeTitle).toBeCalledWith('Premium')
    })

    it('Vai retornar o titulo do elemento quando clicarem sob o icone dele', () => {
      const takeTitle = jest.fn()

      render(<LinkMenuDesktop {...mock} takeTitle={takeTitle} isSelected={true} />)

      const premiumText = screen.getByRole('svg', { name: /ver opções/i })

      fireEvent.click(premiumText)

      expect(takeTitle).toBeCalledWith('Premium')
    })
  })

  describe('O conteudo vai ter a opção de renderizar com o conteudo aberto ou fechado', () => {
    it('vai renderizar com as opções abertas', () => {
      render(<LinkMenuDesktop {...mock} isSelected={true} />)

      const LinkMenuDesktopElement = screen.getByLabelText(/LinkMenuDesktop/i)

      expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).not.toBe('true')
      expect(LinkMenuDesktopElement).not.toHaveStyle({ opacity: 0 })

      expect(LinkMenuDesktopElement.getAttribute('aria-hidden')).toBe('false')
      expect(LinkMenuDesktopElement).toHaveStyle({ opacity: 1 })
    })

    it('vai renderizar com as opções fechadas', () => {
      render(<LinkMenuDesktop {...mock} isSelected={false} />)

      const LinkMenuDesktopElement = screen.getByLabelText(/LinkMenuDesktop/i)

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
