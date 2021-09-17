import styled, { css } from 'styled-components'

export const Wrapper = styled.ul``

export const Title = styled.div`
  ${({ theme }) => css`
    letter-spacing: '3px';
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const DropdownWrapperList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    cursor: pointer;

    padding: ${theme.spacings.xxxsmall} 0;
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

export const DropdownTitle = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: 1.2rem;
    font-weight: ${theme.font.family.poppins.weight.light};
    margin-left: ${theme.spacings.xsmall};
    text-decoration: none;
    list-style: none;

    transition: 0.4s all;
  `}
`
