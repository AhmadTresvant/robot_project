const express = require("express");
const ViteExpress = require("vite-express");
const client = require('./db/client');

const app = express();


client.connect();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
