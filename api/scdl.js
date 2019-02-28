const request = require("request");
const axios = require("axios");

module.exports = {
  getItem: async (track_url, client_id) => {
    let item;
    track_url = `https://api.soundcloud.com/resolve?url=${track_url}`;
    await axios
      .get(track_url, {
        params: { client_id: client_id }
      })
      .then(res => {
        console.log(res.data.download_url);

        item = res.data;
      });
    return item;
  },
  streamTrack: async (track, client_id, cb) => {
    if (track.downloadable) {
      await axios.get(track.download_url, {
          params: { 'client_id': client_id }
      }).then(res => {
          cb(res);
      });
    } else {
      await axios
        .get(track.stream_url, {
          params: { client_id: client_id }
        })
        .then(res => {
          cb(res);
        });
    }
  }
};
