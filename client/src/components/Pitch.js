import React from 'react';
import {
  withStyles, Typography,
} from '@material-ui/core';

const styles = {
  root: {
    margin: 'auto',
    textAlign: 'center'
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
    <Typography variant="subtitle1">
      v0.1.2: now sets track names properly!
    </Typography>
  </div>
);


export default withStyles(styles)(Pitch);
