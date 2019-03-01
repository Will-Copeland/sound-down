import React from 'react';
import {
  withStyles, Typography,
} from '@material-ui/core';

const styles = {
  root: {
    position: 'static',
  },

};

const Loading = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="subtitle1">
        Depending on length, your download may take a few minutes.
        Feel free to start another!
    </Typography>
  </div>
);

export default withStyles(styles)(Loading);
