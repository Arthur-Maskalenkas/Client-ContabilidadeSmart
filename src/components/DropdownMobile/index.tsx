import * as S from './styles'

import { ArrowDownCircleFill } from '@styled-icons/bootstrap/ArrowDownCircleFill'
import { useState } from 'react'

export type DropdownMobileProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const DropdownMobile = ({ title, children }: DropdownMobileProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onClick={() => setIsOpen(!isOpen)}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen} aria-label="dropdown">
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default DropdownMobile
