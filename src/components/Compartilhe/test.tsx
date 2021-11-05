import { Provider } from 'react-redux'
import { rootReducer } from 'store/store'
import { API_WHATSAPP, LINK_SITE } from 'utils/globalVars'
import { render, screen } from 'utils/test-utils'

import Compartilhe from '.'
import { paginaSliceReducer } from './mock'

describe('<Compartilhe />', () => {
  it('vai renderizar o componente', () => {
    render(
      <Provider store={rootReducer}>
        <Compartilhe pageType="home" />
      </Provider>
    )

    expect(
      screen.getByLabelText(/compartilhar no Facebook/i)
    ).toBeInTheDocument()

    expect(
      screen.getByLabelText(/compartilhar no Whatsapp/i)
    ).toBeInTheDocument()

    expect(
      screen.getByLabelText(/compartilhar no Linkedin/i)
    ).toBeInTheDocument()
  })

  describe('Whatsapp Icon', () => {
    it('Vai renderizar um link para home no icone do Whatsapp', () => {
      render(
        <Provider store={rootReducer}>
          <Compartilhe pageType="home" />
        </Provider>
      )

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}`
      )
    })

    it('Vai renderizar um link para categorias no icone do Whatsapp', () => {
      render(
        <Provider store={paginaSliceReducer}>
          <Compartilhe pageType="categorias" slug="teste" />
        </Provider>
      )

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}/buscar?categorias=teste`
      )
    })
  })

  //   it('Vai renderizar um link para tags no icone do Whatsapp', () => {
  //     render(<Compartilhe pageType="tags" slug="teste" />)

  //     const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

  //     expect(whatsappIcon).toHaveAttribute(
  //       'href',
  //       `${API_WHATSAPP}${LINK_SITE}/buscar?tags=teste`
  //     )
  //   })

  //   it('Vai renderizar um link para artigo no icone do Whatsapp', () => {
  //     render(<Compartilhe pageType="artigo" slug="teste" />)

  //     const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

  //     expect(whatsappIcon).toHaveAttribute(
  //       'href',
  //       `${API_WHATSAPP}${LINK_SITE}/artigo/teste`
  //     )
  //   })
  // })

  // describe('Facebook icon', () => {
  //   it('Vai renderizar um link para home no icone do Facebook', () => {
  //     render(<Compartilhe pageType="home" />)

  //     const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

  //     expect(FacebookIcon).toHaveAttribute(
  //       'href',
  //       `${API_FACEBOOK}${LINK_SITE}`
  //     )
  //   })

  //   it('Vai renderizar um link para categorias no icone do Facebook', () => {
  //     render(<Compartilhe pageType="categorias" slug="teste" />)

  //     const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

  //     expect(FacebookIcon).toHaveAttribute(
  //       'href',
  //       `${API_FACEBOOK}${LINK_SITE}/buscar?categorias=teste`
  //     )
  //   })

  //   it('Vai renderizar um link para tags no icone do Facebook', () => {
  //     render(<Compartilhe pageType="tags" slug="teste" />)

  //     const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

  //     expect(FacebookIcon).toHaveAttribute(
  //       'href',
  //       `${API_FACEBOOK}${LINK_SITE}/buscar?tags=teste`
  //     )
  //   })

  //   it('Vai renderizar um link para artigo no icone do Facebook', () => {
  //     render(<Compartilhe pageType="artigo" slug="teste" />)

  //     const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

  //     expect(FacebookIcon).toHaveAttribute(
  //       'href',
  //       `${API_FACEBOOK}${LINK_SITE}/artigo/teste`
  //     )
  //   })
  // })

  // describe('Linkedin icon', () => {
  //   it('Vai renderizar um link para home no icone do Linkedin', () => {
  //     render(<Compartilhe pageType="home" />)

  //     const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

  //     expect(LinkedinIcon).toHaveAttribute(
  //       'href',
  //       `${API_LINKEDIN}${LINK_SITE}`
  //     )
  //   })

  //   it('Vai renderizar um link para categorias no icone do Linkedin', () => {
  //     render(<Compartilhe pageType="categorias" slug="teste" />)

  //     const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

  //     expect(LinkedinIcon).toHaveAttribute(
  //       'href',
  //       `${API_LINKEDIN}${LINK_SITE}/buscar?categorias=teste`
  //     )
  //   })

  //   it('Vai renderizar um link para tags no icone do Linkedin', () => {
  //     render(<Compartilhe pageType="tags" slug="teste" />)

  //     const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

  //     expect(LinkedinIcon).toHaveAttribute(
  //       'href',
  //       `${API_LINKEDIN}${LINK_SITE}/buscar?tags=teste`
  //     )
  //   })

  //   it('Vai renderizar um link para artigo no icone do Linkedin', () => {
  //     render(<Compartilhe pageType="artigo" slug="teste" />)

  //     const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

  //     expect(LinkedinIcon).toHaveAttribute(
  //       'href',
  //       `${API_LINKEDIN}${LINK_SITE}/artigo/teste`
  //     )
  //   })
  // })
})
