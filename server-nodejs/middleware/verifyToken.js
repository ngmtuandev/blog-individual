const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const verifyToken = asyncHandler(async (req, res, next) => {
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    const token = req?.headers?.authorization?.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
      if (error) {
        return res.status(401).json({
          status: 1,
          message: "Token not verify",
        });
      }
      req.user = decode;
      next();
    });
  } else {
    return res.status(401).json({
      status: -1,
      message: "Token not verify",
    });
  }
});

module.exports = verifyToken;
