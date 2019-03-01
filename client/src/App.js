import React from 'react';
import { withStyles } from '@material-ui/core';
// import './App.css';

import Form from './containers/Form';
import Layout from './containers/Layout';
import Error from './components/Error';

const styles = {
  progress: {
    height: '2rem',
    width: '100%',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: 'test',
      errOpen: false,
      downloading: true,
      src: null,
      downloads: [],
    };
  }

  submitForm = (URL) => {
    const { downloads } = this.state;
    console.log(URL);

    if (URL.includes('https://soundcloud.com/')) {
      this.setState({
        downloading: true,
        downloads: [
          ...downloads,
          `http://localhost:8080/sound?url=${URL}`,
        ],
      });
    } else {
      this.setState({ error: 'Invalid URL!', errOpen: true });
    }
  };

  renderIframes = () => {
    const { downloads } = this.state;
    if (!downloads.length) return null;
    return downloads
      .map((src, i) => {
        const key = `dl-${i}`;
        return (
          <iframe
            key={key}
            id={key}
            style={{ display: 'none' }}
            title={key}
            src={src}
          />
        );
      });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ errOpen: false });
  };

  render() {
    const { downloading, error, errOpen } = this.state;
    const { classes } = this.state;
    return (
      <div className="App">
        <Layout>
          {error.length > 0 ? <Error handleClose={this.handleClose} open={errOpen} error={error} /> : <div /> }

          <Form downloading={downloading} sendForm={this.submitForm} />
        </Layout>
        { this.renderIframes() }
      </div>

    );
  }
}


export default withStyles(styles)(App);
