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
  `,

  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineRight: (theme: DefaultTheme) => css`
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: -12.5rem;
      top: 30%;
      width: 7rem;
      border-bottom: 0.3rem solid ${theme.colors.secondary};
    }
  `
}

type WrapperProps = {
  size?: SizeTypes
  color?: ColorTypes
  lineLeft?: boolean
  lineRight?: boolean
}

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, size, lineLeft, lineRight }) => css`
    color: ${theme.colors[color!]};
    width: max-content;

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineRight && wrapperModifiers.lineRight(theme)}

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
