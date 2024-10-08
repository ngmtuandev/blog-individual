const express = require("express");
const router = express.Router();
const commentController = require("../controller/comment.controller");
const verifyToken = require("../middleware/verifyToken");
router.post("/:slug", [verifyToken], commentController.createComment);
router.put("/:id/like-comment", [verifyToken], commentController.likeComment);

module.exports = router;
