import styled, { css, DefaultTheme } from 'styled-components'
import { sizeTypes } from '.'

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    flex-direction: row-reverse;
    svg {
      width: 1.5rem;
      margin-left: ${theme.spacings.xxsmall};
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `
}

type WrapperProps = {
  hasIcon?: boolean
  size?: sizeTypes
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, size }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.primary};
    background-color: ${theme.colors.secondary};

    text-decoration: none;
    border: 0;
    cursor: pointer;

    /* Effect */
    overflow: hidden;
    backface-visibility: hidden;
    position: relative;
    transition: color 400ms;
    transform: translateZ(0);

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${theme.colors.tertiary};
      border-radius: 100%;
      transform: scale(0);
      transition-property: transform;
      transition: 400ms ease-out;
    }
    &:hover:before {
      transform: scale(2);
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
