const jwt = require("jsonwebtoken");

const createToken = (user_id, role) => {
  return jwt.sign({ id: user_id, role }, process.env.JWT_SECRET, {
    expiresIn: "55000s",
  });
};

module.exports = createToken;
