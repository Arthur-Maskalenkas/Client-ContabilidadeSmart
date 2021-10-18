export default {
  grid: {
    container: '130rem',
    gutter: '1.5rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: {
      poppins: {
        font: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        weight: {
          light: 300,
          normal: 400,
          bold: 600
        }
      },
      raleway: {
        font: "Raleway, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        weight: {
          light: 300,
          normal: 400,
          bold: 800
        }
      }
    },
    sizes: {
      xsmall: '1.2rem',
      small: '2rem',
      medium: '2.8rem',
      large: '3.6rem',
      xlarge: '4.2rem',
      xxlarge: '5rem',
      huge: '7rem'
    }
  },
  colors: {
    primary: '#FFFFFF',
    secondary: '#F66A3E',
    tertiary: '#202020',
    lightBg: '#F2F2F2',
    mainBg: '#F8F8F8',
    artigosBg: '#FBFBFB',
    white: '#FFFFFF',
    black: '#050706',
    lightGray: '#EFEFEF',
    gray: '#8F8F8F',
    darkGray: '#3F4350',
    red: '#FF6347',
    yellow: 'F2BB05',
    green: '#32A09A',
    lightGreen: '#80CFCF',
    darkGreen: '#278282',
    brown: '#1d1a1a',
    bordasCinzas: '#535662'
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadow: {
    card: '0px 0px 24px -16px #000000'
  }
} as const
