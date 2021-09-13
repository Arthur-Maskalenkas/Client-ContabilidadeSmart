import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
  icon?: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, icon, ...props }: ButtonProps) => (
  <S.Wrapper hasIcon={!!icon} {...props}>
    {icon}
    {children}
  </S.Wrapper>
)

export default Button
