const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const verifyToken = require("../middleware/verifyToken");
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/me", [verifyToken], userController.getMe);

module.exports = router;
