const express = require("express");
const app = express();
const path = require('path');
const archiever = require('archiver');

require('dotenv').config(path.resolve(__dirname, '.env'));

const scdl = require("./scdl").init(process.env.CLIENT_ID);

const PORT = process.env.PORT ||8080;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/item-meta", async (req, res, next) => {
  const item = await scdl.getItem(req.query.url);

  res.send(item);
});

app.get("/sound", async (req, res, next) => {
  const item = await scdl.getItem(req.query.url);

  if (item.kind === "track") {
    console.log(item);
    
  } else if (item.kind === "playlist") {

    const size = item.tracks.reduce((bytes, item) => {
      return bytes =+ item.original_content_size;
    });

    res.setHeader("Content-type", "application/zip");
    res.setHeader("Content-size", size);
    res.setHeader(
      "Content-disposition",
      `attachment; filename=${item.permalink}.zip`
    );

    let archive = archiever('zip', {
      zlib: { level: 9 }
    })

    res.on('end', () => console.log('ended'));
    res.on('close', () => console.log('closed'));
    res.on('error', (err) => { throw err });
    res.on('warning', (war) => console.log(war));

    archive.pipe(res);

    await scdl.streamPlaylistArchive(item.tracks, archive);
    archive.finalize();
  }
});


app.get("/get-track", async (req, res, next) => {
  const item = req.query.url;
  
  res.setHeader("Content-type", "audio/mp3");
    res.setHeader(
      "Content-disposition",
      `attachment; filename=${item.permalink}.mp3`
    );      
     scdl.streamTrack(item, res);
});

app.get("/stream-test", (req, res, next) => {});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
