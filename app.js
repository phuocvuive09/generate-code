import express from "express";
import sha from "./lib/sha.js";
import keyUtilities from "./lib/key-utilities.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Gencode");
});

app.get("/:key", (req, res) => {
  const generator = keyUtilities(sha);
  const code = generator.generate(req.params.key);

  res.send(`<div id='code'>${code}</div>`);
});

app.listen(port);
