import * as S from './styles'

import { ArrowDownCircleFill } from '@styled-icons/bootstrap/ArrowDownCircleFill'
import { useState } from 'react'

type dropDownTypes = {
  title: string
  link: string
}

export type DropDownMobileProps = {
  dropdownOptions?: dropDownTypes[]
  title: string
  titleLink?: string
  hasDropdown?: boolean
}
const DropdownMobile = ({
  dropdownOptions,
  title,
  hasDropdown = !!dropdownOptions
}: DropDownMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  // Tamanho de cada menu
  const quantityItemsDropdown = dropdownOptions && dropdownOptions?.length * -5.6

  return (
    <S.Wrapper isOpen={isOpen} quantityDropdown={quantityItemsDropdown as number}>
      <S.TitleWrapper onClick={() => setIsOpen(!isOpen)}>
        <S.Title>{title}</S.Title>
        {hasDropdown && <ArrowDownCircleFill />}
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
