const path =
  process.env.NODE_ENV === "production" ? "../../.env" : "../../.env.dev";

require("dotenv").config({ path });

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      user: "root",
      password: "@root",
      database: "job-management",
      port: "3306",
    },
    migrations: {
      directory: "../../database/migrations",
    },
    seeds: {
      directory: "../../database/seeds",
    },
  },
};
