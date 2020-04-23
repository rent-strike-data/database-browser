/*
   Route handlers for fetching and updating properties.
*/

/* ================================= SETUP ================================= */

// import model
const properties = require("../../db/models/properties");
const utils = require("../utils");

/* ============================ ROUTE HANDLERS ============================= */

/** Get all properties
 *  @returns  {Array|Object}   Array of property objects OR error message
 */
const getProperties = (req, res, next) => {
  return properties
    .getProperties()
    .then(properties => {
      res.locals.testData = { ...properties };
      return res.status(200).json(properties);
    })
    .catch(err => res.status(500).json({ message: err.message }));
};

/* ================================ EXPORT ================================= */

module.exports = {
  getProperties
};
