import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('Vai renderizar o logo no tamanho médio', () => {
    render(<Logo size="medium" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        width: 15rem;
        margin-left: auto;
        margin-right: auto;
        height: 9rem;
        cursor: pointer;
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          layout="fill"
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635637148/oie_nCSTx3nxueCx_j5pgdc.png"
        />
      </div>
    `)
  })

  it('Vai renderizar o logo no tamanho pequeno', () => {
    render(<Logo size="small" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        width: 15rem;
        margin-left: auto;
        margin-right: auto;
        height: 9rem;
        cursor: pointer;
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          layout="fill"
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635637148/oie_nCSTx3nxueCx_j5pgdc.png"
        />
      </div>
    `)
  })

  it('Vai renderizar o logo no tamanho pequeno negativo', () => {
    render(<Logo size="smallNegativo" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      .c0 {
        position: relative;
        width: 17rem;
        margin-left: auto;
        margin-right: auto;
        height: 17rem;
        cursor: pointer;
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          layout="fill"
          src="https://res.cloudinary.com/dezwlfeyb/image/upload/v1635828132/Contabilidade-Smart-negativo-172_swyhjt.png"
        />
      </div>
    `)
  })
})
