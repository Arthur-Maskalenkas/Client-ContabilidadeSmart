import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('Vai renderizar o logo no tamanho médio', () => {
    render(<Logo size="medium" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      .c0 {
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 35rem;
        height: 35rem;
      }

      .c0 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          src="img/logo/Contabilidade-Smart-255.jpg"
        />
      </div>
    `)
  })

  it('Vai renderizar o logo no tamanho pequeno', () => {
    render(<Logo size="small" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      .c0 {
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 25rem;
        height: 25rem;
      }

      .c0 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          src="img/logo/Contabilidade-Smart-350.jpg"
        />
      </div>
    `)
  })

  it('Vai renderizar o logo no tamanho pequeno negativo', () => {
    render(<Logo size="smallNegativo" />)

    expect(screen.getByAltText(/Logo Contabilidade Smart/i).parentElement)
      .toMatchInlineSnapshot(`
      .c0 {
        -webkit-flex-shrink: 0;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 25rem;
        height: 25rem;
      }

      .c0 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          src="img/logo/Contabilidade-Smart-negativo-172.png"
        />
      </div>
    `)
  })
})
