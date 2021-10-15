import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.raleway};
    font-weight: ${theme.font.family.raleway.weight.bold};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.family.poppins.weight.normal};
  `}
`
