const express = require("express");
const router = express.Router();
const postController = require("../controller/post.controller");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");
router.post("/create", [verifyToken, verifyAdmin], postController.createPost);
router.get("/:slug", [verifyToken], postController.getOnePost);

module.exports = router;
