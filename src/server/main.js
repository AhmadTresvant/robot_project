const express = require("express");
const ViteExpress = require("vite-express");
const client = require('./db/client');

const app = express();

client.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send("Hello Robot!");
});

app.use("/api", require("./api/index"))

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
