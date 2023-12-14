const USER_ROUTES = require("./user.route");

const initRoutes = (app) => {
  app.use("/api/v1/auth", USER_ROUTES);
};

module.exports = initRoutes;
