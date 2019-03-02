import React from 'react';
import {
  withStyles, Typography,
} from '@material-ui/core';

const styles = {
  root: {
    margin: '1rem',
  },
};

const Pitch = ({ classes }) => (
  <div className={classes.root}>
    <Typography>
        The better Sound Cloud downloader.
        Download whole playlists with one button.
        <br/> <br/>
        On mobile devices you will need to unzip
        the file when downloading playlists
    </Typography>
  </div>
);


export default withStyles(styles)(Pitch);
