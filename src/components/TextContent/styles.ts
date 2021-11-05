import styled, { css } from 'styled-components'

import * as CompartilheStyles from 'components/Compartilhe/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    color: ${theme.colors.black};

    ${CompartilheStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
      h2 {
        margin: initial;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: ${theme.spacings.xsmall} 0;

      color: ${theme.colors.black};
    }
    p {
      margin-bottom: ${theme.spacings.xsmall};
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
    }

    li {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
    }
    a {
      color: ${theme.colors.primary};
    }
    img {
      /* Ele alcança o maximo de 70rem, e se for menor que 70rem ele pega 100% da tela */
      max-width: min(70rem, 100%);
      margin-bottom: ${theme.spacings.xsmall};
    }
    ul,
    ol {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }
    hr {
      margin: ${theme.spacings.small} 0;
    }
  `}
`
