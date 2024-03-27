const path =
  process.env.NODE_ENV === "production" ? "../../.env" : "../../.env.dev";

require("dotenv").config({ path });

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port: process.env.PORT,
    },
    migrations: {
      directory: "../../database/migrations",
    },
    seeds: {
      directory: "../../database/seeds",
    },
  },
};
