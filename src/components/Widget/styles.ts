import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Title = styled.h2`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxxsmall};
    border-left: 0.2rem solid ${theme.colors.secondary};
    font-family: ${theme.font.family.raleway.weight.bold};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const LinkLiWrapper = styled.ul`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.gray};
    width: 20rem;

    &:last-child {
      border-bottom: 1px solid ${theme.colors.gray};
    }
  `}
`
