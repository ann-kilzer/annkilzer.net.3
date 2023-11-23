import { PaletteOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
      tertiary: Palette['primary'];
    }
  
    interface PaletteOptions {
      tertiary?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      tertiary: true;
    }
  }

const colors: PaletteOptions = {
    mode: 'light',
    primary: {
        main: '#42602D'
    },
    secondary: {
        main: '#69B0AC'
    },
    tertiary: {
        main: '#F19483'
    },
    text: {
        primary: '#08192D'
    }
}

export default colors
