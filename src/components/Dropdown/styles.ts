import styled, { css, DefaultTheme } from 'styled-components'

type colorTypes = 'white' | 'secondary'

const wrapperModifiers = {
  openDropdown: () => css`
    ${Content} {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
  `,
  closeDropdown: () => css`
    ${Content} {
      opacity: 0;
      pointer-events: none;
      transform: translateY(5rem);
    }
  `,
  changeColorTitle: (theme: DefaultTheme, color: colorTypes) => css`
    ${TitleWrapper} > * {
      color: ${theme.colors[color]};
    }
  `,
  isOpen: (theme: DefaultTheme) => css`
    ${wrapperModifiers.openDropdown()}
    ${wrapperModifiers.changeColorTitle(theme, 'secondary')}
  `,
  isClose: (theme: DefaultTheme) =>
    css`
      ${wrapperModifiers.closeDropdown()}
      ${wrapperModifiers.changeColorTitle(theme, 'white')}
    `
}

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.ul<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      transition: transform 0.4s ease-in-out, opacity 0.4s;
    }

    /* Funções controllers */
    ${isOpen && wrapperModifiers.isOpen(theme)}
    ${!isOpen && wrapperModifiers.isClose(theme)}
    }
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    position: relative;
    letter-spacing: '3px';
    font-size: ${theme.font.sizes.xsmall};
    display: flex;
    align-items: center;
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;

    & > svg {
      width: 1.5rem;
      margin-left: ${theme.spacings.xxsmall};
      color: white;
    }
  `}
`

export const Content = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 2rem;
    cursor: pointer;
    background-color: ${theme.colors.white};

    & > :not(:last-child) {
      border-bottom: 1px solid ${theme.colors.gray};
    }
  `}
`

export const DropdownTitle = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 1.2rem;
    font-weight: ${theme.font.family.poppins.weight.light};
    margin-left: ${theme.spacings.xsmall};
    text-decoration: none;

    transition: 0.4s all;

    &:hover {
      margin-left: ${theme.spacings.small};
      color: ${theme.colors.secondary};
    }
  `}
`

export const DropdownTitleWrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;

    padding: ${theme.spacings.xxsmall} 0;
    width: 150px;

    &:not(:last-child) {
      border-bottom: 1px solid ${theme.colors.gray};
    }

    &:hover {
      ${DropdownTitle} {
        margin-left: ${theme.spacings.small};
        color: ${theme.colors.secondary};
      }
    }
  `}
`
