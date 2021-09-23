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
  relativeYMod: (relativeY: string) => css`
    ${StyledIconBase} {
      top: ${relativeY};
    }
  `
}

export const Wrapper = styled.div<Omit<IconsProps, 'icon'>>`
  ${({ theme, size, color, hoverColor, isScale, sizeMedia, relativeY }) => css`
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
    ${!!relativeY && wrapperModifiers.relativeYMod(relativeY)}
  `}
`
