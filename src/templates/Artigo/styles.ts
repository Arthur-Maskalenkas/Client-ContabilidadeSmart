import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as BannerStyles from 'components/BannerPage/styles'

export const Wrapper = styled.main``

export const Head = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2)
    `}
  `}
`

export const MainSection = styled(Section)`
  display: block;

  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: 1fr 35rem;
    gap: 0 3rem;
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    padding: 2rem;
    height: max-content;

    margin-left: -${theme.grid.gutter};
    margin-right: -${theme.grid.gutter};

    ${media.greaterThan('large')`
      margin-left: ${theme.grid.gutter};
      margin-right: ${theme.grid.gutter};

      box-shadow: 0px 0px 24px -16px #000000;
  `}

  ${BannerStyles.Wrapper} {
    margin-bottom: ${theme.spacings.large};
  }
  `}
`

export const WidgetSection = styled(Section)``
