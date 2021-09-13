import React from 'react'
import * as S from './styles'

export type SizeTypes = 'medium' | 'xlarge' | 'huge'
export type ColorTypes = 'primary' | 'secondary' | 'black'

export type HeadingProps = {
  children: React.ReactNode
  size?: SizeTypes
  color?: ColorTypes
  lineLeft?: boolean
  lineRight?: boolean
}

const Heading = ({
  children,
  color = 'primary',
  size = 'xlarge',
  lineLeft = false,
  lineRight = false
}: HeadingProps) => (
  <S.Wrapper color={color} size={size} lineLeft={lineLeft} lineRight={lineRight}>
    {children}
  </S.Wrapper>
)

export default Heading
