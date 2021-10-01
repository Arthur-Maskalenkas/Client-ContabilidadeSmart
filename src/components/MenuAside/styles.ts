import styled, { css } from 'styled-components'

import * as LinkLiStyles from 'components/LinkLi/styles'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    & ${LinkLiStyles.Wrapper}, ${DropdownOptionWrapper} {
      border-bottom: 1px solid ${theme.colors.lightGray};
      width: 100%;
    }

    & * {
      list-style: none;
    }
  `}
`

export const MenuTitleWrapperLi = styled.li``

const TitleStyleDefault = styled.p`
  ${({ theme }) => css`
    position: relative;
    align-items: center;
    display: flex;

    padding: ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall}
      ${theme.spacings.xsmall};
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

export const MenuDropdownContent = styled.li``

export const DropdownOptionWrapper = styled.li`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.small};
  `}
`
