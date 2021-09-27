import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.brown};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${theme.spacings.xxlarge};
  `}
`

type IconWrapperProps = {
  colorPadding?: string
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${({ theme, colorPadding = '#ffffff' }) => css`
    padding: ${theme.spacings.xsmall};
    background-color: ${colorPadding};
    border-radius: 10%;

    &:not(:last-child) {
      margin-right: ${theme.spacings.xxlarge};
    }

    & > svg {
      width: 4rem;
      color: white;
    }

    ${media.lessThan('medium')`
    padding: ${theme.spacings.xxsmall};

    &:not(:last-child) {
      margin-right: ${theme.spacings.small};
    }

      & > svg {
        width: 3.5rem;
      }
    `}
  `}
`
