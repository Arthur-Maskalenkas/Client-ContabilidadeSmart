import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { darken } from 'polished'

import * as IconWrapperStyles from 'components/IconsWrapper/styles'

export const Wrapper = styled.div`
  ${media.greaterThan('medium')`
     display: grid;
      grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    `}
`

export const RecursosCardsListWrapper = styled.div`
  ${({ theme }) => css`
    padding: 1rem;

    &:hover {
      background-color: ${theme.colors.white};
      box-shadow: ${theme.shadow.card};

      ${IconWrapperStyles.Wrapper} {
        transform: scaleX(-1);
        filter: FlipH;
      }
    }

    ${media.greaterThan('large')`

      &:nth-child(2), &:nth-child(5) {
        border-left: 1px solid ${darken(0.1, theme.colors.lightGray)};
        border-right: 1px solid ${darken(0.1, theme.colors.lightGray)};
      }

      &:nth-child(1),&:nth-child(2),&:nth-child(3){
        border-bottom: 1px solid ${darken(0.1, theme.colors.lightGray)};
      }
    }
    `}
  `}
`
