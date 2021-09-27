import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('vai renderizar os icones', () => {
    render(<Footer />)

    expect(screen.getByRole('svg', { name: /Linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('svg', { name: /Instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('svg', { name: /Whatsapp/i })).toBeInTheDocument()
    expect(screen.getByRole('svg', { name: /Gmail/i })).toBeInTheDocument()
  })
})
