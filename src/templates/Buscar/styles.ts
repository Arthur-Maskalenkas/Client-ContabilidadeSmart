import styled, { css } from 'styled-components'

import * as BuscarPostStyles from 'components/BuscarPost/styles'
import * as BuscarPostsLoadingStyles from 'components/BuscarPostLoading/styles'

import * as BuscarButtonStyles from 'components/BuscarButton/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${BuscarPostStyles.Wrapper}, ${BuscarPostsLoadingStyles.Image} {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  ${BuscarButtonStyles.Wrapper}:nth-child(1) {
    margin-left: 2.5rem;
  }
  ${BuscarButtonStyles.Wrapper}:nth-child(2) {
    margin-right: 2.5rem;
  }
`
