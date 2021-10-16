import styled, { css } from 'styled-components'

import * as TextContent from 'components/TextContent/styles'

import * as CompartilheStyles from 'components/Compartilhe/styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* PEgando o primeiro elemento e aplicando os 3 pontos*/
    ${CompartilheStyles.Wrapper} + div *:first-child {
      display: block;
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    ${CompartilheStyles.Wrapper} + div *:not(:first-child) {
      display: none;
    }
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.font.family.raleway};
    font-weight: ${theme.font.family.raleway.weight.bold};
    font-size: 2.4rem;

    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.family.poppins.weight.normal};
  `}
`
