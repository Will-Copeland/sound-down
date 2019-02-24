import React from 'react';
import {
  AppBar, Toolbar, Typography, withStyles,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundColor: 'black',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">
                    Sound Down
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
