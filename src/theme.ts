import { createTheme } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    round: true;
  }
}

// A custom theme for this app
const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: '1em',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "inherit",
          zIndex: "inherit"
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'round' },
          style: {
            textTransform: 'none',
            borderRadius: 50,
            padding: '0.7em 2em',
            border: '1px solid'
          },
        },
      ],
    }
  },
  palette: {
    text: { 
      primary: '#062F4F',//'#b82601', 
      secondary: '#062F4F',//white 
    },
    background: {
      default: 'linear-gradient(transparent, rgb(6,47,79, 1))',//'whitesmoke'
    },
    primary: {
      main: '#062F4F',//
    },
    secondary: {
      main: '#fa0000', //
    },
    error: {
      main: red.A400,
    },
  },
  //062F4F
  transitions: {
    easing: {
      // This is the most common easing curve.
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Objects enter the screen at full velocity from off-screen and
      // slowly decelerate to a resting point.
      easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
      // Objects leave the screen at full velocity. They do not decelerate when off-screen.
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      // The sharp curve is used by objects that may return to the screen at any time.
      sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing
      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
});

export default theme;
