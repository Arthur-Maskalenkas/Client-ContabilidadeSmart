import * as S from './styles'

import { ArrowDownCircleFill } from '@styled-icons/bootstrap/ArrowDownCircleFill'
import { useState } from 'react'

type dropDownTypes = {
  title: string
  link: string
}

export type DropDownMobileProps = {
  dropdownOptions: dropDownTypes[]
  title: string
}
const DropdownMobile = ({ dropdownOptions, title }: DropDownMobileProps) => {
  const [isOpen, setIsOpen] = useState(!false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

      <S.DropdownList aria-hidden={!isOpen} aria-label="dropdown">
        {dropdownOptions.map((item, index) => (
          <S.DropdownItemWrapper key={index}>
            <S.DropdownItem>{item.title}</S.DropdownItem>
          </S.DropdownItemWrapper>
        ))}
      </S.DropdownList>
    </S.Wrapper>
  )
}

export default DropdownMobile
