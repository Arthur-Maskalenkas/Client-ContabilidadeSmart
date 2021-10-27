import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

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
    gap: 0 6rem;
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    height: max-content;
    margin-bottom: ${theme.spacings.xxlarge};
  `}
`

export const WidgetSection = styled(Section)``
