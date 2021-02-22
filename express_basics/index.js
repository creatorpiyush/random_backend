const express = require("express");
const app = express();

const port = process.env.PORT || 5555;

app.get("/", (req, res) => {
  console.log(req.originalUrl);
  res.send("hi");
});

app.get("/user", (req, res) => {
  console.log(req.originalUrl);
  res.send("hi from user");
});

app.get("/:aa", (req, res) => {
  console.log(req.originalUrl);
  res.send("hi from " + req.params.aa);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
