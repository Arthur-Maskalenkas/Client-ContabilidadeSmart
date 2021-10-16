import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Details = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding: 0 ${theme.spacings.small} 0 ${theme.spacings.small};
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
