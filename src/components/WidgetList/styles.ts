import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    & > * {
      margin-bottom: ${theme.spacings.medium};
    }
    ${media.greaterThan('medium')`
      grid-template-columns: repeat(auto-fill, minmax(25.5rem, 1fr));
      gap: 3.5rem;
      & > * {
        margin-bottom: none;
      }
`}
  `}
`
