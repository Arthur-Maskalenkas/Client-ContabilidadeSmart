import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.shadow.card};
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} ${theme.spacings.small}
      ${theme.spacings.small} ${theme.spacings.small};

    ${media.greaterThan('large')`
      min-height: 14rem;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.raleway};
    font-weight: ${theme.font.family.raleway.weight.bold};
    font-size: 2.4rem;

    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.font.family.poppins.weight.normal};
  `}
`
