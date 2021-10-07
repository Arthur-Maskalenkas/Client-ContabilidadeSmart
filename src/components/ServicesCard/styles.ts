import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.large};

    box-shadow: ${theme.shadow.card};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.black}
    line-height: 3.4rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.family.poppins.weight.bold};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    line-height: 2.7rem;
    font-size: 1.5rem;
    font-weight: ${theme.font.family.poppins.weight.normal};
  `}
`

export const SaibaMais = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 1.5rem;
    font-weight: ${theme.font.family.poppins.weight.bold};
  `}
`
