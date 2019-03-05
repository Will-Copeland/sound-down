import React from 'react';
import {
  withStyles, Typography, CircularProgress,
} from '@material-ui/core';

const styles = {
  root: {
    position: 'static',
    margin: '1rem',
  },

};

const Loading = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="subtitle1">
        Depending on length, your download may take a few minutes.
    </Typography>
    <CircularProgress />
  </div>
);

export default withStyles(styles)(Loading);
