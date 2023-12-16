const express = require("express");
const router = express.Router();
const postController = require("../controller/post.controller");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");
const cloudDinary = require("../config/cloudDinary");
router.post("/create", [verifyToken, verifyAdmin], postController.createPost);
router.get("/", postController.getPosts);
router.get("/:slug", postController.getOnePost);
router.put("/:slug", [verifyToken, verifyAdmin], postController.updatePost);
router.put("/:slug/like", [verifyToken], postController.likePost);
router.get("/:slug/comment", postController.getCommentPost);
router.put(
  "/:slug/upload",
  [verifyToken],
  cloudDinary.single("image"),
  postController.uploadImagePost
);

module.exports = router;
