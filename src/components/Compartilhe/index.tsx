import IconsWrapper from 'components/IconsWrapper'
import {
  API_FACEBOOK,
  API_LINKEDIN,
  API_WHATSAPP,
  LINK_SITE
} from 'utils/globalVars'
import * as S from './styles'

export type PageTypes = 'categorias' | 'tags' | 'home' | 'artigo'
type SocialLinkTypes = 'facebook' | 'linkedin' | 'whatsapp'

export type CompartilheProps = {
  pageType: PageTypes
  slug?: string
}

const Compartilhe = ({ pageType = 'artigo', slug = '' }: CompartilheProps) => {
  const pagesOperations = {
    home: (api: string) => {
      return `${api}${LINK_SITE}`
    },
    categorias: (api: string, slug: string) => {
      return `${api}${LINK_SITE}/buscar?categorias=${slug}`
    },
    tags: (api: string, slug: string) => {
      return `${api}${LINK_SITE}/buscar?tags=${slug}`
    },
    artigo: (api: string, slug: string) => {
      return `${api}${LINK_SITE}/artigo/${slug}`
    }
  }

  const operations = {
    whatsapp: (pageType: PageTypes, slug: string) => {
      const pageDefine = pagesOperations[pageType]
      const pageResolved = pageDefine(API_WHATSAPP, slug)

      return pageResolved
    },
    linkedin: (pageType: PageTypes, slug: string) => {
      const pageDefine = pagesOperations[pageType]
      const pageResolved = pageDefine(API_LINKEDIN, slug)

      return pageResolved
    },
    facebook: (pageType: PageTypes, slug: string) => {
      const pageDefine = pagesOperations[pageType]
      const pageResolved = pageDefine(API_FACEBOOK, slug)

      return pageResolved
    }
  }

  const resolveShareButton = (
    pageType: PageTypes,
    socialLink: SocialLinkTypes,
    slug: string
  ): string => {
    const operationDefine = operations[socialLink]

    const operationResolved = operationDefine(pageType, slug)

    return operationResolved
  }

  return (
    <S.Wrapper>
      <S.Title>Compartilhe com os amigos</S.Title>

      <S.ListIconsWrapper>
        <a
          href={resolveShareButton(pageType, 'facebook', slug)}
          aria-label="Compartilhar no Facebook"
        >
          <S.IconWrapper>
            <IconsWrapper icon="Facebook" />
          </S.IconWrapper>
        </a>

        <a
          href={resolveShareButton(pageType, 'linkedin', slug)}
          aria-label="Compartilhar no linkedin"
        >
          <S.IconWrapper>
            <IconsWrapper icon="Linkedin" />
          </S.IconWrapper>
        </a>

        <a
          href={resolveShareButton(pageType, 'whatsapp', slug)}
          aria-label="Compartilhar no Whatsapp"
        >
          <S.IconWrapper>
            <IconsWrapper icon="Whatsapp" />
          </S.IconWrapper>
        </a>
      </S.ListIconsWrapper>
    </S.Wrapper>
  )
}
export default Compartilhe
