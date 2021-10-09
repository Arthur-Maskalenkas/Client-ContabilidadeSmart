import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  lineLeft: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineRight: (theme: DefaultTheme) => css`
    position: relative;

    ${media.greaterThan('medium')`
    width: max-content;

      &::after {
        content: '';
        position: absolute;
        right: -12.5rem;
        top: 30%;
        width: 7rem;
        border-bottom: 0.3rem solid ${theme.colors.secondary};
      }
`}
  `
}

type WrapperProps = Omit<HeadingProps, 'children'>

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color = 'primary', size, lineLeft, lineRight }) => css`
    color: ${theme.colors[color]};
    word-wrap: break-word;

    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineRight && wrapperModifiers.lineRight(theme)}

    ${!!size && wrapperModifiers[size](theme)};
  `}
`
