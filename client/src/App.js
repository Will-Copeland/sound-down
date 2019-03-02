import React from 'react';
import { withStyles } from '@material-ui/core';
// import './App.css';
import axios from 'axios';
import { saveAs } from 'file-saver';
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
      error: '',
      errOpen: false,
      downloading: false,
      src: null,
      downloads: [],
    };
  }

  // submitForm = (URL) => {
  //   const { downloads } = this.state;
  //   console.log(URL);

  //   if (URL.includes('https://soundcloud.com/')) {
  //     this.setState({
  //       downloading: true,
  //       downloads: [
  //         ...downloads,
  //         `http://localhost:8080/sound?url=${URL}`,
  //       ],
  //     });
  //   } else {
  //     this.setState({ error: 'Invalid URL!', errOpen: true });
  //   }
  // };

  // submitForm = (URL) => {
  //   this.setState({ loading: true });
  //   axios({
  //     method: 'post',
  //     url: '/sound',
  //     responseType: 'blob', // important
  //     data: {
  //       URL,
  //     },
  //   }).then((response) => {
  //     const name = response
  //       .headers['content-disposition']
  //       .slice(
  //         response.headers['content-disposition'].indexOf('=') + 2,
  //         -1,
  //       );

  //     saveAs(response.data, name);
  //   });
  // };


  submitForm = (URL) => {
    this.setState({ loading: true });


    if (URL.includes('https://soundcloud.com/')) {
      axios({
        method: 'get',
        url: `item-meta/?url=${URL}`,
      }).then((response) => {
        const meta = response.data;

        if (meta.kind === 'track') {
          axios({
            method: 'get',
            url: `get-item/?url=${meta.stream_url}`,
          }).then((response) => {
            
          })
        }
        console.log(meta);
      });
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
