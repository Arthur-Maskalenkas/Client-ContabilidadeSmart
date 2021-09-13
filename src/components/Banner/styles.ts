import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { TextDirectionType } from '.'

const wrapperModifiers = {
  left: () => css`
    grid-template-columns: 1fr 1fr;
    align-items: center;

    ${Caption} {
      left: 1rem;
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
      right: 1rem;
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
    height: 100%;

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
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.family.poppins.weight.normal};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
