import styled, { css } from 'styled-components'

import * as TextContentStyles from 'components/TextContent/styles'

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    background-color: white;
    box-shadow: ${theme.shadow.card};

    ${TextContentStyles.Wrapper} {
      padding: ${theme.spacings.small};
    }
  `}
`
