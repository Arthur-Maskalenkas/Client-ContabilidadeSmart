import styled, { css } from 'styled-components'

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.ul<WrapperProps>`
  ${() => css`
    list-style: none;
    position: relative;
    width: max-content;

    ${Content} {
      transition: transform 0.4s ease-in-out, opacity 0.4s;
    }


    & ${Content} {
      opacity: 0;
      pointer-events: none;
      transform: translateY(5rem);
    }

    &:hover ${Content} {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    }
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    letter-spacing: '3px';
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    display: flex;
    align-items: center;
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    color: ${theme.colors.white};

    & > svg {
      width: 1.5rem;
      margin-left: ${theme.spacings.xxxsmall};
      color: white;
    }
  `}
`

export const Content = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: 3rem;
    cursor: pointer;
    background-color: ${theme.colors.white};

    & > :not(:last-child) {
      border-bottom: 1px solid ${theme.colors.gray};
    }
  `}
`

export const LinkMenuDesktopTitle = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 1.4rem;
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

export const LinkMenuDesktopTitleWrapper = styled.li`
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
      ${LinkMenuDesktopTitle} {
        margin-left: ${theme.spacings.small};
        color: ${theme.colors.secondary};
      }
    }
  `}
`
