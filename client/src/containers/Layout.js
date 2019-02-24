import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';
import Header from './Header';

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
        <Header />

        <main>
          {children}
        </main>
      </div>
    );
  }
}


export default withStyles(styles)(Layout);
