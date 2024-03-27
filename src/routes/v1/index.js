const dataCrawlRouter = require("./dataCrawl");
const express = require("express");

const router = express.Router();
console.log(11);
const defaultRoutes = [
  {
    path: "/crawl",
    route: dataCrawlRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
