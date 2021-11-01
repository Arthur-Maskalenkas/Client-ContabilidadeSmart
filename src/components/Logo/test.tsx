import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('Vai renderizar o logo no tamanho médio', () => {
    render(<Logo size="medium" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      <div
        style="display: block; overflow: hidden; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; margin: 0px;"
      >
        <noscript />
        <img
          alt="Logo Contabilidade Smart"
          decoding="async"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"
        />
      </div>
    `)
  })

  it('Vai renderizar o logo no tamanho pequeno', () => {
    render(<Logo size="small" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      <div
        style="display: block; overflow: hidden; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; margin: 0px;"
      >
        <noscript />
        <img
          alt="Logo Contabilidade Smart"
          decoding="async"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"
        />
      </div>
    `)
  })

  it('Vai renderizar o logo no tamanho pequeno negativo', () => {
    render(<Logo size="smallNegativo" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      <div
        style="display: block; overflow: hidden; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; margin: 0px;"
      >
        <noscript />
        <img
          alt="Logo Contabilidade Smart"
          decoding="async"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"
        />
      </div>
    `)
  })
})
