const express = require("express");
const { Server } = require("ws");

const app = express();
const port = 3001;

const seriesList = require("./responses/series");
const liveScores = require("./responses/liveGenerator");
console.log("liveScores", liveScores(0, 0))

app.get("/series", (req, res) => {
  res.json(seriesList);
});

app.get("/liveGenerator", (req, res) => {
  res.json(liveScores(0, 0));
});
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

var wss = new Server({ server: server });

wss.on("connection", (ws) => {
  let gameIncrement = 0;
  console.log("JSON.stringify(liveScores(0, gameIncrement))", JSON.stringify(liveScores(0, gameIncrement)))
  ws.send(JSON.stringify(liveScores(0, gameIncrement)));

  setInterval(() => {
    gameIncrement = gameIncrement + 1;
    ws.send(JSON.stringify(liveScores(0, gameIncrement)));
  }, 1000);
});
