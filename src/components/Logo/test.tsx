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
        width: 25rem;
        height: 25rem;
      }

      .c0 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (max-width:768px) {
        .c0 {
          width: 100%;
        }
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          src="https://contabilidadesmart.com.br/wp-content/uploads/2021/06/Contabilidade-Smart.jpg"
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

      @media (max-width:768px) {
        .c0 {
          width: 100%;
        }
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          src="https://contabilidadesmart.com.br/wp-content/uploads/2021/06/Contabilidade-Smart.jpg"
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
        width: 17rem;
        height: 17rem;
      }

      .c0 img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (max-width:768px) {
        .c0 {
          width: 100%;
        }
      }

      <div
        class="c0"
      >
        <img
          alt="Logo Contabilidade Smart"
          src="https://contabilidadesmart.com.br/wp-content/uploads/2021/06/Contabilidade-Smart-negativo.png"
        />
      </div>
    `)
  })
})
