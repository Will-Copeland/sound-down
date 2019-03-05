import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  typography: {
    color: '#FFF',
    fontFamily: "'Play', sans-serif",
    h6: {
      fontSize: '2rem'
    },
    h5: {
      color: '#FFF',
    },
    subtitle1: {
      color: '#FFF',
    },
    body1: {
      color: '#FFF',
    },
    body2: {
      color: '#FFF',
    },
    subtitle2: {
      color: '#FFF',
    },
  },
  palette: {
    primary: {
      main: '#fe8c00',
    },
    secondary: {
      main: '#f83600',
    },
    background: {
      default: '#212121',
    },
    error: {
      main: '#d32f2f',
    },
  },
});

export default Theme;
