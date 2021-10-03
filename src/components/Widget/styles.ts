import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.ul`
  text-decoration: none;
  list-style: none;

  & li {
    text-decoration: none;
    list-style: none;
  }
`
export const WidgetContentWrapper = styled.li``

export const Title = styled.h2`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxxsmall};
    border-left: 0.2rem solid ${theme.colors.secondary};
    font-family: ${theme.font.family.raleway.weight.bold};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const ListWrapper = styled.ul``
