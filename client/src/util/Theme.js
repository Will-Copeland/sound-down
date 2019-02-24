import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const Theme = createMuiTheme({
  typography: {
    color: '#FFF',
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
  },
});

export default Theme;
