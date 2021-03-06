import React, { Component } from 'react';
import {
  withStyles, TextField, Typography, Button,
} from '@material-ui/core';
import Loading from '../components/Loading';

const styles = theme => ({
  form: {
    textAlign: 'center',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    position: 'absolute',
    marginTop: '1rem',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  textField: {
    width: '66%',
    margin: '1rem auto 1rem auto',
    color: 'white',
  },
  input: {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  floatingLabelFocusStyle: {
    color: theme.palette.primary.main,
  },
  button: {
    background: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    width: 'fit-content',
    margin: 'auto',
  },
});

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '',
    };
  }

  handleSubmit = () => {
    const { link } = this.state;
    const { sendForm } = this.props;
    sendForm(link);
  }

  handleChange = (event) => {
    this.setState({ link: event.target.value });
  }

  render() {
    const { classes, downloading } = this.props;
    const { link } = this.state;
    return (
      <div className={classes.form}>
        {downloading ? <Loading /> : (
          <Typography variant="h5">
            Paste playlist or song link:
          </Typography>
        )}
        <TextField
          style={{ color: 'white' }}
          InputProps={{
            className: classes.input,
          }}
          InputLabelProps={{
            className: classes.floatingLabelFocusStyle,
          }}
          className={classes.textField}
          onChange={e => this.handleChange(e)}
          label="Link"
          value={link}
        />
        <Button className={classes.button} onClick={this.handleSubmit}>
          <Typography variant="body1">Download</Typography>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Form);
