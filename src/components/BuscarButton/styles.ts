import styled, { css } from 'styled-components'

const wrapperModifiers = {
  noHaveMorePages: () => css`
    display: none;
  `
}

type WrapperProps = {
  haveMorePage: boolean
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, haveMorePage }) => css`
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
  `}
`
