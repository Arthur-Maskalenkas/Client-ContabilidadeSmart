import styled, { css, DefaultTheme } from 'styled-components'

const wrapperModifiers = {
  noHaveMorePages: () => css`
    display: none;
  `,
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    background-color: ${theme.colors.gray};
    opacity: 0.4;
  `
}

type WrapperProps = {
  haveMorePage: boolean
  disabled: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, haveMorePage, disabled }) => css`
    cursor: pointer;
    border: none;
    text-decoration: none;
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.xxsmall};

    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      width: 2.5rem;
    }

    ${!haveMorePage && wrapperModifiers.noHaveMorePages()}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
