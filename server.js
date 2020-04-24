"use strict";

// set up ======================================================================
const express = require("express");
const app = express();
const middleware = require("./middleware");
app.use(middleware);
app.set("trust proxy", true);
const dotenv = require("dotenv").config();
const path = require("path");

// connect to db

const pg = require("pg");
const configDB = require("./app/config/knex");
const client = new pg.Client(configDB.configConnection);
client.connect(err => {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].theTime);
    client.end();
  });
});

// routes ======================================================================
const apiRoutes = require("./app/routes/apiRoutes");
const staticRoutes = require("./app/routes/staticRoutes");

// set static path
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build/")));
}

/* ================================ ROUTES ================================= */

app.use("/api", apiRoutes);
// app.use("/", staticRoutes);

app.get("*", (req, res) => {
  console.log("root route, serving client");
  res.status(200).sendFile(path.join(__dirname, "/client/build/index.html"));
});

// launch ======================================================================
var port = process.env.PORT || 3001;
if (!module.parent) {
  app.listen(port, function() {
    console.log("Node.js listening on port " + port + "...");
    console.log(
      `################## server.js > NODE_CONFIG_ENV: ${process.env.NODE_CONFIG_ENV}`
    );
  });
}

module.exports = app;
