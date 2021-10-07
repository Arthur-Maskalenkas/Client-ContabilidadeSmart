import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as IconWrapperStyles from 'components/IconsWrapper/styles'

export const Wrapper = styled.div`
  ${media.greaterThan('medium')`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  `}
`

export const RecursosCardsListWrapper = styled.div`
  ${({ theme }) => css`
    &:hover {
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadow.card};

      ${IconWrapperStyles.Wrapper} {
        transform: scaleX(-1);
        filter: FlipH;
      }
    }
  `}
`
