const {extendTheme} = require('native-base');

const theme = extendTheme({
  colors: {
    // fonts:{

    // }
    // Add new color
    baseTheme: {
      main: '#f67952',
      800: '#fe815a',
      700: '#ff8962',
      600: '#ff8f68',
      500: '#ff9871',
      400: '#ffa27b',
      300: '#ffaa83',
    },
    background: '#FBFBFD',
    background2: '#E5E5E5',
    singletons: {
      white: '#FFFFFF',
      black: '#000000',
      lightText: '#FFFFFF',
      darkText: '#27272a',
    },
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
  },
});

export default theme;
