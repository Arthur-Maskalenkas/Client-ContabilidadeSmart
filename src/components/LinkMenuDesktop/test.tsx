import { render, screen } from 'utils/test-utils'

import LinkMenuDesktop from '.'

import { mockWithDropdownOptions, mockWithoutDropdownOptions } from './mock'

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
    render(<LinkMenuDesktop {...mockWithDropdownOptions} />)

    expect(screen.getByText(/premium/i))

    expect(
      screen.getByRole('svg', {
        name: /ver opções/i
      })
    ).toBeInTheDocument()
  })

  it('O wrapper vai ser um li, e o wrapper do dropdown um UL', () => {
    render(<LinkMenuDesktop {...mockWithDropdownOptions} />)

    expect(
      screen.getByRole('listitem', {
        name: /opção premium/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  describe('Vai ter a possibilidade de ser um link CASO tenha dropdown e não ser um link caso NÃO tenha dropdown', () => {
    it('Vai ter um href na opção e vai ser um LINK caso ele tenha um dropdown', () => {
      render(<LinkMenuDesktop {...mockWithoutDropdownOptions} />)

      const optionPremium = screen.getByRole('link', {
        name: /premium/i
      })

      expect(optionPremium).toBeInTheDocument()

      expect(optionPremium).toHaveAttribute('href', '/artigo/premium')
    })

    it('Não vai ter um href na opção e não vai ser um link caso ele tenha um dropdown', () => {
      render(<LinkMenuDesktop {...mockWithDropdownOptions} />)

      const optionPremium = screen.getByText(/premium/i)

      expect(optionPremium).toBeInTheDocument()
      expect(optionPremium).not.toHaveAttribute('href', '/artigo/premium')
    })
  })
})
