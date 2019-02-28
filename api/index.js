const express = require("express");
const app = express();
const path = require('path');
const archiever = require('archiver');

require('dotenv').config(path.resolve(__dirname, '.env'));

const scdl = require("./scdl").init(process.env.CLIENT_ID);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/test2", (req, res, next) => {
  res.send(["AA"]);
});

app.get("/test", (req, res, next) => {
  res.send(["one", "two", "three"]);
  console.log("Connected");
});

app.post("/sound", async (req, res, next) => {
  const item = await scdl.getItem(req.body.URL);

  if (item.kind === "track") {
    console.log(item);
    res.setHeader("Content-type", "audio/mp3");
    res.setHeader(
      "Content-disposition",
      `attachment; filename='${item.permalink}.mp3'`
    );
    scdl.streamTrack(item, res);
  } else if (item.kind === "playlist") {
    let archive = archiever('zip', {
      zlib: { level: 9 }
    })
    archive.append()
    for(i=0; i > item.tracks.length; i++) {
      scdl.streamTrackArchive(track[i].stream_url, cb(readStream => {
        archive.append(readStream)
      }))

    }
  }
});

app.get("/stream-test", (req, res, next) => {});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
