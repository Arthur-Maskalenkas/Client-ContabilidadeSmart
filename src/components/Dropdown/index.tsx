import { AnchorHTMLAttributes, useState } from 'react'
import * as S from './styles'

import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline'

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
  const [isOpen, setIsOpen] = useState(!false)

  const hasDropdown = !!dropdownOptions

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.TitleWrapper onClick={() => setIsOpen(!isOpen)}>
        <S.Title>{title}</S.Title>
        <ArrowIosDownwardOutline />
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
