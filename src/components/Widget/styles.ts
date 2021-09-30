import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxxsmall};
    border-left: 0.2rem solid ${theme.colors.secondary};
    font-family: ${theme.font.family.raleway.weight.bold};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const LinkLiWrapper = styled.ul`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.lightGray};
    width: 95%;

    /* Primeiro filho */
    &:nth-child(2) {
      border-top: none;
    }

    ${media.greaterThan('medium')`
      width: 25rem;

    `}
  `}
`
