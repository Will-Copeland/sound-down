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

  downloadPlaylist = (meta) => {
    const { src } = this.state;
    console.log(src);
    
    axios({
      method: 'get',
      url: `get-playlist/?url=${src}`,
      responseType: 'blob', // important

    }).then((res) => {
      const a = document.createElement('a');
      document.body.appendChild(a);
      const name = meta.title;
      a.style = 'display: none';
      a.download = `${name}.mp3`;
      a.rel = 'noopener';
      a.href = window.URL.createObjectURL(res.data);
      a.click();
    });
  };

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


  downloadTrack = (meta) => {
    axios({
      method: 'get',
      url: `get-track/?url=${meta.stream_url}`,
      responseType: 'blob', // important

    }).then((res) => {
      const a = document.createElement('a');
      document.body.appendChild(a);
      const name = meta.title;
      a.style = 'display: none';
      a.download = `${name}.mp3`;
      a.rel = 'noopener';
      a.href = window.URL.createObjectURL(res.data);
      a.click();
    });
  }


  submitForm = (URL) => {
    this.setState({ loading: true, src: URL });


    if (URL.includes('https://soundcloud.com/')) {
      axios({
        method: 'get',
        url: `/item-meta/?url=${URL}`,
      }).then((response) => {
        const meta = response.data;

        if (meta.kind === 'track') {
          this.downloadTrack(meta);
        } else if (meta.kind === 'playlist') {
          this.downloadPlaylist(meta);
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
