import styled, { css } from 'styled-components'

import * as HeadingsStyles from 'components/Heading/styles'
import media from 'styled-media-query'
import theme from 'styles/theme'

export const Wrapper = styled.footer`
  ${HeadingsStyles.Wrapper} {
    text-transform: uppercase;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr); // 1fr 1fr
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr) // 1fr 1fr 1fr 1fr
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }
    a:hover {
      text-decoration: underline;
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`

export const Heading = styled(HeadingsStyles.Wrapper)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.small};
  `}
`
