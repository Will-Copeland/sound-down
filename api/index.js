const express = require("express");
const app = express();
const scdl = require('./scdl');
const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())



app.get("/test2", (req, res, next) => {
  res.send(["AA"]);
});

app.get("/test", (req, res, next) => {
  res.send(["one", "two", "three"]);
  console.log("Connected");
});

app.post("/sound", async (req, res, next) => {
  console.log("Sound submitted!", req.body);
  const item = await scdl.getItem(req.body.URL,'a3e059563d7fd3372b49b37f00a00bcf');
  if (item.kind === 'track') {
    await scdl.streamTrack(item, 'a3e059563d7fd3372b49b37f00a00bcf', track => {
      // console.log(track);
      console.log(track.headers['content-length']);
      res.send(fs.createReadStream(track), `${item.title}.mp3`);
    


    })
  }
});

app.get('/stream-test', (req, res, next) => {

})

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
