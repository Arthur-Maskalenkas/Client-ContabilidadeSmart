import styled, { css, DefaultTheme } from 'styled-components'

import { StyledIconBase } from '@styled-icons/styled-icon'

import * as IconsStyles from 'components/IconsWrapper/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    min-height: 50rem;
    flex-direction: column;
    padding: ${theme.spacings.large};

    box-shadow: ${theme.shadow.card};

    /* Bordas */
    ${IconsStyles.Wrapper} {
      padding: 1.5rem;
      border-radius: 50%;
      width: 8rem;
      background-color: ${theme.colors.secondary};
    }

    ${StyledIconBase} {
      color: white;
    }
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
