import { render, screen } from 'utils/test-utils'

import Compartilhe from '.'

describe('<Compartilhe />', () => {
  it('vai renderizar o componente', () => {
    render(<Compartilhe />)

    expect(screen.getByTitle(/linkedin/i)).toBeInTheDocument()
    expect(screen.getByTitle(/facebook/i)).toBeInTheDocument()
    expect(screen.getByTitle(/telegram/i)).toBeInTheDocument()
    expect(screen.getByTitle(/whatsapp/i)).toBeInTheDocument()
  })
})
