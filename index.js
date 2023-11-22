const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1> hii i am netflix server and i am listening </h1>");
});
app.listen(7000, () => {
  console.log("listening on http://localhost:7000");
});
