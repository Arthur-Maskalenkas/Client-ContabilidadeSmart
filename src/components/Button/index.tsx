import React from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  icon?: JSX.Element
}

const Button = ({ children, icon }: ButtonProps) => (
  <S.Wrapper hasIcon={!!icon}>
    {icon}
    {children}
  </S.Wrapper>
)

export default Button
