import { render } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('Vai renderizar o logo no tamanho médio', () => {
    render(<Logo size="medium" />)

    // expect(
    //   screen.getByAltText(/Logo Contabilidade Smart/i).parentElement
    // ).toMatchInlineSnapshot()
  })

  it('Vai renderizar o logo no tamanho pequeno', () => {
    render(<Logo size="small" />)

    // expect(
    //   screen.getByAltText(/Logo Contabilidade Smart/i).parentElement
    // ).toMatchInlineSnapshot()
  })

  it('Vai renderizar o logo no tamanho pequeno negativo', () => {
    render(<Logo size="smallNegativo" />)

    // expect(
    //   screen.getByAltText(/Logo Contabilidade Smart/i).parentElement
    // ).toMatchInlineSnapshot()
  })
})
