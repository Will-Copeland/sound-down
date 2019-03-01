import React from 'react';
import {
  withStyles, Snackbar,
} from '@material-ui/core';

const Error = ({ error, open, handleClose }) => (
  <div>
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      onClose={() => handleClose()}
      open={open}
      autoHideDuration={2000}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{error}</span>}
    />
  </div>
);

export default withStyles(styles)(Error);
