import { fireEvent, render, screen } from 'utils/test-utils'

import mock from './mock'

import Menu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/',

  catch: () => null,
  prefetch: () => null
}))

describe('<Menu />', () => {
  it('Deve abrir/fechar o menu', () => {
    render(<Menu {...mock} />)

    // selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', {
      hidden: true
    })

    // verificar se o menu tá escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({
      opacity: 1
    })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    })
  })

  it('Deve renderizar todas as opções', () => {
    render(<Menu {...mock} />)

    // 1 no desktop e outra no mobile
    expect(screen.getAllByText(/infoprodutores/i)).toHaveLength(2)
    expect(screen.getAllByText(/Premium/i)).toHaveLength(2)
    expect(screen.getAllByText(/Nosso trabalho/i)).toHaveLength(2)
    expect(screen.getAllByText(/Sobre nós/i)).toHaveLength(2)
    expect(screen.getAllByText(/Blog/i)).toHaveLength(2)
    expect(screen.getAllByText(/Home/i)).toHaveLength(2)
  })
})
