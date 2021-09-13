import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type sizeTypes = 'small' | 'medium' | 'large'

export type ButtonProps = {
  children: React.ReactNode
  icon?: JSX.Element
  size?: sizeTypes
  as?: React.ElementType
} & ButtonTypes

const Button = ({ children, icon, size = 'medium', ...props }: ButtonProps) => (
  <S.Wrapper hasIcon={!!icon} {...props} size={size}>
    {icon}
    {children}
  </S.Wrapper>
)

export default Button
