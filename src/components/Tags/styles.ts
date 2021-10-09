import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  justify-content: space-between;
`

export const TagWrapper = styled.li``

export const TagLink = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.black};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    font-weight: ${theme.font.family.poppins.weight.normal};
    font-size: ${theme.font.sizes.xsmall};
    border-radius: 0 2rem 0 2rem;
    border: 0.1rem solid ${theme.colors.lightGray};

    transition: 0.2s all;

    &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }
  `}
`
