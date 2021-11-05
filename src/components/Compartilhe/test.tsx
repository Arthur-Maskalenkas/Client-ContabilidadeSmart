import { Provider } from 'react-redux'
import {
  API_FACEBOOK,
  API_LINKEDIN,
  API_WHATSAPP,
  LINK_SITE
} from 'utils/globalVars'
import { render, screen } from 'utils/test-utils'

import Compartilhe from '.'
import {
  storePaginaArtigoMock,
  storePaginaCategoriasMock,
  storePaginaHomeMock,
  storePaginaTagsMock
} from './mock'

describe('<Compartilhe />', () => {
  it('vai renderizar o componente', () => {
    render(
      <Provider store={storePaginaHomeMock}>
        <Compartilhe />
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
        <Provider store={storePaginaHomeMock}>
          <Compartilhe />
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
        <Provider store={storePaginaCategoriasMock}>
          <Compartilhe />
        </Provider>
      )

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}/buscar?categorias=teste`
      )
    })

    it('Vai renderizar um link para tags no icone do Whatsapp', () => {
      render(
        <Provider store={storePaginaTagsMock}>
          <Compartilhe />
        </Provider>
      )

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}/buscar?tags=teste`
      )
    })

    it('Vai renderizar um link para artigo no icone do Whatsapp', () => {
      render(
        <Provider store={storePaginaArtigoMock}>
          <Compartilhe />
        </Provider>
      )

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}/artigo/teste`
      )
    })
  })

  describe('Facebook icon', () => {
    it('Vai renderizar um link para home no icone do Facebook', () => {
      render(
        <Provider store={storePaginaHomeMock}>
          <Compartilhe />
        </Provider>
      )

      const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

      expect(FacebookIcon).toHaveAttribute(
        'href',
        `${API_FACEBOOK}${LINK_SITE}`
      )
    })

    it('Vai renderizar um link para categorias no icone do Facebook', () => {
      render(
        <Provider store={storePaginaCategoriasMock}>
          <Compartilhe />
        </Provider>
      )

      const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

      expect(FacebookIcon).toHaveAttribute(
        'href',
        `${API_FACEBOOK}${LINK_SITE}/buscar?categorias=teste`
      )
    })

    it('Vai renderizar um link para tags no icone do Facebook', () => {
      render(
        <Provider store={storePaginaTagsMock}>
          <Compartilhe />
        </Provider>
      )

      const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

      expect(FacebookIcon).toHaveAttribute(
        'href',
        `${API_FACEBOOK}${LINK_SITE}/buscar?tags=teste`
      )
    })

    it('Vai renderizar um link para artigo no icone do Facebook', () => {
      render(
        <Provider store={storePaginaArtigoMock}>
          <Compartilhe />
        </Provider>
      )

      const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

      expect(FacebookIcon).toHaveAttribute(
        'href',
        `${API_FACEBOOK}${LINK_SITE}/artigo/teste`
      )
    })
  })

  describe('Linkedin icon', () => {
    it('Vai renderizar um link para home no icone do Linkedin', () => {
      render(
        <Provider store={storePaginaHomeMock}>
          <Compartilhe />
        </Provider>
      )

      const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

      expect(LinkedinIcon).toHaveAttribute(
        'href',
        `${API_LINKEDIN}${LINK_SITE}`
      )
    })

    it('Vai renderizar um link para categorias no icone do Linkedin', () => {
      render(
        <Provider store={storePaginaCategoriasMock}>
          <Compartilhe />
        </Provider>
      )

      const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

      expect(LinkedinIcon).toHaveAttribute(
        'href',
        `${API_LINKEDIN}${LINK_SITE}/buscar?categorias=teste`
      )
    })

    it('Vai renderizar um link para tags no icone do Linkedin', () => {
      render(
        <Provider store={storePaginaTagsMock}>
          <Compartilhe />
        </Provider>
      )

      const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

      expect(LinkedinIcon).toHaveAttribute(
        'href',
        `${API_LINKEDIN}${LINK_SITE}/buscar?tags=teste`
      )
    })

    it('Vai renderizar um link para artigo no icone do Linkedin', () => {
      render(
        <Provider store={storePaginaArtigoMock}>
          <Compartilhe />
        </Provider>
      )

      const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

      expect(LinkedinIcon).toHaveAttribute(
        'href',
        `${API_LINKEDIN}${LINK_SITE}/artigo/teste`
      )
    })
  })
})
