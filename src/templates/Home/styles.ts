import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2)
    `}
  `}
`

export const SectionMain = styled(Section)`
  display: flex;
  flex-direction: column-reverse;

  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: 1fr 1fr
  `}
`

export const Intro = styled.div`
  text-align: center;

  ${media.greaterThan('medium')`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`
