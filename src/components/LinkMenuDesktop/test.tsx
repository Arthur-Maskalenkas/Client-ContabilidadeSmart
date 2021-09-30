import { render, screen } from 'utils/test-utils'

import mock from './mock'

import LinkMenuDesktop from '.'

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

  describe('O wrapper vai ter a possibilidade de ser um ul ou um li', () => {
    it('Vai ser um li caso não tenha LinkMenuDesktop', () => {
      render(<LinkMenuDesktop title="Premium" slug="premium" />)

      expect(screen.getByRole('listitem', { name: /Premium/i })).toBeInTheDocument()
    })

    it('Vai ser um ul caso tenha LinkMenuDesktop', () => {
      render(<LinkMenuDesktop {...mock} />)

      expect(screen.getByRole('list', { name: /Premium opções/i })).toBeInTheDocument()
    })
  })
})
