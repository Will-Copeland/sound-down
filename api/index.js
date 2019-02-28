const express = require("express");
const app = express();
const scdl = require("./scdl");
const stream = require("stream");
const fs = require("fs");
const request = require("request");

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
  console.log("Sound submitted!", req.body);
  const item = await scdl.getItem(
    req.body.URL,
    "a3e059563d7fd3372b49b37f00a00bcf"
  );
  if (item.kind === "track") {
    console.log(item.title);
    res.setHeader("Content-type", "audio/mpeg");
    res.setHeader(
      "Content-disposition",
      "attachment; filename=" + "'test.mp3'"
    );
    await scdl.streamTrack(item, "a3e059563d7fd3372b49b37f00a00bcf", track => {
      res.send(track.data);
    });
  }
});

app.get("/stream-test", (req, res, next) => {});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
