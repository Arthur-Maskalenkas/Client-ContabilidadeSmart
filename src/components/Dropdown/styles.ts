import styled, { css } from 'styled-components'

const wrapperModifiers = {
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

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.ul<WrapperProps>`
  ${({ isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      /* Auxiliando a transformação da propriedade transform */
      transition: transform 0.4s ease-in-out, opacity 0.4s;

      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    position: relative;
    letter-spacing: '3px';
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
  `}
`

export const TitleWrapper = styled.div`
  display: flex;
  cursor: pointer;

  & > svg {
    width: 1.5rem;
    color: white;
  }
`

export const Content = styled.ul`
  ${({ theme }) => css`
    position: absolute;
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
