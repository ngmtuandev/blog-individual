const USER_ROUTES = require("./user.route");
const POST_ROUTES = require("./post.route");
const COMMENT_ROUTES = require("./comment.route");
const initRoutes = (app) => {
  app.use("/api/v1/auth", USER_ROUTES);
  app.use("/api/v1/posts", POST_ROUTES);
  app.use("/api/v1/comment", COMMENT_ROUTES);
};

module.exports = initRoutes;
