require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_ENDPOINT,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
    //, debug: "knex:tx" // toggle this to turn off debugging console output
  },
  testing: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.TEST_DATABASE_NAME
    },
    migrations: {
      directory: "./db/migrations/testing"
    },
    seeds: {
      directory: "./db/seeds/testing"
    }
  },
  staging: {
    client: "pg",
    connection: process.env.DATABASE_ENDPOINT,
    migrations: {
      directory: "./db/migrations/production"
    },
    seeds: {
      directory: "./db/seeds/production"
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_ENDPOINT,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/production"
    }
  }
};
