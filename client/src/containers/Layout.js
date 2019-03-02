import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import Header from './Header';
import Pitch from '../components/Pitch';

const styles = theme => ({
  root: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.background.default,
  },
});

class Layout extends PureComponent {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <head>
          <link href="https://fonts.googleapis.com/css?family=Play" rel="stylesheet" />
        </head>
        <Header />
        <Pitch />
        <main>
          {children}
        </main>
      </div>
    );
  }
}


export default withStyles(styles)(Layout);
