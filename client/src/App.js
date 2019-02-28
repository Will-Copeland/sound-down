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
    };
  }

  submitForm = (URL) => {
    this.setState({ loading: true });
    axios({
      method: 'post',
      url: '/sound',
      responseType: 'blob', // important
      data: {
        URL,
      },
    }).then((response) => {
      console.log(response.headers);
      const name = response
        .headers['content-disposition']
        .slice(
          response.headers['content-disposition'].indexOf('=') + 2,
          -1,
        );

      saveAs(response.data, name);
    });
  };

  render() {
    return (
      <div className="App">
        <Layout>
          <Form sendForm={this.submitForm} />
        </Layout>
      </div>

    );
  }
}


export default App;
