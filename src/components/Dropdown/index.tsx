import { AnchorHTMLAttributes, useState } from 'react'
import * as S from './styles'

import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline'

// Caso não tenha dropdown
// <ul> (menu)
//   <li>
//      <a>

// Caso tenha dropdown
//  <ul> (menu)
//    <ul>
//      <p>
//      <ul>
//        <li>

type dropdownTypes = {
  title: string
  link: string
}

export type DropdownProps = {
  title: string
  dropdownOptions?: dropdownTypes[]
  titleLink?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Dropdown = ({ dropdownOptions, title, titleLink }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const hasDropdown = !!dropdownOptions

  return (
    <S.Wrapper isOpen={isOpen} as={hasDropdown ? 'ul' : 'li'}>
      <S.TitleWrapper onClick={() => setIsOpen(!isOpen)}>
        {hasDropdown ? (
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

      {hasDropdown && (
        <S.Content aria-hidden={!isOpen} aria-label="dropdown">
          {dropdownOptions!.map((item, index) => (
            <S.DropdownTitleWrapper key={index}>
              <S.DropdownTitle>{item.title}</S.DropdownTitle>
            </S.DropdownTitleWrapper>
          ))}
        </S.Content>
      )}
    </S.Wrapper>
  )
}

export default Dropdown
