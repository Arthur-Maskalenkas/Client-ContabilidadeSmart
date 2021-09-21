import Link from 'next/link'

import { AnchorHTMLAttributes, useState } from 'react'
import * as S from './styles'

import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline'
import { useEffect } from 'react'

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
  title: string
  slug: string
}

export type LinkMenuDesktopProps = {
  title: string
  LinkMenuDesktopOptions?: LinkMenuDesktopTypes[]
  slug?: string
  isSelected?: boolean
  takeTitle?: (valueTitle: string) => void
} & AnchorHTMLAttributes<HTMLAnchorElement>

const LinkMenuDesktop = ({
  LinkMenuDesktopOptions,
  title,
  slug,
  isSelected = false,
  takeTitle
}: LinkMenuDesktopProps) => {
  const [isOpen, setIsOpen] = useState(isSelected)

  const hasLinkMenuDesktop = !!LinkMenuDesktopOptions

  useEffect(() => {
    setIsOpen(isSelected)
  }, [isOpen, setIsOpen, isSelected])

  function returnTitle(stringValue: string) {
    if (takeTitle) {
      takeTitle(stringValue)
    }
  }

  return (
    <S.Wrapper isOpen={isOpen} as={hasLinkMenuDesktop ? 'ul' : 'li'}>
      <S.TitleWrapper>
        {hasLinkMenuDesktop ? (
          <>
            <S.Title onClick={() => returnTitle(title)}>{title}</S.Title>
            <ArrowIosDownwardOutline
              onClick={() => returnTitle(title)}
              title="Ver opções"
              role="svg"
            />
          </>
        ) : (
          <Link passHref href={`posts/${slug}`}>
            <S.Title as="a" role="link" onClick={() => returnTitle(title)}>
              {title}
            </S.Title>
          </Link>
        )}
      </S.TitleWrapper>

      {hasLinkMenuDesktop && (
        <S.Content aria-hidden={!isOpen} aria-label="LinkMenuDesktop">
          {LinkMenuDesktopOptions!.map((item, index) => (
            <S.LinkMenuDesktopTitleWrapper key={index}>
              <Link passHref href={`posts/${item.slug}`}>
                <S.LinkMenuDesktopTitle>{item.title}</S.LinkMenuDesktopTitle>
              </Link>
            </S.LinkMenuDesktopTitleWrapper>
          ))}
        </S.Content>
      )}
    </S.Wrapper>
  )
}

export default LinkMenuDesktop
