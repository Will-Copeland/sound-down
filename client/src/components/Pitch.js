import React from 'react';
import {
  withStyles, Typography,
} from '@material-ui/core';

const styles = {
  root: {
    margin: 'auto',
    marginTop: '1rem',
    textAlign: 'center',
  },
};

const Pitch = ({ classes }) => (
  <div className={classes.root}>
    <Typography>
        Download whole playlists with one button.
      <br />
      {' '}
      <br />
        On mobile devices you will need to unzip
        the file when downloading playlists with an
        app like ZArchiver
    </Typography>
  </div>
);


export default withStyles(styles)(Pitch);
