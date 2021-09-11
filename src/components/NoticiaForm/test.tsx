import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import NoticiaForm from '.'

describe('<NoticiaForm />', () => {
  it('vai renderizar os elementos', () => {
    const setIsOpen = jest.fn()
    renderWithTheme(<NoticiaForm setIsOpen={setIsOpen} isOpen={true} />)

    expect(screen.getByPlaceholderText(/titulo/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/descrição/i)).toBeInTheDocument()
    expect(screen.getByText(/criar noticia/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/fechar noticiaform/i)).toBeInTheDocument()
  })

  it('Vai renderizar o modal e fechar ele', async () => {
    const isOpen = true
    const setIsOpen = jest.fn()

    renderWithTheme(<NoticiaForm setIsOpen={setIsOpen} isOpen={isOpen} />)

    // Seleciona o noticiasform
    const NoticiaFormElement = screen.getByRole('form', { hidden: true })

    // Verifica se ele esta aberto
    expect(NoticiaFormElement).toHaveStyle({
      opacity: 1
    })

    // Verifica se o menu fecha quando clica no x
    fireEvent.click(screen.getByLabelText(/fechar noticiaform/i))

    expect(setIsOpen).toHaveBeenCalledTimes(1)
  })
})
