const USER_ROUTES = require("./user.route");
const POST_ROUTES = require("./post.route");
const initRoutes = (app) => {
  app.use("/api/v1/auth", USER_ROUTES);
  app.use("/api/v1/posts", POST_ROUTES);
};

module.exports = initRoutes;
