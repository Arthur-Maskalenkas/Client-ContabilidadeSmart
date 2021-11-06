import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('vai renderizar os icones', () => {
    const { container } = render(<Footer />)

    expect(
      screen.getByRole('listitem', { name: /Linkedin/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('listitem', { name: /Instagram/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('listitem', { name: /Whatsapp/i })
    ).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
