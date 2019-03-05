import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import Header from './Header';
import Pitch from '../components/Pitch';
import Features from '../components/Features';

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
        <footer>
          <Features />

        </footer>
      </div>
    );
  }
}


export default withStyles(styles)(Layout);
