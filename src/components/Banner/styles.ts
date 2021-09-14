import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { TextDirectionType } from '.'

import * as ButtonStyles from 'components/Button/styles'

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
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, src, textDirection }) => css`
    position: relative;
    display: grid;
    width: 100%;
    height: 28rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    /* Overlay */
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
    ${!!textDirection && wrapperModifiers[textDirection]()}
    ${media.greaterThan('medium')`
      padding: 0 30rem;
      height: 130vh;

      ${ButtonStyles.Wrapper} {
        height: 5rem;
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};}
        svg {
          width: 2rem;
          margin-left: ${theme.spacings.small}
        }
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

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family.raleway.font};
    font-weight: ${theme.font.family.raleway.weight.normal};
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`

export const TitleWithColor = styled(Title)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    text-transform: uppercase;
    font-weight: ${theme.font.family.raleway.weight.bold};

    ${media.greaterThan('medium')`
      font-weight: ${theme.font.family.raleway.weight.bold};
    `}
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.family.poppins.weight.normal};
    margin-bottom: ${theme.spacings.xsmall};

    /* Colocando os 3 pontos */
    max-width: 25ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${media.greaterThan('medium')`
      max-width: initial;
      overflow: auto;
      text-overflow: initial;
      white-space: initial;
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xlarge};
    `}
  `}
`
