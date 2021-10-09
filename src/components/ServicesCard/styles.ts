import styled, { css } from 'styled-components'

import { StyledIconBase } from '@styled-icons/styled-icon'

import * as IconsStyles from 'components/IconsWrapper/styles'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    min-height: 50rem;
    overflow: hidden;
    cursor: pointer;
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

    &:hover {
      ${Title}, ${SaibaMais} {
        color: ${theme.colors.white};
      }

      ${IconsStyles.Wrapper} {
        transform: scale(1.2);
      }
    }

    /* Fundo cinza */
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      background: #000;
      position: absolute;
      top: 0;
      opacity: 0;
      visibility: hidden;
      left: 0;
      z-index: -1;
      transition: 0.1;
      transform: scale(0.9);
    }

    &:hover:after {
      opacity: 0.75;
      visibility: visible;
      transform: scale(1);
    }

    /* // Fundo cinza // */

    /* cobrindo da esquerda para a direita */
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      background: rgb(0 0 0 / 0.5);
      position: absolute;
      top: 0;
      left: -100%;
      opacity: 1;
      z-index: -1;
      transition: 300ms;
    }

    &:hover:before {
      left: 0;
      transition: 300ms;
      transition-delay: 200ms;
    }

    /* // cobrindo da esquerda para a direita // */
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
