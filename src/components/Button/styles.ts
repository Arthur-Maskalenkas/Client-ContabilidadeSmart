import styled, { css, DefaultTheme } from 'styled-components'

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    flex-direction: row-reverse;
    svg {
      width: 1.5rem;
      margin-left: ${theme.spacings.xxsmall};
    }
  `
}

type WrapperProps = {
  hasIcon?: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon }) => css`
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

    ${hasIcon && wrapperModifiers.withIcon(theme)}
  `}
`
