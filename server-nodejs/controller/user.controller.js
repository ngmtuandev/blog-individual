const asyncHandler = require("express-async-handler");
const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const createToken = require("../middleware/createToken");
const userController = {
  register: asyncHandler(async (req, res) => {
    const { name, username, password } = req.body;
    if (!name || !username || !password) {
      res.status(401).json({
        status: -1,
        message: "You cannot leave this field empty",
      });
    }
    const checkUser = await User.findOne({ username });
    if (checkUser) {
      res.status(401).json({
        status: 1,
        message: "This user already exists",
      });
    } else {
      let salt = await bcrypt.genSaltSync(5);
      const newPassword = await bcrypt.hashSync(password, salt);
      const newUserRegister = await User.create({
        ...req.body,
        password: newPassword,
      });
      delete newUserRegister?.data?.password;
      if (newUserRegister) {
        res.status(201).json({
          status: 0,
          message: "Register user successfully",
        });
      }
    }
  }),
  login: asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(401).json({
        status: -1,
        message: "You cannot leave this field empty",
      });
    }
    const findUser = await User.findOne({ username });
    if (!findUser) {
      res.status(401).json({
        status: 1,
        message: "User do not exit",
      });
    } else {
      const comparePassword = await bcrypt.compareSync(
        password,
        findUser.password
      );
      if (!comparePassword) {
        res.status(401).json({
          status: 1,
          message: "Password not match",
        });
      } else {
        const token = await createToken(findUser?._id, findUser?.role);
        res.status(200).json({
          status: 0,
          message: "Login successfully",
          data: {
            user: findUser,
            token: token,
          },
        });
      }
    }
  }),
};

module.exports = userController;
