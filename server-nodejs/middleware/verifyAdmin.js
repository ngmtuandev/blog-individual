const asyncHandle = require("express-async-handler");

const verifyAdmin = asyncHandle(async (req, res, next) => {
  const { role } = req.user;
  if (req.user) {
    if (+role !== 1) {
      return res.status(401).json({
        status: 1,
        mess: "You are must admin",
      });
    }
    next();
  }
});
module.exports = verifyAdmin;
