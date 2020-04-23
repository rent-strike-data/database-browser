// db/models/properties.js

/* ================================= SETUP ================================= */

const uuid = require("uuid");
const { db, TABLES } = require("../../app/config/knex");

/* ============================ PUBLIC METHODS ============================= */

/** Get all properties
 *  @returns   {Array}   Array of property objects.
 */

const getProperties = () => {
  return db(TABLES.PROPERTIES).returning("*");
};

/* ================================ exports ================================ */

module.exports = {
  getProperties
};
