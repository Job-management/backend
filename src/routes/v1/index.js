const dataCrawlRouter = require("./dataCrawl");
const authRouter = require("./auth");
const userRouter = require("./users")
const express = require("express");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/crawl",
    route: dataCrawlRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/user",
    route: userRouter,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
