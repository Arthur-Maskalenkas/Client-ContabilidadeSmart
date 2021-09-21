import { AnchorHTMLAttributes, useState } from 'react'
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
  title: string
  link: string
}

export type LinkMenuDesktopProps = {
  title: string
  LinkMenuDesktopOptions?: LinkMenuDesktopTypes[]
  titleLink?: string
  isSelected?: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>

const LinkMenuDesktop = ({
  LinkMenuDesktopOptions,
  title,
  titleLink,
  isSelected = false
}: LinkMenuDesktopProps) => {
  const [isOpen, setIsOpen] = useState(isSelected)

  const hasLinkMenuDesktop = !!LinkMenuDesktopOptions

  return (
    <S.Wrapper isOpen={isOpen} as={hasLinkMenuDesktop ? 'ul' : 'li'}>
      <S.TitleWrapper>
        {hasLinkMenuDesktop ? (
          <>
            <S.Title>{title}</S.Title>
            <ArrowIosDownwardOutline title="Ver opções" role="svg" />
          </>
        ) : (
          <S.Title href={titleLink} as="a" role="link">
            {title}
          </S.Title>
        )}
      </S.TitleWrapper>

      {hasLinkMenuDesktop && (
        <S.Content aria-hidden={!isOpen} aria-label="LinkMenuDesktop">
          {LinkMenuDesktopOptions!.map((item, index) => (
            <S.LinkMenuDesktopTitleWrapper key={index}>
              <S.LinkMenuDesktopTitle>{item.title}</S.LinkMenuDesktopTitle>
            </S.LinkMenuDesktopTitleWrapper>
          ))}
        </S.Content>
      )}
    </S.Wrapper>
  )
}

export default LinkMenuDesktop
