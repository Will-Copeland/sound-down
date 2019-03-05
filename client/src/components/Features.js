import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = {
  root: {
    bottom: 0,
    position: 'absolute',
    margin: '1rem',
    maxHeight: '20%',
    overflow: 'auto',
  },
};

const Features = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h5">Recent Updates</Typography>
    <Typography variant="subtitle1">V 0.1.3</Typography>
    <Typography variant="body1">
      Will now ignore the junk that SoundCloud attaches to your clipboard like: "Listen
      to (Ep.138) [Hosted by Lektrique] + Dr. Fresch Guest Mix by KANNIBALEN
      RADIO #np on #SoundCloud"
    </Typography>
    <Typography variant="subtitle1">V 0.1.2</Typography>
    <Typography variant="body1">
        Will now set track titles properly
    </Typography>

  </div>
);

export default withStyles(styles)(Features);
