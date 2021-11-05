import { useEffect, useState } from 'react'

import { useAppSelector } from 'hooks/Store'

import {
  API_FACEBOOK,
  API_LINKEDIN,
  API_WHATSAPP,
  LINK_SITE
} from 'utils/globalVars'
import * as S from './styles'
import { Facebook, Linkedin, Whatsapp } from '@styled-icons/bootstrap'

export type PageTypes = 'categorias' | 'tags' | 'home' | 'artigo'
type SocialLinkTypes = 'facebook' | 'linkedin' | 'whatsapp'

const Compartilhe = () => {
  const [paginaAtual, setPaginaAtual] = useState<PageTypes>('home')
  const [slugAtual, setSlugAtual] = useState<string>('')

  const paginaAtualStorageSelector = useAppSelector(
    (state) => state.paginaSlice.paginaAtual
  )

  const slugAtualStorageSelector = useAppSelector(
    (state) => state.slugSlice.slugAtual
  )

  useEffect(() => {
    setPaginaAtual(paginaAtualStorageSelector)
    setSlugAtual(slugAtualStorageSelector)
  }, [paginaAtualStorageSelector, slugAtualStorageSelector])

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
    socialLink: SocialLinkTypes,
    slug: string
  ): string => {
    const operationDefine = operations[socialLink]

    const operationResolved = operationDefine(paginaAtual, slug)

    return operationResolved
  }

  return (
    <S.Wrapper>
      <S.Title>Compartilhe com os amigos</S.Title>

      <S.ListIconsWrapper>
        <a
          href={resolveShareButton('facebook', slugAtual)}
          aria-label="Compartilhar no Facebook"
        >
          <S.IconWrapper>
            <Facebook />
          </S.IconWrapper>
        </a>

        <a
          href={resolveShareButton('linkedin', slugAtual)}
          aria-label="Compartilhar no linkedin"
        >
          <S.IconWrapper>
            <Linkedin />
          </S.IconWrapper>
        </a>

        <a
          href={resolveShareButton('whatsapp', slugAtual)}
          aria-label="Compartilhar no Whatsapp"
        >
          <S.IconWrapper>
            <Whatsapp />
          </S.IconWrapper>
        </a>
      </S.ListIconsWrapper>
    </S.Wrapper>
  )
}
export default Compartilhe
