import styled, { css, DefaultTheme } from 'styled-components'
import { IconsProps } from '.'

import { StyledIconBase } from '@styled-icons/styled-icon'

export type sizeTypes = 'small' | 'medium' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'large'

export const Wrapper = styled.div<Omit<IconsProps, 'icon'>>`
  ${({ theme, size, color }) => css`
    > ${StyledIconBase} {
      width: ${size};
      color: ${theme.colors[color!]};
      transition: all 0.2s;
      display: inline-block;
      position: relative;
    }
  `}
`
