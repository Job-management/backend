const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = require("../index");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: MYSQL_HOST || "localhost",
      user: MYSQL_USER || "root",
      password: MYSQL_PASSWORD || "root@",
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
