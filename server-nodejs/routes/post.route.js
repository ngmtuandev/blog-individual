const express = require("express");
const router = express.Router();
const postController = require("../controller/post.controller");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");
router.post("/create", [verifyToken, verifyAdmin], postController.createPost);
router.get("/", [verifyToken], postController.getPosts);
router.get("/:slug", [verifyToken], postController.getOnePost);
router.put("/:slug", [verifyToken, verifyAdmin], postController.updatePost);
router.put("/:slug/like", [verifyToken], postController.likePost);
router.get("/:slug/comment", [verifyToken], postController.getCommentPost);

module.exports = router;
