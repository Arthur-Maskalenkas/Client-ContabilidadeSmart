import { render, screen } from 'utils/test-utils'

import BuscarButton from '.'

describe('<BuscarButton />', () => {
  it('renderiza o componente', () => {
    render(<BuscarButton icon="NavigateNext" lastPage={2} currentPage={1} />)

    const button = screen.getByRole('svg', { name: /next pagination/i })

    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  describe('NavigateNextVerifications', () => {
    it('vai ficar desabilitado caso seja um botão de next e esteja na ultima pagina', () => {
      render(<BuscarButton icon="NavigateNext" lastPage={2} currentPage={2} />)

      const button = screen.getByLabelText(/proxima pagina/i)

      expect(button).toBeDisabled()
    })

    it('vai ficar habilitado caso seja um botão de next e não esteja na ultima pagina', () => {
      render(<BuscarButton icon="NavigateNext" lastPage={5} currentPage={3} />)

      const button = screen.getByLabelText(/proxima pagina/i)

      expect(button).not.toBeDisabled()
    })
  })

  describe('NavigateBeforeVerifications', () => {
    it('vai ficar desabilitado caso seja um botão de before e esteja na primeira pagina', () => {
      render(
        <BuscarButton icon="NavigateBefore" lastPage={2} currentPage={1} />
      )

      const button = screen.getByLabelText(/pagina anterior/i)

      expect(button).toBeDisabled()
    })

    it('vai ficar habilitado caso seja um botão de before e não esteja na primeira pagina', () => {
      render(
        <BuscarButton icon="NavigateBefore" lastPage={5} currentPage={3} />
      )

      const button = screen.getByLabelText(/pagina anterior/i)

      expect(button).not.toBeDisabled()
    })
  })

  it('vai sumir caso não tenha nenhuma pagina', () => {
    render(<BuscarButton icon="NavigateNext" lastPage={1} currentPage={1} />)

    const button = screen.getByLabelText(/proxima pagina/i)

    expect(button).toHaveStyle({ display: 'none' })
  })
})
