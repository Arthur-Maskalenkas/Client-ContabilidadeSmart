import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { TextDirectionType } from '.'

import * as ButtonStyles from 'components/Button/styles'

type GenericProps = {
  isOpen?: boolean
}

const subtitleEffect = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-20rem);
  `
}

const titleEffect = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(20rem);
  `
}

const buttonEffect = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(5rem);
  `
}

const wrapperModifiers = {
  left: () => css`
    grid-template-columns: 1fr 1fr;
    align-items: center;
    ${Caption} {
      left: 2rem;
      align-items: flex-start;
    }
  `,

  center: () => css`
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    ${Caption} {
      grid-column: 2;
      text-align: center;
      align-items: center;
    }
  `,
  right: () => css`
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: end;
    ${Caption} {
      right: 2rem;
      grid-column: 2;
      align-items: flex-end;
    }
  `
}

type WrapperProps = {
  src: string
  textDirection?: TextDirectionType
  isOpen?: boolean
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, src, textDirection, isOpen }) => css`
    position: relative;
    display: grid;
    width: 100%;
    height: 28rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;

    /* Efeitos */
    ${Title} {
      transition: transform 0.7s ease-in, opacity 1s;
      ${isOpen ? titleEffect.open() : titleEffect.close()}
    }

    ${Subtitle} {
      transition: transform 0.7s ease-in, opacity 1s;
      ${isOpen ? subtitleEffect.open() : subtitleEffect.close()}
    }

    ${ButtonStyles.Wrapper} {
      transition: transform 0.8s ease-in, opacity 3s;
      ${isOpen ? buttonEffect.open() : buttonEffect.close()}
    }

    /* Overlay */
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    ${!!textDirection && wrapperModifiers[textDirection]()}

    ${ButtonStyles.Wrapper} {
      border-radius: 5rem;
      font-family: ${theme.font.family.raleway.font};
      font-size: 1.7rem;
      font-weight: ${theme.font.family.raleway.weight.normal};
      padding: ${theme.spacings.xxsmall} ${theme.spacings.small};

      svg {
        width: 1.5rem;
        margin-left: ${theme.spacings.xsmall};
      }

      ${media.greaterThan('large')`
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.family.raleway.weight.normal};
        padding: ${theme.spacings.small} ${theme.spacings.medium};

        svg {
          width: 2.5rem;
          margin-left: ${theme.spacings.xsmall};
        }

      `}
    }

    ${media.greaterThan('large')`
      padding: 0 30rem;
      height: 130vh;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: ${theme.layers.base};
  `}
`

export const Title = styled.h2<GenericProps>`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.raleway.font};
    font-weight: ${theme.font.family.raleway.weight.normal};
    color: ${theme.colors.white};

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`

export const TitleWithColor = styled(Title)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    text-transform: uppercase;
    font-weight: ${theme.font.family.raleway.weight.bold};

    ${media.greaterThan('large')`
      font-weight: ${theme.font.family.raleway.weight.bold};
    `}
  `}
`

export const Subtitle = styled.p<GenericProps>`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.family.poppins.weight.normal};
    margin-bottom: ${theme.spacings.xsmall};

    /* Colocando os 3 pontos */
    ${media.lessThan('medium')`
      max-width: 25ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xlarge};
    `}
  `}
`
