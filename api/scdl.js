const fetch = require('node-fetch');
const archiever = require('archiver');

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

  async getItem(track_url) {
    track_url = this._appendParams(
      `https://api.soundcloud.com/resolve`,
      true, 
      { url: track_url }
    )

    const item = await fetch(track_url)
      .then(res => res.json())
        
    return item;
  }

  streamPlaylistArchive(tracks, archive) {
    const len = tracks.length;
    const proms = [];
    tracks.map(track => {
      console.log('adding:', track.stream_url)
      proms.push(
        fetch(this._appendParams(track.stream_url, true))
          .then(res => {
            archive.append(
              res.body, 
              { name: `${track.permalink}.mp3` }
            );
        })        
      )
    });

    return Promise.all(proms);
  }

  streamTrack(track, writeStream) {
      return fetch(this._appendParams(track.stream_url, true))
        .then(res => {
          res.body.pipe(writeStream);
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
