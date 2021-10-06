import styled, { css, DefaultTheme } from 'styled-components'

import * as LinkLiStyles from 'components/LinkLi/styles'

export const Wrapper = styled.li`
  ${({ theme }) => css`
    text-decoration: none;
    list-style: none;
    & * {
      text-decoration: none;
      list-style: none;
    }

    ${LinkLiStyles.LinkTitleWrapper} {
      border-bottom: 1px solid ${theme.colors.lightGray};
    }
  `}
`

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
