import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByText('MM')).toBeInTheDocument()
  })

  it('deve abrir o modal de criar noticia', () => {
    renderWithTheme(<Menu username="dsadas" />)

    expect(screen.getByLabelText(/modal de criar noticia/i)).toHaveStyle({
      opacity: 0
    })

    fireEvent.click(screen.getByText(/criar noticias/i))

    expect(screen.getByLabelText(/modal de criar noticia/i)).toHaveStyle({
      opacity: 1
    })
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu tá escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/abrir menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/fechar menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/minha conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/criar noticias/i)).not.toBeInTheDocument()

    expect(screen.getByText(/Entrar/i)).toBeInTheDocument()
    expect(screen.getAllByText(/criar conta/i)).toHaveLength(2)
  })

  it('deve mostrar algumas coisas quando conectado na conta', () => {
    renderWithTheme(<Menu username="will" />)

    expect(screen.getByText(/criar noticias/i)).toBeInTheDocument()
    expect(screen.getByText(/Minha conta/i)).toBeInTheDocument()
    expect(screen.queryByText(/criar conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Entrar/i)).not.toBeInTheDocument()
  })
})
