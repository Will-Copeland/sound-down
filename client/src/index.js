import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from './App';
import Theme from './util/Theme';

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
);
