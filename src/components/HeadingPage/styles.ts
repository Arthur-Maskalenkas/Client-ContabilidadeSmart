import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

import * as LogoStyles from 'components/Logo/styles'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkGray};
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 55rem;

    ${LogoStyles.Wrapper}, ${Title} {
      position: relative;
      z-index: ${theme.layers.base};
    }

    ${media.greaterThan('large')`
      height: 35rem;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.family.poppins.weight.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('large')`
      margin-top: 20rem;
      margin-left: 3.2rem;
      width: 50%;
    `};
  `}
`

// Animação
export const linhas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  z-index: 1;
`
export const linha = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 0.1rem;
    height: 100%;
    top: 0;
    left: 50%;
    background: ${theme.colors.bordasCinzas};
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 15rem;
      width: 100%;
      top: -50%;
      left: 0;
      background: ${theme.colors.white};

      animation: run 4s 0s infinite;
      animation-fill-mode: forwards;
      animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    }

    &:nth-child(1) {
      margin-left: -25%;
    }

    &::nth-child(1):after {
      animation-delay: 2s;
    }

    &:nth-child(3) {
      margin-left: 25%;
    }

    &:nth-child(3):after {
      animation-delay: 2.5s;
    }

    @keyframes run {
      0% {
        top: -50%;
      }
      100% {
        top: 110%;
      }
    }
  `}
`
