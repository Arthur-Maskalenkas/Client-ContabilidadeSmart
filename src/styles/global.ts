import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

import { darken } from 'polished'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }

  @font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/raleway-v22-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/raleway-v22-latin-300.woff2') format('woff2'); /* Super Modern Browsers */
}
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/raleway-v22-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
        url('/fonts/raleway-v22-latin-regular.woff2') format('woff2'); /* Super Modern Browsers */
  }

  @font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  src: url('/fonts/raleway-v22-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/raleway-v22-latin-800.woff2') format('woff2'); /* Super Modern Browsers */
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* O caminho da barra de rolagem */
      ::-webkit-scrollbar-track {
        background-color: #888;
      }

      /* O componente que vai rolando o caminho da barra de rolagem */
      ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.secondary};
        border-radius: 25%;
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: ${darken(0.2, theme.colors.secondary)};
      }

      font-family: ${theme.font.family.poppins.font};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}
`

export default GlobalStyles
