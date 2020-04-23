/*
    Purpose: setup KnexJS with environment-specific configuration
*/

const knex = require("knex");
const environment = process.env.NODE_CONFIG_ENV || "development";
console.log(`################## ENVIRONMENT ###############`);
console.log(environment);
const config = require("../../knexfile");
exports.configConnection = config[environment].connection;

exports.db = knex(config[environment]);

exports.TABLES = {
  PROPERTIES: "properties",
  OWNERS: "owners"
};
