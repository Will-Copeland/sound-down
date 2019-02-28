import React from 'react';
import axios from 'axios';
import { log } from 'util';
import { saveAs } from 'file-saver';
import logo from './logo.svg';
// import './App.css';

import Form from './containers/Form';
import Layout from './containers/Layout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      downloading: false,
      src: null,
      downloads: [],
    };
  }

  submitForm = (URL) => {
    const { downloads } = this.state;

    this.setState({
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
    return (
      <div className="App">
        <Layout>
          <Form sendForm={this.submitForm} />
        </Layout>
        { this.renderIframes() }
      </div>

    );
  }
}


export default App;
