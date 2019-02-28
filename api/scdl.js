const fetch = require('node-fetch');
const fs = require('fs');
const archiver = require('archiver');
const { get } = require('http');

this.scdl = null;

class Scdl {

  constructor(clientId) {
    this._clientId = clientId;
  }

  _appendParams(url, withClientId, params) {
    if (!url) throw new Error('_appendParams requires a url');

    if (withClientId && this._clientId) {
      if (!params) params = {};
      params['client_id'] = this._clientId;
    }

    let queryString = null;

    if (params)
    queryString = Object
      .entries(params)
      .map(([k, v]) => `${k}=${v}`)
      .join('&');

    return `${url}${queryString ? '?' + queryString: ''}`;
  }

  async getItem(trackUrl) {
    trackUrl = this._appendParams(
      `https://api.soundcloud.com/resolve`,
      true, 
      { url:  }
    )

    const item = await fetch(trackUrl)
      .then(res => res.json())

    return item;
  }

  streamTrack(track, writeStream) {
    // return fetch(this._appendParams(track.stream_url, true))
    //   .then(res => {
    //     res.body.pipe(writeStream);
    //   })
    get(this._appendParams(track.stream_url, true), (res) => {
      res.pipe(writeStream);
    })
  }

  async streamPlaylistToZip(item, writeStream) {
    return new Promise(resolve => {
      const tracks = item.tracks;
      const len = tracks.length;
      
      const archive = archiver('zip', { zlib: { level: 9 } });
      archive.pipe(writeStream);

      for (let i; i < tracks.length; i += 1) {
          let track = tracks[i];
          fetch(this._appendParams(track.stream_url, true))
            .then(res => (
              archive.append(res.body, { name: `${track.permalink}.mp3` }))
            );
        }
  
      console.log('hello')
  
      writeStream.on('end', () => resolve())
  
  
      archive.finalize();
  
  
    })

  }
}

const exporter = () => {
  if (scdl) return scdl;
  throw new Error('scdl must be initialized');
}

const init = (client_id) => {
  scdl = new Scdl(client_id)
  return exporter();
}

module.exports = exporter;
module.exports.init = init;
