import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    & ${TitleStyleDefault} {
      border-bottom: 1px solid ${theme.colors.lightGray};
      width: 100%;
    }

    & * {
      list-style: none;
      text-decoration: none;
    }
  `}
`

export const MenuTitleWrapperLi = styled.li``

const TitleStyleDefault = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    font-size: 1.6rem;
    font-weight: ${theme.font.family.poppins.weight.light};

    position: relative;
    align-items: center;
    display: flex;

    padding: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall}
      ${theme.spacings.xsmall};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto 0;
      height: 10px;
      width: 10px;
      background: ${theme.colors.secondary};
      clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
    }
  `}
`

export const MenuTitle = styled(TitleStyleDefault)``

export const MenuTitleLink = styled(TitleStyleDefault).attrs({ as: 'a' })`
  ${({ theme }) => css`
    cursor: pointer;

    transition: 0.2s all;

    &:hover {
      color: ${theme.colors.secondary};
    }
  `}
`

export const MenuDropdownWrapper = styled.ul``

export const MenuDropdownContent = styled.li`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.small};
  `}
`
