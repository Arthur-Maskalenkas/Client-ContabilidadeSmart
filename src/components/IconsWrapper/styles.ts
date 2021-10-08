import styled, { css, DefaultTheme } from 'styled-components'
import { IconsProps } from '.'

import { StyledIconBase } from '@styled-icons/styled-icon'

export type sizeTypes = 'small' | 'medium' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'large'

export const Wrapper = styled.div<Omit<IconsProps, 'icon'>>`
  ${({ theme, size, color }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    > ${StyledIconBase} {
      width: ${size};
      color: ${theme.colors[color!]};
      position: relative;
    }
  `}
`
