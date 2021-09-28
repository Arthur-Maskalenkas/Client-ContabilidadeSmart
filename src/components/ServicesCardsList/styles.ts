import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;

    ${media.greaterThan('large')`
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    gap: 0 3rem;
    `}
  `}
`
export const ServicesCardWrapper = styled.div`
  ${({ theme }) => css`
    &:not(:last-child) {
      margin-bottom: ${theme.spacings.large};
    }
  `}
`
