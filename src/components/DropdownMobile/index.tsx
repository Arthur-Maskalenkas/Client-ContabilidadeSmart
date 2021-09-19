import * as S from './styles'

import { ArrowRight } from '@styled-icons/fa-solid'
import { AnchorHTMLAttributes, useState } from 'react'

type dropDownTypes = {
  title: string
  link: string
}

export type DropDownMobileProps = {
  dropdownOptions?: dropDownTypes[]
  title: string
  titleLink?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

const DropdownMobile = ({
  dropdownOptions,
  title,
  titleLink,
  ...props
}: DropDownMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const hasDropdown = !!dropdownOptions

  // Tamanho de cada menu (56px)
  const quantityItemsDropdown = dropdownOptions && dropdownOptions?.length * -5.6

  return (
    <S.Wrapper isOpen={isOpen} quantityDropdown={quantityItemsDropdown as number}>
      <S.TitleWrapper onClick={() => setIsOpen(!isOpen)}>
        {hasDropdown ? (
          <S.Title>{title}</S.Title>
        ) : (
          <S.Title href={titleLink} as="a" role="link">
            {title}
          </S.Title>
        )}

        {hasDropdown && <ArrowRight />}
      </S.TitleWrapper>

      {hasDropdown && (
        <S.DropdownList aria-hidden={!isOpen} aria-label="dropdown">
          {dropdownOptions!.map((item, index) => (
            <S.DropdownItemWrapper key={index}>
              <S.DropdownItem>{item.title}</S.DropdownItem>
            </S.DropdownItemWrapper>
          ))}
        </S.DropdownList>
      )}
    </S.Wrapper>
  )
}

export default DropdownMobile
