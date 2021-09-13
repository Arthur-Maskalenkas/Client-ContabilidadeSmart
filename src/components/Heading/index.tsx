import React from 'react'
import * as S from './styles'

export type SizeTypes = 'medium' | 'xlarge' | 'huge'
export type ColorTypes = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  size?: SizeTypes
  color?: ColorTypes
}

const Heading = ({ children, color = 'primary', size = 'xlarge' }: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
