import {
  API_FACEBOOK,
  API_LINKEDIN,
  API_WHATSAPP,
  LINK_SITE
} from 'utils/globalVars'
import { render, screen } from 'utils/test-utils'

import Compartilhe from '.'

describe('<Compartilhe />', () => {
  it('vai renderizar o componente', () => {
    render(<Compartilhe pageType="home" />)

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
      render(<Compartilhe pageType="home" />)

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}`
      )
    })

    it('Vai renderizar um link para categorias no icone do Whatsapp', () => {
      render(<Compartilhe pageType="categoria" slug="teste" />)

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}/buscar?categorias=teste`
      )
    })

    it('Vai renderizar um link para tags no icone do Whatsapp', () => {
      render(<Compartilhe pageType="tag" slug="teste" />)

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}/buscar?tags=teste`
      )
    })

    it('Vai renderizar um link para artigo no icone do Whatsapp', () => {
      render(<Compartilhe pageType="artigo" slug="teste" />)

      const whatsappIcon = screen.getByLabelText(/compartilhar no Whatsapp/i)

      expect(whatsappIcon).toHaveAttribute(
        'href',
        `${API_WHATSAPP}${LINK_SITE}/artigo/teste`
      )
    })
  })

  describe('Facebook icon', () => {
    it('Vai renderizar um link para home no icone do Facebook', () => {
      render(<Compartilhe pageType="home" />)

      const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

      expect(FacebookIcon).toHaveAttribute(
        'href',
        `${API_FACEBOOK}${LINK_SITE}`
      )
    })

    it('Vai renderizar um link para categorias no icone do Facebook', () => {
      render(<Compartilhe pageType="categoria" slug="teste" />)

      const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

      expect(FacebookIcon).toHaveAttribute(
        'href',
        `${API_FACEBOOK}${LINK_SITE}/buscar?categorias=teste`
      )
    })

    it('Vai renderizar um link para tags no icone do Facebook', () => {
      render(<Compartilhe pageType="tag" slug="teste" />)

      const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

      expect(FacebookIcon).toHaveAttribute(
        'href',
        `${API_FACEBOOK}${LINK_SITE}/buscar?tags=teste`
      )
    })

    it('Vai renderizar um link para artigo no icone do Facebook', () => {
      render(<Compartilhe pageType="artigo" slug="teste" />)

      const FacebookIcon = screen.getByLabelText(/compartilhar no Facebook/i)

      expect(FacebookIcon).toHaveAttribute(
        'href',
        `${API_FACEBOOK}${LINK_SITE}/artigo/teste`
      )
    })
  })

  describe('Linkedin icon', () => {
    it('Vai renderizar um link para home no icone do Linkedin', () => {
      render(<Compartilhe pageType="home" />)

      const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

      expect(LinkedinIcon).toHaveAttribute(
        'href',
        `${API_LINKEDIN}${LINK_SITE}`
      )
    })

    it('Vai renderizar um link para categorias no icone do Linkedin', () => {
      render(<Compartilhe pageType="categoria" slug="teste" />)

      const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

      expect(LinkedinIcon).toHaveAttribute(
        'href',
        `${API_LINKEDIN}${LINK_SITE}/buscar?categorias=teste`
      )
    })

    it('Vai renderizar um link para tags no icone do Linkedin', () => {
      render(<Compartilhe pageType="tag" slug="teste" />)

      const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

      expect(LinkedinIcon).toHaveAttribute(
        'href',
        `${API_LINKEDIN}${LINK_SITE}/buscar?tags=teste`
      )
    })

    it('Vai renderizar um link para artigo no icone do Linkedin', () => {
      render(<Compartilhe pageType="artigo" slug="teste" />)

      const LinkedinIcon = screen.getByLabelText(/compartilhar no Linkedin/i)

      expect(LinkedinIcon).toHaveAttribute(
        'href',
        `${API_LINKEDIN}${LINK_SITE}/artigo/teste`
      )
    })
  })
})
