import * as S from './styles'

import { ArrowRight } from '@styled-icons/fa-solid'
import { useState } from 'react'

type dropDownTypes = {
  title: string
  link: string
}

export type DropDownMobileProps = {
  dropdownOptions?: dropDownTypes[]
  title: string
  titleLink?: string
}
const DropdownMobile = ({ dropdownOptions, title }: DropDownMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const hasDropdown = !!dropdownOptions

  // Tamanho de cada menu (56px)
  const quantityItemsDropdown = dropdownOptions && dropdownOptions?.length * -5.6

  return (
    <S.Wrapper isOpen={isOpen} quantityDropdown={quantityItemsDropdown as number}>
      <S.TitleWrapper onClick={() => setIsOpen(!isOpen)}>
        <S.Title>{title}</S.Title>
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
