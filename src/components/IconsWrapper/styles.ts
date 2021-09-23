import styled, { css, DefaultTheme } from 'styled-components'
import { IconsProps } from '.'

import { StyledIconBase } from '@styled-icons/styled-icon'

import media from 'styled-media-query'

type colorTypes = 'secondary' | 'white'

export type sizeTypes = 'small' | 'medium' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'large'

const wrapperModifiers = {
  hoverColorMod: (theme: DefaultTheme, hoverColor: colorTypes) => css`
    ${StyledIconBase} {
      &:hover {
        color: ${theme.colors[hoverColor]};
      }
    }
  `,
  scaleMod: () => css`
    ${StyledIconBase} {
      &:hover {
        transform: scale(1.2);
        transition: all 0.2s;
      }
    }
  `,
  sizeMediaMod: (sizeMedia: sizeTypes | string) => css`
    ${media.lessThan('medium')`
      ${StyledIconBase} {
        width: ${sizeMedia}
      }
  `}
  `,

  borderColor: (theme: DefaultTheme, borderColor: colorTypes, hoverColor: boolean) => css`
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: ${theme.spacings.xxsmall};
    transition: 0.6s all;

    ${borderColor == 'white'
      ? css`
          background-color: ${theme.colors.white};
          ${StyledIconBase} {
            color: ${theme.colors.secondary};
          }

          ${hoverColor &&
          css`
            &:hover {
              background-color: ${theme.colors.secondary};
              ${StyledIconBase} {
                color: ${theme.colors.white};
              }
            }
          `}
        `
      : css`
          background-color: ${theme.colors.secondary};
          ${StyledIconBase} {
            color: ${theme.colors.white};
          }

          ${hoverColor &&
          css`
            &:hover {
              background-color: ${theme.colors.white};
              ${StyledIconBase} {
                color: ${theme.colors.secondary};
              }
            }
          `}
        `}
  `
}

export const Wrapper = styled.div<Omit<IconsProps, 'icon'>>`
  ${({ theme, size, color, hoverColor, isScale, sizeMedia, borderColor }) => css`
    > ${StyledIconBase} {
      width: ${size};
      color: ${theme.colors[color!]};
      transition: all 0.2s;
      display: inline-block;
      position: relative;
    }

    ${!!hoverColor && wrapperModifiers.hoverColorMod(theme, hoverColor)}
    ${!!isScale && wrapperModifiers.scaleMod()}
    ${!!sizeMedia && wrapperModifiers.sizeMediaMod(sizeMedia)}
    ${!!borderColor && wrapperModifiers.borderColor(theme, borderColor, !!hoverColor)}
  `}
`
