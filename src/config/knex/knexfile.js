const path =
  process.env.NODE_ENV === "production" ? "../../.env" : "../../.env.dev";

require("dotenv").config({ path });

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: 'app-sql',
      user: 'root',
      password: 'root@',
      database: 'job-management',
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
