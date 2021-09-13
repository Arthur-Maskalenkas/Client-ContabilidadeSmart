import styled, { css, DefaultTheme } from 'styled-components'
import { ColorTypes, SizeTypes } from '.'

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

type WrapperProps = {
  size?: SizeTypes
  color?: ColorTypes
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
