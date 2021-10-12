import Link from 'next/link'

import { AnchorHTMLAttributes } from 'react'
import * as S from './styles'

import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline'

// Caso não tenha LinkMenuDesktop
// <ul> (menu)
//   <li>
//      <a>

// Caso tenha LinkMenuDesktop
//  <ul> (menu)
//    <ul>
//      <p>
//      <ul>
//        <li>

type LinkMenuDesktopTypes = {
  titleOption: string
  slug: string
}

export type LinkMenuDesktopProps = {
  title: string
  dropdownOptions?: LinkMenuDesktopTypes[]
  slug?: string
  isSelected?: boolean
  takeTitle?: (valueTitle: string) => void
} & AnchorHTMLAttributes<HTMLAnchorElement>

const LinkMenuDesktop = ({ dropdownOptions, title, slug }: LinkMenuDesktopProps) => {
  const hasLinkMenuDesktop = !!dropdownOptions?.length

  return (
    <S.Wrapper
      role="listitem"
      aria-label={hasLinkMenuDesktop ? `opção ${title}` : `${title}`}
    >
      <S.TitleWrapper>
        {hasLinkMenuDesktop ? (
          <>
            <S.Title>{title}</S.Title>
            <ArrowIosDownwardOutline title="Ver opções" role="svg" />
          </>
        ) : (
          <Link passHref href={`/artigo/${slug}`}>
            <S.Title as="a" role="link">
              {title}
            </S.Title>
          </Link>
        )}
      </S.TitleWrapper>

      {hasLinkMenuDesktop && (
        <S.Content aria-label="LinkMenuDesktop">
          {dropdownOptions?.map((item, index) => (
            <S.LinkMenuDesktopTitleWrapper key={index}>
              <Link passHref href={`/artigo/${item.slug}`}>
                <S.LinkMenuDesktopTitle>{item.titleOption}</S.LinkMenuDesktopTitle>
              </Link>
            </S.LinkMenuDesktopTitleWrapper>
          ))}
        </S.Content>
      )}
    </S.Wrapper>
  )
}

export default LinkMenuDesktop
