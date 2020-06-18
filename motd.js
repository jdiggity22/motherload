'use strict';

const express = require('express');
const cowsay = require("cowsay");
var motd = "Hello cowpokes!";

// Constants
const PORT = 8080;

// App
const app = express();

app.get("/", function (req, res) {
  res.redirect("/Moo!");
});

app.get("/:text", function (req, res) {
  let text;

  try {
    text = req.params.text;
  } catch (e) {
    text = "Hi Awesome People!";
  }
  const responseText = `
    <pre>${cowsay.say({ motd })}</pre>
    <br/><br/>
  `;

  res.send(responseText);
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
