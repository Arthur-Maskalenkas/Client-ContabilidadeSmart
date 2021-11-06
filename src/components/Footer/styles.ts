import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { darken } from 'polished'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.brown};

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    padding: ${theme.spacings.xlarge};
  `}
`

export const ListIcons = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: ${theme.spacings.large};

    li {
      &:not(:last-child) {
        margin-right: ${theme.spacings.small};
      }
    }
  `}
`

export const IconWrapper = styled.a`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background-color: ${theme.colors.white};
    border-radius: 10%;

    &:not(:last-child) {
      margin-right: ${theme.spacings.xxlarge};
    }

    & svg {
      width: 3rem;
      color: ${theme.colors.brown};
    }

    ${media.lessThan('medium')`
    padding: ${theme.spacings.xxsmall};


      & > svg {
        width: 3.5rem;
      }
    `}
  `}
`

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
`

export const Details = styled.p`
  ${({ theme }) => css`
    font-size: 1.4rem;
    color: ${darken(0.1, theme.colors.white)};
    font-family: ${theme.font.family.raleway.font};
    font-weight: ${theme.font.family.raleway.weight.bold};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Copyright = styled(Details)`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.family.raleway.weight.light};
    margin-bottom: 0;
    margin-top: ${theme.spacings.small};
  `}
`
