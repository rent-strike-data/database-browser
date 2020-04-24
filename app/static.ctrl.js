/*
   route handlers to serve static client files
*/

/* ================================= SETUP ================================= */

const path = require("path");
const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? process.env.APP_HOST
    : "http://localhost:3000";

/* ============================ ROUTE HANDLERS ============================= */

const serveClient = (req, res) => {
  console.log(`static.ctrl.js > 16: serveClient`);
  res.status(200).sendFile(path.join(__dirname, "../client/build/index.html"));
};

/* ================================ EXPORT ================================= */

module.exports = { serveClient };
