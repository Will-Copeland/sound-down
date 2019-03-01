import React from 'react';
import { LinearProgress, withStyles } from '@material-ui/core';
// import './App.css';

import Form from './containers/Form';
import Layout from './containers/Layout';

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
      error: false,
      downloading: false,
      src: null,
      downloads: [],
    };
  }

  submitForm = (URL) => {
    const { downloads } = this.state;
    this.setState({
      downloading: true,
      downloads: [
        ...downloads,
        `http://localhost:8080/sound?url=${URL}`,
      ],
    });
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

  render() {
    const { downloading, src } = this.state;
    const { classes } = this.state;
    return (
      <div className="App">
        <Layout>
          {downloading ? <LinearProgress /> : <Form sendForm={this.submitForm} />}
          
        </Layout>
        { this.renderIframes() }
      </div>

    );
  }
}


export default withStyles(styles)(App);
