import React from 'react';
import {
  withStyles, Snackbar, Button, IconButton,
} from '@material-ui/core';

const styles = theme => ({
  error: {
    backgroundColor: theme.palette.error.main,
  }
 
});

const Error = ({ classes, error, open, handleClose }) => (
  <div >
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      onClose={() => handleClose()}
      open={open}
      autoHideDuration={2000}
      ContentProps={{
        classes: classes.error,
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{error}</span>}
    />
  </div>
);

export default withStyles(styles)(Error);
